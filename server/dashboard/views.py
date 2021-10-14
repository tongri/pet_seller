from django.core.exceptions import ObjectDoesNotExist
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.decorators import action
from rest_framework.mixins import RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, CreateModelMixin, \
    ListModelMixin
from rest_framework.permissions import IsAuthenticated, SAFE_METHODS
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from .custom_account_permission import OwnAccountPermission
from .custom_exceptions import NoFiles
from .custom_favourite_permission import FavouritePermission
from .custom_pet_permission import OwnPetPermission, PrivatePetPermission
from .models import Pet, MyUser, ImagePet, FavouritePet

# Create your views here.
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from .serializers import RegSerializer, LoginUserSerializer, PetSerializer, DetailPetSerializer, MyUserSerializer, \
    PetIdSerializer, FavouritePetSerializer, DetailFavouritePetSerializer
from pet import settings
from django_filters.rest_framework import DjangoFilterBackend


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


''''@receiver(post_save, sender=Pet)
def create_health_pet(sender, instance=None, created=False, **kwargs):
    if created:
        Health.objects.create(pet=instance)'''


class CreateAuth(APIView):
    """
    Creating new User
    """
    def post(self, request, *args, **kwargs):
        serialized = RegSerializer(data=request.data)
        if serialized.is_valid():
            user = serialized.save()
            user.save()
            token = Token.objects.get(user=user)
            return Response({'id': user.id, 'token': token.key, 'username': user.username}, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        # get token via logging in
        serializer = LoginUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'id': user.id,
            'token': token.key,
            "username": user.username
        })


class VerifyToken(APIView):

    def post(self, request):
        if request.auth is not None and request.auth.user:
            user = request.auth.user
            return Response({
                'id': user.id,
                'username': user.username,
                'token': user.auth_token.key
            })
        return Response({'error': 'invalid user credentials'}, status=status.HTTP_403_FORBIDDEN)


class CitiesByCountry(APIView):
    """
    View to get cities according to country
    """
    def get(self, request):
        country = request.query_params.get('country')
        if country == Pet.UKRAINE:
            return Response({'cities': ['Kharkiv', 'Kyiv']})
        elif country == Pet.POLAND:
            return Response({'cities': ['Warsaw', 'Wroclaw']})
        elif country == Pet.RUSSIA:
            return Response({'cities': ['Moskow', 'St. Peterburg']})
        return Response({'cities': []})


'''class HealthModelViewSet(ModelViewSet):
    serializer_class = HealthSerializer
    queryset = Health.objects.all()
    permission_classes = (OwnHealthPermission, )'''


class PetModelViewSet(ModelViewSet):
    serializer_class = PetSerializer
    queryset = Pet.objects.filter(is_active=True)
    permission_classes = (OwnPetPermission, )
    filter_backends = (DjangoFilterBackend, )
    filterset_fields = ('country', 'city', 'kind_of_animal', 'gender', 'size', 'age', 'state_of_health', 'name')

    def get_serializer_class(self):
        if self.action not in ['destroy', 'update', 'create']:
            return DetailPetSerializer
        return super().get_serializer_class()

    def filter_queryset(self, queryset):
        queryset = super().filter_queryset(queryset)
        if self.action == 'retrieve':
            return queryset
        if self.request.user.is_authenticated and self.request.method in SAFE_METHODS:
            queryset = queryset.exclude(owner=self.request.user)
        return queryset

    def perform_create(self, serializer):
        if 'files' in self.request.FILES.keys() and len(self.request.FILES.getlist('files')):
            super().perform_create(serializer)
            instance = Pet.objects.get(id=serializer.data.get('id'))
            ImagePet.objects.bulk_create([
                ImagePet(pet=instance, image=image) for image in self.request.FILES.getlist('files')
            ])
        else:
            raise NoFiles

    def perform_update(self, serializer):
        if self.request.method == 'PUT' or self.request.method == 'PATCH':
            if 'files' in self.request.FILES.keys() and len(self.request.FILES.getlist('files')):
                super().perform_update(serializer)
                instance = Pet.objects.get(id=serializer.data.get('id'))
                ImagePet.objects.bulk_create([
                    ImagePet(pet=instance, image=image) for image in self.request.FILES.getlist('files')
                ])
            else:
                raise NoFiles
        else:
            super().perform_update(serializer)

    @action(methods=['get'], detail=False, permission_classes=(IsAuthenticated,))
    def get_my_ads(self, request):
        ser = DetailPetSerializer(Pet.objects.filter(owner=request.user), context={'request': request}, many=True)
        return Response(ser.data)

    @action(methods=('post', ), detail=False)
    def get_recently_viewed(self, request):
        ser = PetIdSerializer(data=request.data)
        if ser.is_valid():
            pets = Pet.objects.filter(id__in=ser.data.get('ids'))
            pets_serialized = DetailPetSerializer(pets, context={'request': request}, many=True)
            return Response({'data': pets_serialized.data})
        return Response({'errors': ser.errors}, status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    def check_if_exists(pk):
        try:
            pet = Pet.objects.get(id=pk)
            return pet
        except ObjectDoesNotExist:
            return None

    @action(methods=('get',), detail=True, permission_classes=(PrivatePetPermission, ))
    def personal(self, request, pk=None):
        if pk is not None:
            pet = self.check_if_exists(pk)
            if pet is None:
                return Response({'error': 'wrong pet id'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                ser = DetailPetSerializer(pet, context={"request": request})
                return Response(ser.data)
        return Response({'error': 'no pet id'}, status=status.HTTP_400_BAD_REQUEST)

    @personal.mapping.delete
    def personal_delete(self, request, pk=None):
        if pk is not None:
            pet = self.check_if_exists(pk)
            if pet is None:
                return Response({'error': 'wrong pet id'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                pet.delete()
                return Response({'status': 'deleted'}, status=status.HTTP_200_OK)
        return Response({'error': 'no pet id'}, status=status.HTTP_400_BAD_REQUEST)

    @personal.mapping.patch
    def personal_patch(self, request, pk=None):
        if pk is None:
            return Response({'error': 'no pet id'}, status=status.HTTP_400_BAD_REQUEST)

        pet = self.check_if_exists(pk)
        if pet is None:
            return Response({'error': 'wrong pet id'}, status=status.HTTP_400_BAD_REQUEST)

        pet_serializer = PetSerializer(pet, data=request.data, partial=True)
        pet_serializer.is_valid(raise_exception=True)
        pet_serializer.save()

        return Response(pet_serializer.validated_data)


class MyUserModelViewSet(RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, GenericViewSet):
    permission_classes = (OwnAccountPermission,)
    serializer_class = MyUserSerializer
    queryset = MyUser.objects.all()


class FavouriteModelViewSet(RetrieveModelMixin, ListModelMixin, DestroyModelMixin, CreateModelMixin, GenericViewSet):
    permission_classes = (FavouritePermission,)
    serializer_class = FavouritePetSerializer
    queryset = FavouritePet.objects.all()

    def get_serializer_class(self):
        if self.action not in {'destroy', 'update', 'create'}:
            return DetailFavouritePetSerializer
        return super().get_serializer_class()

    def filter_queryset(self, queryset):
        queryset = super().filter_queryset(queryset)
        return queryset.filter(user=self.request.user)

    @action(methods=('delete',), detail=False, permission_classes=(FavouritePermission,))
    def remove_favourite(self, request, pk=None):
        pet_id = request.query_params.get('pet')
        user = request.user

        pet = FavouritePet.objects.get(pet=pet_id, user=user)
        if not pet:
            return Response({"error": "Pet not found"}, status=status.HTTP_404_NOT_FOUND)

        pet.delete()
        return Response({"status": "success"})
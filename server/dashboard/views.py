from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.mixins import RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from .custom_account_permission import OwnAccountPermission
from .custom_pet_permission import OwnPetPermission
from .models import Pet, MyUser
# Create your views here.
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from .serializers import RegSerializer, LoginUserSerializer, PetSerializer, DetailPetSerializer, MyUserSerializer
from pet import settings


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class CreateAuth(APIView):  # creating new user

    def post(self, request, *args, **kwargs):
        serialized = RegSerializer(data=request.data)
        if serialized.is_valid():
            user = serialized.save()
            user.save()
            token = Token.objects.get(user=user)
            return Response({'token': token.key, 'username': user.username}, status=status.HTTP_201_CREATED)
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
            'token': token.key,
            "username": user.username
        })


class VerifyToken(APIView):

    def post(self, request):
        user = request.auth.user
        if user.is_authenticated:
            return Response({
                'username': user.username,
                'token': user.auth_token.key
            })


class CitiesByCountry(APIView): # view to get cities according to country

    def get(self, request):
        country = request.query_params.get('country')
        if country is Pet.UKRAINE:
            return Response({"data": {'cities': ['Kharkiv', 'Kyiv']}})
        elif country is Pet.POLAND:
            return Response({"data": {'cities': ['Warsaw', 'Wroclaw']}})
        return Response({'data': None})


class PetModelViewSet(ModelViewSet):
    serializer_class = PetSerializer
    queryset = Pet.objects.all()
    permission_classes = (OwnPetPermission, )

    def get_serializer_class(self):
        if self.action not in ['destroy', 'update', 'create']:
            return DetailPetSerializer
        return super().get_serializer_class()

    def filter_queryset(self, queryset):
        queryset = super().filter_queryset(queryset)
        if self.request.user.is_authenticated:
            queryset = queryset.exclude(owner=self.request.user)
        return queryset


class MyUserModelViewSet(RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, GenericViewSet):
    permission_classes = (OwnAccountPermission, )
    serializer_class = MyUserSerializer
    queryset = MyUser.objects.all()

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegSerializer, LoginUserSerializer
from pet import settings


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


@api_view(['POST'])
def create_auth(request):  # creating new user
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


@api_view(['POST'])
def verify_token(request):
    user = request.auth.user
    if user.is_authenticated:
        return Response({
            'username': user.username,
            'token': user.auth_token.key
        })

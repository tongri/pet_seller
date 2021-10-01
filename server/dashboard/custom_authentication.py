from rest_framework.authentication import TokenAuthentication
from django.utils import timezone
from rest_framework.authtoken.models import Token


class CustomTokenAuthentication(TokenAuthentication):
    model = Token

    def authenticate_credentials(self, key):
        try:
            user, token = super().authenticate_credentials(key)
            return user, token
        except:
            pass

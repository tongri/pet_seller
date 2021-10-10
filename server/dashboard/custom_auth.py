from rest_framework.authentication import TokenAuthentication
from django.utils import timezone


class TemporaryTokenAuthentication(TokenAuthentication):

    def authenticate_credentials(self, key):
        try:
            user, token = super().authenticate_credentials(key)
            return user, token
        except:
            pass

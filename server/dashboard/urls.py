from django.urls import path
from .views import CustomAuthToken, verify_token

from dashboard.views import create_auth

urlpatterns = [
    path('reg/', create_auth),
    path('login/', CustomAuthToken.as_view()),
    path('token-verify/', verify_token)
]

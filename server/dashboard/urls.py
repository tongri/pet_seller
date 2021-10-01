from django.urls import path
from rest_framework import routers

from .views import CustomAuthToken, VerifyToken, CitiesByCountry, PetModelViewSet, MyUserModelViewSet

from .views import CreateAuth

router = routers.SimpleRouter()
router.register(r'pets', PetModelViewSet)
router.register(r'user', MyUserModelViewSet)


urlpatterns = [
    path('reg/', CreateAuth.as_view()),
    path('login/', CustomAuthToken.as_view()),
    path('token-verify/', VerifyToken.as_view()),
    path('get-cities/', CitiesByCountry.as_view()),
    *router.urls
]

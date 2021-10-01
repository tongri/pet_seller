from django.urls import path
from rest_framework import routers

from .views import CustomAuthToken, VerifyToken, CitiesByCountry, PetModelViewSet, MyUserModelViewSet, \
    HealthModelViewSet

from dashboard.views import CreateAuth

router = routers.SimpleRouter()
router.register(r'pets', PetModelViewSet)
router.register(r'user', MyUserModelViewSet)
router.register(r'health', HealthModelViewSet)


urlpatterns = [
    path('reg/', CreateAuth.as_view()),
    path('login/', CustomAuthToken.as_view()),
    path('token-verify/', VerifyToken.as_view()),
    path('get-cities/', CitiesByCountry.as_view()),
    *router.urls
]

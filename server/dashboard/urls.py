from django.conf.urls.static import static
from django.urls import path
from rest_framework import routers

from pet import settings
from .views import CustomAuthToken, VerifyToken, CitiesByCountry, PetModelViewSet, MyUserModelViewSet, \
    FavouriteModelViewSet, GoogleAuth

from .views import CreateAuth

router = routers.SimpleRouter()
router.register(r'pets', PetModelViewSet)
router.register(r'user', MyUserModelViewSet)
router.register(r'favourite', FavouriteModelViewSet)
#router.register(r'health', HealthModelViewSet)


urlpatterns = [
    path('reg/', CreateAuth.as_view()),
    path('login/', CustomAuthToken.as_view()),
    path('token-verify/', VerifyToken.as_view()),
    path('get-cities/', CitiesByCountry.as_view()),
    path('google_auth/', GoogleAuth.as_view()),
    #path('/', ImageApiView.as_view()),
    *router.urls
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)

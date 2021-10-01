from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import BasePermission
from .models import Pet


class OwnPetPermission(BasePermission):
    def has_permission(self, request, view):
        if view.action is 'create':
            return request.user.is_authenticated
        elif view.action in ('update', 'partial_update', 'destroy'):
            pk = view.kwargs.get('pk')
            if not pk:
                return True
            try:
                pet = Pet.objects.get(pk=pk)
            except ObjectDoesNotExist:
                return True
            else:
                return True if pet.owner == request.user or request.user.is_superuser else False
        return True

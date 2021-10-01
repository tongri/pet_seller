from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import BasePermission

from dashboard.models import MyUser


class OwnAccountPermission(BasePermission):
    def has_permission(self, request, view):
        if view.action in ('update', 'partial_update', 'destroy'):
            pk = view.kwargs.get('pk')
            if not pk:
                return True
            try:
                user = MyUser.objects.get(pk=pk)
            except ObjectDoesNotExist:
                return True
            else:
                return True if user == request.user or request.user.is_superuser else False
        return True
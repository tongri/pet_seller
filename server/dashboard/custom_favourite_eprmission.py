from rest_framework.permissions import BasePermission


class FavouritePermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user

    def has_permission(self, request, view):
        return request.user.is_authenticated

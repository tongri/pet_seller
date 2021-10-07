from django.contrib.auth import authenticate
from rest_framework import serializers

from .models import MyUser, Pet, ImagePet


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class RegSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = MyUser

    def create(self, validated_data):
        user = MyUser.objects.create_user(username=validated_data['username'], password=validated_data['password'])
        return user


class MyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ('id', 'first_name', 'last_name', 'username', 'number', 'email')


'''class HealthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Health
        fields = '__all__'''


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'


class PetIdSerializer(serializers.Serializer):
    ids = serializers.ListField(child=serializers.IntegerField())


class ImagePetHyperlinked(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ImagePet
        fields = ('image', )


class DetailPetSerializer(serializers.ModelSerializer):
    owner = MyUserSerializer()
    #health = HealthSerializer()
    images = ImagePetHyperlinked(many=True)
    birthday = serializers.CharField()

    class Meta:
        model = Pet
        fields = '__all__'


class ImagePetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagePet
        fields = '__all__'

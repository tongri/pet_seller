from django.contrib.auth import authenticate
from rest_framework import serializers

from .models import MyUser, Pet, ImagePet, FavouritePet


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
        fields = ('id', 'first_name', 'username', 'number', 'email')


'''class HealthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Health
        fields = '__all__'''


class ImagePetHyperlinked(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ImagePet
        fields = ('image',)


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'


class PetIdSerializer(serializers.Serializer):
    ids = serializers.ListField(child=serializers.IntegerField())


class DetailPetSerializer(serializers.ModelSerializer):
    owner = MyUserSerializer()
    # health = HealthSerializer()
    files = ImagePetHyperlinked(many=True)
    birthday = serializers.CharField()

    class Meta:
        model = Pet
        fields = '__all__'

    def to_representation(self, instance):
        response = super().to_representation(instance)

        user = self.context["request"].user
        if not user.is_authenticated:
            response['is_liked'] = False
            print("user is not authenticated")
        else:
            print(user)
            response['is_liked'] = len(user.favouritepet_set.filter(pet=instance.id)) != 0

        return response


class ImagePetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagePet
        fields = '__all__'


class DetailFavouritePetSerializer(serializers.ModelSerializer):
    pet = DetailPetSerializer()

    class Meta:
        model = FavouritePet
        exclude = ('user',)

    def to_representation(self, instance):
        return DetailPetSerializer(instance.pet, context=self.context).data


class FavouritePetSerializer(serializers.ModelSerializer):
    # is_active = serializers.BooleanField(default=True)

    class Meta:
        model = FavouritePet
        fields = '__all__'

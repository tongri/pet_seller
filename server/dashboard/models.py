import datetime as dt

from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator
from django.db import models
from dateutil.relativedelta import relativedelta
# Create your models here.
from django.utils import timezone


class MyUser(AbstractUser):
    UKRAINE = 'ukraine'
    POLAND = 'poland'
    RUSSIA = 'russia'
    COUNTRY_CHOICES = (
        (UKRAINE, 'Ukraine'),
        (POLAND, 'Poland'),
        (RUSSIA, 'Russia')
    )
    username = models.CharField(max_length=20, unique=True)
    number = models.CharField(max_length=13, unique=True, validators=[RegexValidator(regex=r'\+\d{9,14}')], blank=True,
                              null=True)
    country = models.CharField(max_length=7, choices=COUNTRY_CHOICES, blank=True, null=True)
    city = models.CharField(max_length=20, blank=True, null=True)
    first_name = models.CharField(max_length=20, null=True)
    last_name = models.CharField(max_length=20, null=True)
    email = models.EmailField(max_length=20, null=True)


class Pet(models.Model):
    DOG = 'Dog'
    CAT = 'Cat'
    ANIMALS_CHOICES = (
        (DOG, 'Dog'),
        (CAT, 'Cat')
    )
    MALE = 'Male'
    FEMALE = 'Female'
    GENDER_CHOICES = (
        (MALE, 'Male'),
        (FEMALE, 'Female'),
    )
    UKRAINE = 'Ukraine'
    POLAND = 'Poland'
    RUSSIA = 'Russia'
    COUNTRY_CHOICES = (
        (UKRAINE, 'Ukraine'),
        (POLAND, 'Poland'),
        (RUSSIA, 'Russia')
    )
    S_SIZE = '10-30'
    M_SIZE = '30-50'
    L_SIZE = '50-70'
    SIZES = (
        (S_SIZE, S_SIZE),
        (M_SIZE, M_SIZE),
        (L_SIZE, L_SIZE)
    )
    owner = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    name = models.CharField(max_length=30)
    kind_of_animal = models.CharField(max_length=10, choices=ANIMALS_CHOICES)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    age = models.PositiveSmallIntegerField()
    days = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(365)])
    breed = models.CharField(max_length=40, blank=True, null=True)
    bio = models.TextField()
    country = models.CharField(max_length=7, choices=COUNTRY_CHOICES)
    city = models.CharField(max_length=20)
    date = models.DateField(auto_now_add=True)
    size = models.CharField(max_length=10, default=M_SIZE)
    HEALTHY = 'Healthy'
    ILL = 'Ill'
    HEALTH_CHOICES = (
        (HEALTHY, 'Healthy'),
        (ILL, 'Ill')
    )
    FEARFULNESS = 'Fearfulness'
    RABIES = 'Rabies'
    DISORDER_CHOICES = (
        (FEARFULNESS, 'Fearfulness'),
        (RABIES, 'Rabies')
    )
    vaccination = models.CharField(max_length=40, blank=True, null=True)
    allergies = models.CharField(max_length=40, blank=True, null=True)
    state_of_health = models.CharField(max_length=7, choices=HEALTH_CHOICES, blank=True, null=True)
    disease = models.TextField(blank=True, null=True)
    behaviour_disorders = models.CharField(max_length=11, choices=DISORDER_CHOICES, blank=True, null=True)
    disorders_description = models.TextField(blank=True, null=True)

    @property
    def birthday(self):
        return dt.date.today() - relativedelta(years=self.age, days=self.days)


class ImagePet(models.Model):
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE, related_name='files', related_query_name='files')
    image = models.FileField(upload_to='uploads/')


class FavouritePet(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)


'''class Health(models.Model):
    HEALTHY = 'H'
    ILL = 'I'
    HEALTH_CHOICES = (
        (HEALTHY, 'Healthy'),
        (ILL, 'Ill')
    )
    FEARFULNESS = 'F'
    RABIES = 'R'
    DISORDER_CHOICES = (
        (FEARFULNESS, 'Fearfulness'),
        (RABIES, 'Rabies')
    )
    pet = models.OneToOneField(Pet, on_delete=models.CASCADE)
    vaccination = models.CharField(max_length=40, blank=True, null=True)
    allergies = models.CharField(max_length=40, blank=True, null=True)
    state_of_health = models.CharField(max_length=1, choices=HEALTH_CHOICES, blank=True, null=True)
    disease = models.TextField(blank=True, null=True)
    behaviour_disorders = models.CharField(max_length=1, choices=DISORDER_CHOICES, blank=True, null=True)
    disorders_description = models.TextField(blank=True, null=True)'''

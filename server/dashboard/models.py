from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator
from django.db import models

# Create your models here.


class MyUser(AbstractUser):
    UKRAINE = 'U'
    POLAND = 'P'
    COUNTRY_CHOICES = (
        (UKRAINE, 'Ukraine'),
        (POLAND, 'Poland')
    )
    username = models.CharField(max_length=20, unique=True)
    number = models.CharField(max_length=13, unique=True, validators=[RegexValidator(regex=r'\+\d{9, 14}')], blank=True, null=True)
    country = models.CharField(max_length=1, choices=COUNTRY_CHOICES, blank=True)
    city = models.CharField(max_length=20, blank=True)


class Pet(models.Model):
    DOG = 'dog'
    CAT = 'cat'
    ANIMALS_CHOICES = (
        (DOG, 'Dog'),
        (CAT, 'Cat')
    )
    MALE = 'm'
    FEMALE = 'f'
    GENDER_CHOICES = (
        (MALE, 'Male'),
        (FEMALE, 'Female'),
    )
    UKRAINE = 'U'
    POLAND = 'P'
    COUNTRY_CHOICES = (
        (UKRAINE, 'Ukraine'),
        (POLAND, 'Poland')
    )
    owner = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    kind_of_animal = models.CharField(max_length=3, choices=ANIMALS_CHOICES)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    age = models.PositiveSmallIntegerField()
    days = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(365)])
    breed = models.CharField(max_length=40, blank=True)
    bio = models.TextField()
    country = models.CharField(max_length=1, choices=COUNTRY_CHOICES)
    city = models.CharField(max_length=20)


class Health(models.Model):
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
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    vaccination = models.CharField(max_length=40, blank=True)
    allergies = models.CharField(max_length=40, blank=True)
    state_of_health = models.CharField(max_length=1, choices=HEALTH_CHOICES, blank=True)
    disease = models.TextField(blank=True)
    behaviour_disorders = models.CharField(max_length=1, choices=DISORDER_CHOICES, blank=True)
    disorders_description = models.TextField(blank=True)

from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.


class MyUser(AbstractUser):
    username = models.CharField(max_length=20, unique=True)

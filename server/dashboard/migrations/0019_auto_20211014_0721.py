# Generated by Django 3.2.7 on 2021-10-14 07:21

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0018_alter_imagepet_pet'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pet',
            name='age',
            field=models.PositiveSmallIntegerField(validators=[django.core.validators.MinValueValidator(0)]),
        ),
        migrations.AlterField(
            model_name='pet',
            name='days',
            field=models.PositiveSmallIntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(365)]),
        ),
    ]
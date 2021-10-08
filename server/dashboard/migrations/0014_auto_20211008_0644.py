# Generated by Django 3.2.7 on 2021-10-08 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0013_auto_20211008_0640'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pet',
            name='behaviour_disorders',
            field=models.CharField(blank=True, choices=[('Fearfulness', 'Fearfulness'), ('Rabies', 'Rabies')], max_length=11, null=True),
        ),
        migrations.AlterField(
            model_name='pet',
            name='country',
            field=models.CharField(choices=[('Ukraine', 'Ukraine'), ('Polland', 'Poland'), ('Russia', 'Russia')], max_length=7),
        ),
        migrations.AlterField(
            model_name='pet',
            name='gender',
            field=models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], max_length=6),
        ),
        migrations.AlterField(
            model_name='pet',
            name='kind_of_animal',
            field=models.CharField(choices=[('Dog', 'Dog'), ('Cat', 'Cat')], max_length=10),
        ),
        migrations.AlterField(
            model_name='pet',
            name='state_of_health',
            field=models.CharField(blank=True, choices=[('Healthy', 'Healthy'), ('Ill', 'Ill')], max_length=7, null=True),
        ),
    ]

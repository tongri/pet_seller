# Generated by Django 3.2.7 on 2021-10-11 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0016_favouritepet'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pet',
            name='country',
            field=models.CharField(choices=[('Ukraine', 'Ukraine'), ('Poland', 'Poland'), ('Russia', 'Russia')], max_length=7),
        ),
    ]

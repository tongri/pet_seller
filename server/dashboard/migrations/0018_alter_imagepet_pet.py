# Generated by Django 3.2.7 on 2021-10-12 12:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0017_alter_pet_country'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imagepet',
            name='pet',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='files', related_query_name='files', to='dashboard.pet'),
        ),
    ]
# Generated by Django 3.2.7 on 2021-10-05 09:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ImagePet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(upload_to='uploads/')),
                ('pet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboard.pet')),
            ],
        ),
    ]

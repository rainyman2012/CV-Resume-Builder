# Generated by Django 2.2.3 on 2019-11-03 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_profile_contact'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='contact_en',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='contact_fa',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]

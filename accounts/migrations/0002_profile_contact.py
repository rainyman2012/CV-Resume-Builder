# Generated by Django 2.2.3 on 2019-11-03 09:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='contact',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]

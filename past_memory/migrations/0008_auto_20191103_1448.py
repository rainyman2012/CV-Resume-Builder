# Generated by Django 2.2.3 on 2019-11-03 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('past_memory', '0007_auto_20191103_1437'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='skill',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='skill',
            name='skill_en',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='skill',
            name='skill_fa',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]

# Generated by Django 2.2.3 on 2019-11-06 13:08

import ckeditor_uploader.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('past_memory', '0011_auto_20191106_0848'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='about_company',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='experience',
            name='website',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]

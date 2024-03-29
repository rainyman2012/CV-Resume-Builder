# Generated by Django 2.2.3 on 2019-11-03 14:29

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('past_memory', '0005_educations_skill'),
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('grade', models.CharField(blank=True, max_length=100, null=True)),
                ('major', models.CharField(blank=True, max_length=100, null=True)),
                ('Article_names', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True)),
                ('resume', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='past_memory.Resume')),
            ],
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(blank=True, max_length=100, null=True)),
                ('work_from', models.DateField()),
                ('work_to', models.DateField()),
                ('duties_and_achivements', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True)),
                ('resume', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='past_memory.Resume')),
            ],
        ),
        migrations.CreateModel(
            name='music',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('music', models.FileField(upload_to='uploads/')),
                ('resume', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='past_memory.Resume')),
            ],
        ),
        migrations.DeleteModel(
            name='Educations',
        ),
        migrations.AddField(
            model_name='skill',
            name='resume',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='past_memory.Resume'),
        ),
    ]

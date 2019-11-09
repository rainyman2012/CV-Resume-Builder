from django.db import models
from jsonfield import JSONField
import uuid
import base64
from PIL import Image
from django.db.models import Q
from django.db.models.signals import pre_save
from django.conf import settings
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

# Generate a specific uuid.


def generate_uuid():
    _uuid = base64.urlsafe_b64encode(uuid.uuid4().bytes)
    _uuid = _uuid.decode('utf-8').replace('=', '')
    return _uuid


class ResumeManager(models.Manager):

    def create(self, **kwargs):
        obj = super().create(**kwargs)
        return obj

    def get_model_fields(self):
        return self.model._meta.fields


class Resume(models.Model):

    name = models.CharField(max_length=200, blank=True, null=True)
    uuid = models.CharField(max_length=32, blank=True,
                            null=True, default=generate_uuid)

    lang = models.CharField(max_length=10, default="fa")

    introduce = RichTextUploadingField(blank=True, null=True)
    abstract = RichTextField(blank=True, null=True)
    contact_info = RichTextUploadingField(blank=True, null=True)
    lang = models.CharField(max_length=10, default="fa")

    objects = ResumeManager()

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name='program',
        on_delete=models.CASCADE, null=True, blank=True
    )

    class Meta:
        permissions = [
            ("create_resume", "Can add, edit, delete, update a general survey"),
            ("create_pdf",
             "Can create a pdf from their information"),
        ]

    def __str__(self):
        return self.name

    # Event Meta


class Picture(models.Model):
    image = models.ImageField(
        upload_to="picture/", height_field=None, width_field=None, max_length=None)
    name = models.CharField(max_length=200, blank=True, null=True)

    resume = models.ForeignKey(
        Resume, blank=True, null=True, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        try:
            img = Image.open(self.image.path)
            if img.height > 300 or img.width > 300:
                output_size = (300, 400)
                img.thumbnail(output_size)
                img.save(self.image.path)
        except:
            pass

    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)

    def __str__(self):
        if self.name:
            return self.name
        elif self.image:
            return self.image.name.rsplit('/', 1)[-1]
        else:
            return "--"

    @property
    def imagename(self):
        img_name = self.image.name.rsplit('/', 1)[-1]
        return img_name


class Skill(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    point = models.PositiveSmallIntegerField(blank=True, null=True)
    resume = models.ForeignKey(
        Resume, on_delete=models.CASCADE, null=True, blank=True
    )
    image = models.ImageField(
        upload_to="skills/", height_field=None, width_field=None, max_length=None, null=True, blank=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        try:
            img = Image.open(self.image.path)
            output_size = (150, 150)
            img.thumbnail(output_size)
            img.save(self.image.path)
        except:
            pass

    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)

    def __str__(self):
        if self.name:
            return self.name
        elif self.image:
            return self.image.name.rsplit('/', 1)[-1]
        else:
            return "--"

    @property
    def imagename(self):
        img_name = self.image.name.rsplit('/', 1)[-1]
        return img_name


class Education(models.Model):
    grade = models.CharField(max_length=100, blank=True, null=True)
    major = models.CharField(max_length=100, blank=True, null=True)
    university = models.CharField(max_length=100, blank=True, null=True)
    website = models.CharField(max_length=100, blank=True, null=True)

    Article_names = RichTextUploadingField(blank=True, null=True)

    resume = models.ForeignKey(
        Resume, on_delete=models.CASCADE, null=True, blank=True
    )

    def __str__(self):
        return self.grade


class Experience(models.Model):
    company_name = models.CharField(max_length=100, blank=True, null=True)
    work_from = models.DateField(
        auto_now=False, auto_now_add=False, blank=True, null=True)
    work_to = models.DateField(
        auto_now=False, auto_now_add=False, blank=True, null=True)
    website = models.CharField(max_length=100, blank=True, null=True)
    about_company = RichTextUploadingField(blank=True, null=True)
    duties_and_achivements = RichTextUploadingField(blank=True, null=True)
    resume = models.ForeignKey(
        Resume, on_delete=models.CASCADE, null=True, blank=True
    )
    image = models.ImageField(
        upload_to="experiences/", height_field=None, width_field=None, max_length=None, null=True, blank=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        try:
            img = Image.open(self.image.path)
            output_size = (150, 150)
            img.thumbnail(output_size)
            img.save(self.image.path)
        except:
            pass

    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)

    def __str__(self):
        return self.company_name

    @property
    def imagename(self):
        img_name = self.image.name.rsplit('/', 1)[-1]
        return img_name


class Music(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    music = models.FileField(upload_to='uploads/')
    resume = models.ForeignKey(
        Resume, on_delete=models.CASCADE, null=True, blank=True
    )

    def __str__(self):
        return self.name

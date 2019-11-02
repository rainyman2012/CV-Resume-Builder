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


class Post(models.Model):

    name = models.CharField(max_length=200, blank=True, null=True)
    content = RichTextUploadingField(blank=True, null=True)
    short_content = RichTextField(blank=True, null=True)
    lang = models.CharField(max_length=10, default="fa")

    def __str__(self):
        return self.name

    # Event Meta


class Picture(models.Model):
    image = models.ImageField(
        upload_to="picture/", height_field=None, width_field=None, max_length=None)
    name = models.CharField(max_length=200, blank=True, null=True)

    post = models.ForeignKey(
        Post, blank=True, null=True, on_delete=models.CASCADE)

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

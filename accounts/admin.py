from django.contrib import admin
from .models import Profile
from modeltranslation.admin import TranslationAdmin


class ProfileAdmin(TranslationAdmin):
    pass


admin.site.register(Profile, ProfileAdmin)

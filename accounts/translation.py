from modeltranslation.translator import translator, TranslationOptions
from accounts.models import Profile


class ProfileTranslationOptions(TranslationOptions):
    fields = ('first_name', 'last_name')


translator.register(Profile, ProfileTranslationOptions)

# You must run command below after adding aditional field to fields:
# python manage.py sync_translation_fields
# python manage.py makemigrations
# python manage.py migrate

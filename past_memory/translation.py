from modeltranslation.translator import translator, TranslationOptions
from past_memory.models import Post


class PostTranslationOptions(TranslationOptions):
    fields = ('name', 'content', 'short_content')


translator.register(Post, PostTranslationOptions)
# You must run command below after adding aditional field to fields:
# python manage.py sync_translation_fields
# python manage.py makemigrations
# python manage.py migrate

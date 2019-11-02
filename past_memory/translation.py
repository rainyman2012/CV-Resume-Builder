from modeltranslation.translator import translator, TranslationOptions
from past_memory.models import Resume, Education, Experience


class ResumeTranslationOptions(TranslationOptions):
    fields = ('name', 'introduce', 'abstract', 'contact_info')


class ExperienceTranslationOptions(TranslationOptions):
    fields = ('company_name', 'duties_and_achivements', 'about_company')


class EducationTranslationOptions(TranslationOptions):
    fields = ('grade', 'major', 'university', 'Article_names')


translator.register(Resume, ResumeTranslationOptions)
translator.register(Education, EducationTranslationOptions)
translator.register(Experience, ExperienceTranslationOptions)


# You must run command below after adding aditional field to fields:
# python manage.py sync_translation_fields
# python manage.py makemigrations
# python manage.py migrate

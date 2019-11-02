from django.contrib import admin
from .models import Resume, Picture, Music, Education, Skill, Experience
from modeltranslation.admin import TranslationAdmin


class PictureInlineAdmin(admin.TabularInline):
    model = Picture


class ResumeAdmin(TranslationAdmin):
    inlines = [PictureInlineAdmin, ]
    multiupload_form = True
    multiupload_list = False

    def delete_file(self, pk, request):
        '''
        Delete an image.
        '''
        obj = get_object_or_404(Picture, pk=pk)
        return obj.delete()


class EducationAdmin(TranslationAdmin):
    pass


class ExperienceAdmin(TranslationAdmin):
    pass


admin.site.register(Education, EducationAdmin)
admin.site.register(Experience, ExperienceAdmin)
admin.site.register(Resume, ResumeAdmin)
admin.site.register(Picture)
admin.site.register(Music)
admin.site.register(Skill)
# Register your models here.

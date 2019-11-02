from django.contrib import admin
from .models import Post, Picture
from modeltranslation.admin import TranslationAdmin


class PictureInlineAdmin(admin.TabularInline):
    model = Picture


class PostAdmin(TranslationAdmin):
    inlines = [PictureInlineAdmin, ]
    multiupload_form = True
    multiupload_list = False

    def delete_file(self, pk, request):
        '''
        Delete an image.
        '''
        obj = get_object_or_404(Picture, pk=pk)
        return obj.delete()


admin.site.register(Post, PostAdmin)
admin.site.register(Picture)
# Register your models here.

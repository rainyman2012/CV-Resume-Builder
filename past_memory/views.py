from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from pudb import set_trace
# from rest_framework import viewsets
from rest_framework.response import Response

from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from past_memory.serializers import (
    ResumeSerializer,
    PictureSerializer,
)
from .models import Resume, Picture
import io
from rest_framework import generics
from rest_framework.renderers import JSONRenderer
from django.utils import translation
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.middleware.csrf import get_token
from django.db.models import Q
import random


class ResumeListView(generics.ListAPIView):
    serializer_class = ResumeSerializer

    def get_queryset(self):
        return Resume.objects.all()

    def get(self, request, *args, **kwargs):
        lang = self.kwargs.get('lang', 'fa')
        translation.activate(lang)
        Resumes = self.list(request, *args, **kwargs)

        translation.activate('en')
        return Resumes

from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from pudb import set_trace
# from rest_framework import viewsets
from rest_framework.response import Response

from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from past_memory.serializers import (
    PostSerializer,
    PictureSerializer,
)
from .models import Post, Picture
import io
from rest_framework import generics
from rest_framework.renderers import JSONRenderer
from django.utils import translation
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.middleware.csrf import get_token
from django.db.models import Q
import random


class PostListView(generics.ListAPIView):
    serializer_class = PostSerializer
    # queryset = Post.objects.all()

    def get_queryset(self):
        lang = self.kwargs.get('lang', 'fa')
        translation.activate(lang)
        posts = Post.objects.all()
        translation.activate("en")
        return posts

from django.urls import path, re_path

from past_memory.views import (
    PostListView
)
from . import views

app_name = "memory"


urlpatterns = [
    path(r'<str:lang>/', PostListView.as_view()),
]

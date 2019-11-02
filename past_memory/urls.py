from django.urls import path, re_path

from past_memory.views import (
    ResumeListView
)
from . import views

app_name = "memory"


urlpatterns = [
    path(r'<str:lang>/', ResumeListView.as_view()),
]

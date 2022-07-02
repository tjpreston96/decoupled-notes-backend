from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_routes, name="routes"),
    path("api/notes/", views.get_notes, name="notes"),
    path("api/notes/<int:pk>/", views.get_note, name="note"),
]

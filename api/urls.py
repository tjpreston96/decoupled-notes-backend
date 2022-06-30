from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_routes, name="routes"),
    # Index
    path("notes/", views.get_notes, name="notes"),
    # Create
    path("notes/create/", views.create_note, name="create_note"),
    # Update
    path("notes/<int:pk>/update/", views.update_note, name="update_note"),
    # Delete
    path("notes/<int:pk>/delete/", views.delete_note, name="delete_note"),
    # Render
    path("notes/<int:pk>/", views.get_note, name="get_note"),
]

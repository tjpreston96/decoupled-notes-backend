from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer
from .utils import (
    create_note,
    delete_note,
    note_detail,
    notes_list,
    routes_list,
    update_note,
)

# Create your views here.


@api_view(["GET"])
def get_routes(request):
    return routes_list(request)


"""
/notes      GET
/notes      POST
/notes/<id> GET 
/notes/<id> POST 
/notes/<id> DELETE
"""


@api_view(["GET", "POST"])
def get_notes(request):
    if request.method == "GET":
        return notes_list(request)

    if request.method == "POST":
        return create_note(request)


@api_view(["GET", "PUT", "DELETE"])
def get_note(request, pk):
    if request.method == "GET":
        return note_detail(request, pk)

    if request.method == "PUT":
        return update_note(request, pk)

    if request.method == "DELETE":
        return delete_note(request, pk)

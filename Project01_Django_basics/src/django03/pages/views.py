from django.shortcuts import render
from django.http import HttpResponse


def home_view(request, *args, **kwargs):
    print(request)
    print(request.user)
    # return HttpResponse("<h1>Hello World</h1>")  # string of HTML code.
    return render(request, "home.html", {})


def project01_view(request, *args, **kwargs):
    # print(request)
    # print(request.user)
    # return HttpResponse("<h1>Hello World</h1>")  # string of HTML code.
    return render(request, "project01.html", {})


def about_view(request, *args, **kwargs):
    request
    context = {
        # consider that since request.user returns actual user, maybe we can get information off that request and render what belongs to the client.
        "name": "Kim, Joo Hyuk",
        "age": 30,
        "tech": ["python", "django", "JS", "Java", "SQL"],

    }
    return render(request, "about.html", context)

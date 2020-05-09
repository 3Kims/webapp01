from django.shortcuts import render

from django.shortcuts import render

def home_view(request):
    
    context={}
    return render(request, 'project03Main.html', context)
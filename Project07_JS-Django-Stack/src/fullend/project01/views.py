from django.shortcuts import render
from .models import Text
from .functions.stock import bs4StockPriceScraper

# Create your views here.
def home_view(request):
    
    new_text = Text()
    new_text.text = request.POST.get("text")
    print(request.POST.get("text"))
    if request.method=='POST' and request.POST.get("text")=="MSFT":
        print(request.POST)
        new_text.save()

    price_list = set()
    for code in  Text.objects.all():
        print(bs4StockPriceScraper(code.text))
        price_list.add(bs4StockPriceScraper(code.text))
        
    context = {
        'object_list' : Text.objects.all(),
        'price_list' : price_list,
    }

    return render(request, 'home/home.html',context)
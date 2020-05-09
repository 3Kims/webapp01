from django.http import Http404
from django.shortcuts import render, get_object_or_404, redirect
from .models import Product
from .forms import ProductForm, RawProductForm


def product_list_view(request):
    queryset = Product.objects.all()
    context = {
        "object_list": queryset
    }
    return render(request, "products/product_list.html", context)


def product_delete_view(request, id):
    obj = get_object_or_404(Product, id=id)
    if request.method == 'POST':
        obj.delete()
        return redirect('../../')
    context = {
        'object': obj
    }
    return render(request, "products/product_delete.html", context)


def product_detail_view(request, id):
    obj = Product.objects.get(id=id)
    context = {
        'object': obj
    }
    return render(request, "products/product_detail.html", context)


def product_create_view(request):
    my_form = RawProductForm()
    if request.method == "POST":
        my_form = RawProductForm(request.POST)
        if my_form.is_valid():
            # now the data is good
            print(my_form.cleaned_data)
            Product.objects.create(**my_form.cleaned_data)
        else:
            print(my_form.errors)
    context = {
        "form": my_form
    }

    return render(request, "products/product_create.html", context)


def product_update_view(request):
    return

# def dynamic_lookup_view(request, id):
#     # obj = Product.objects.get(id=req_id) # 1st Method with just default error
#     # 2nd method raising 404error but with some details
#     obj = get_object_or_404(Product, id=id)
#     # obj = Product.objects.get(id=req_id) #3rd+4th method, raises 'DoesNotExist' error
#     # try: #3rd method, raises same as 2nd method but manually.
#     #     obj = Product.objects.get(id=req_id)
#     # except Product.DoesNotExist:
#     #     raise Http404
#     context = {
#         'object': obj
#     }
#     return render(request, "products/product_detail.html", context)


# def render_initial_data(request):
#     initial_data = {
#         'title': "My awesome title in ProductForm",
#         'description': "My awesome description ProductForm",

#     }
#     obj = Product.objects.get(id=1)
#     form = ProductForm(request.POST or None, instance=obj)
#     if form.is_valid():
#         form.save()
#     context = {
#         'form': form
#     }
#     return render(request, "products/product_create.html", context)

# def product_create_view(request):
#     print(get_title(request))
#     # Product.objects.create(title)
#     context = {
#     }
#     return render(request, "products/product_create.html", context)

# def get_title(request):
#     new_title = request.POST.get('title')
#     return new_title


# def product_create_view(request):
#     form = ProductForm(request.POST or None)
#     if form.is_valid():
#         form.save()
#         form = ProductForm()

#     context = {
#         'form': form
#     }
#     return render(request, "products/product_create.html", context)

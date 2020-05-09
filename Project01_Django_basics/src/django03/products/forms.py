from django import forms
from .models import Product


class ProductForm(forms.ModelForm):
    title = forms.CharField(label='', widget=forms.TextInput(attrs={
        "placeholder": "yourtitle"
    }))
    description = forms.CharField(widget=forms.Textarea(attrs={
        "class": "new-class-name two",
        "rows": 5,
        "cols": 20,
        "placeholder": "Description",
    }))
    price = forms.DecimalField(initial=0)

    class Meta:
        model = Product
        fields = [
            'title',
            'description',
            'price',
        ]

    def clean_title(self, *args, **kwargs):
        title = self.cleaned_data.get("title")
        if not "user" in title:
            raise forms.ValidationError("this is not a valid title")
        if not "valid" in title:
            raise forms.ValidationError("this is not a valid title")
        return title


class RawProductForm(forms.Form):
    title = forms.CharField(label='', widget=forms.TextInput(attrs={
        "placeholder": "yourtitle"
    }))
    description = forms.CharField(widget=forms.Textarea(attrs={
        "class": "new-class-name two",
        "rows": 5,
        "cols": 20,
        "placeholder": "Description",
    }))
    price = forms.DecimalField(initial=0)

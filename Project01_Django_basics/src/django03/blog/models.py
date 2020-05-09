from django.db import models
from django.shortcuts import reverse

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=50, default='')
    description = models.TextField(blank=True, null=True)

    def get_absolute_url(self):
        return reverse("blog:article-detail", kwargs={"id": self.id})
    # def get_absolute_url(self):
    #     return reverse("articles:article-detail", kwargs={"id": self.id})

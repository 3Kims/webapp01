from django.db import models

class Text(models.Model):
    text = models.TextField(max_length=20, default="", unique=True)
    
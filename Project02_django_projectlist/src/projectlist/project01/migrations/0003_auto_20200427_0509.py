# Generated by Django 3.0.5 on 2020-04-26 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project01', '0002_auto_20200426_2157'),
    ]

    operations = [
        migrations.AlterField(
            model_name='text',
            name='text',
            field=models.TextField(default='', max_length=20, unique=True),
        ),
    ]
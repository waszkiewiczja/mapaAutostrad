# Generated by Django 3.2.2 on 2021-10-07 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('indexmain', '0005_auto_20210921_2147'),
    ]

    operations = [
        migrations.AddField(
            model_name='road',
            name='data_ukonczenia',
            field=models.DateField(blank=True, null=True),
        ),
    ]

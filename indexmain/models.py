from django.db import models
from datetime import timedelta
from datetime import datetime
from dateutil.relativedelta import relativedelta

from ckeditor.fields import RichTextField


# Create your models here.

class Road(models.Model):
    droga = models.CharField(max_length=200, null=True, blank=True)
    odcinek = models.CharField(max_length=255,null=True, blank=True)
    km = models.FloatField(null=True, blank=True)
    czas = models.IntegerField(null=True, blank=True)
    koszt = models.FloatField(null=True, blank=True)
    wykonawca = models.CharField(max_length=200, null=True, blank=True)
    podpisane = models.DateField(null=True, blank=True)
    data_ukonczenia = models.DateField(null=True, blank=True)
    map1_x = models.FloatField(null=True, blank=True)
    map1_y = models.FloatField(null=True, blank=True)
    map2_x = models.FloatField(null=True, blank=True)
    map2_y = models.FloatField(null=True, blank=True)
    opis = RichTextField(blank=True, null=True)
    
    @property
    def c_data_ukonczenia(self):
        date_time = self.podpisane.strftime("%Y-%m-%d")
        date_format = '%Y-%m-%d'
        dtObj = datetime.strptime(date_time, date_format)
        months = self.czas
        if months > 48:
            months += 12
        elif months > 36:
            months += 9
        elif months > 24:
            months += 6
        elif months > 12:
            months += 3
        future_date = dtObj + relativedelta(months=months)
        return future_date
    
    def save(self, *args, **kwarg):
        self.data_ukonczenia = self.c_data_ukonczenia
        print(self.data_ukonczenia)
        super(Road, self).save(*args, **kwarg)


    def __str__(self) -> str:
        return f'{self.id} {self.droga} {self.odcinek}'

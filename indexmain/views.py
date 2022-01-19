from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse, response

from .serlializers import RoadSerializer
from .models import *

from datetime import timedelta
from datetime import datetime
from dateutil.relativedelta import relativedelta



# Create your views here.


def index(request):
    roads = Road.objects.all()
    ilosc_inwestycji = roads.count()

    sortujID = request.GET.get("sortuj")

    if sortujID == 'odnajtanszej':
        roads = Road.objects.all().order_by("koszt")
    elif sortujID == 'odnajdrozszej':
        roads = Road.objects.all().order_by("-koszt")
    elif sortujID == 'najkrotszy':
        roads = Road.objects.all().order_by("data_ukonczenia")
    elif sortujID == 'najdluzszy':
        roads = Road.objects.all().order_by("-data_ukonczenia")
    elif sortujID == None:
        roads = Road.objects.all()
    else:
        roads = Road.objects.all()

    context = {'roads':roads, "ilosc_inwestycji":ilosc_inwestycji}
    return render(request, 'indexmain/index.html', context)


def map(request):
    roads = Road.objects.all()
    context = {'roads':roads}
    return render(request, 'indexmain/map.html', context)



@api_view(['GET'])
def api (request):
    api_urls = {
        'List':'/road-list/',
    }
    return Response(api_urls)


@api_view(['GET'])
def roadList(request):
    roads = Road.objects.all()
    serializer = RoadSerializer(roads, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def roadDetail(request, pk):
    roads = Road.objects.get(id=pk)
    serializer = RoadSerializer(roads, many=False)
    return Response(serializer.data)

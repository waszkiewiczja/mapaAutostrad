from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),

    path('api/', views.api, name='api'),
    path('api/road-list/', views.roadList, name='road-list'),
    path('api/road-detail/<str:pk>/', views.roadDetail, name='road-detail'),
]

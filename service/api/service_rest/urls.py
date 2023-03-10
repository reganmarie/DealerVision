from django.urls import path
from .views import (api_list_services, api_show_service, api_list_technicians)

urlpatterns = [
    path('services/', api_list_services, name="api_list_services"),
    path('service/<int:id>/', api_show_service, name="api_show_service"),
    path('technicians/', api_list_technicians, name="api_list_technicians"),
]

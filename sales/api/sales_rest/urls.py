from django.urls import path
from .views import (
    api_list_customers,
    api_list_sales_records,
    api_list_salesperson,
    api_show_customer,
    api_show_salesperson,
    api_show_sales_records
)

urlpatterns = [
    path("salesperson/", api_list_salesperson, name="api_list_salesperson"),
    path("salesperson/<int:id>/", api_show_salesperson, name="api_show_salesperson"),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("customers/<int:id>/", api_show_customer, name="api_show_customer"),
    path("salesrecords/", api_list_sales_records, name="api_list_sales_records"),
    path("salesrecords/<int:id>/", api_show_sales_records, name="api_show_sales_records"),
]

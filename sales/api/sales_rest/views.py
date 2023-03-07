from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, Customer, SalesRecord

# Create your views here.

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href",
    ]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]

class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "id",
        "price",
        "salesperson",
        "customer",
        "automobile",
    ]
    encoders = {
        "salesperson": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
        "automobile": AutomobileVOEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_list_salesperson(request):
    if request.method == "GET":
        salesperson = SalesPerson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)
        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_salesperson(request, id):
    if request.method == "GET":
        salesperson = SalesPerson.objects.get(id=id)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = SalesPerson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        SalesPerson.objects.filter(id=id).update(**content)
        salesperson = SalesPerson.objects.get(id=id)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_customer(request, id):
    if request.method == "GET":
        customer = Customer.objects.get(id=id)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Customer.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        Customer.objects.filter(id=id).update(**content)
        customer = Customer.objects.get(id=id)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def api_list_salesperson(request):
    if request.method == "GET":
        salesperson = SalesPerson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)
        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_salesperson(request, id):
    if request.method == "GET":
        salesperson = SalesPerson.objects.get(id=id)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = SalesPerson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        SalesPerson.objects.filter(id=id).update(**content)
        salesperson = SalesPerson.objects.get(id=id)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def api_list_sales_records(request):
    if request.method == "GET":
        sales_records = SalesRecord.objects.all()
        return JsonResponse(
            {"sales_records": sales_records},
            encoder=SalesRecordEncoder,
        )
    else:
        content = json.loads(request.body)
        print(content)

        try:
            salesperson = content['salesperson']
            salesperson = SalesPerson.objects.get(name=content["salesperson"])
            content["salesperson"] = salesperson
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Sales Representative"},
                status=400,
            )

        try:
            customer = content['customer']
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Customer"},
                status=400,
            )

        try:
            automobile_href = content['automobile']
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Car"},
                status=400,
            )

        sales_record = SalesRecord.objects.create(**content)
        return JsonResponse(
            sales_record,
            encoder=SalesRecordEncoder,
            safe=False,
        )

@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_sales_records(request, id):
    if request.method == "GET":
        sales_record = SalesRecord.objects.get(id=id)
        return JsonResponse(
            sales_record,
            encoder=SalesRecordEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = SalesRecord.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

    else:
        content = json.loads(request.body)
        print(content)

        try:
            salesperson = content['salesperson']
            salesperson = SalesPerson.objects.get(name=content["salesperson"])
            content["salesperson"] = salesperson
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Sales Representative"},
                status=400,
            )

        try:
            customer = content['customer']
            customer = Customer.objects.get(name=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Customer"},
                status=400,
            )

        try:
            automobile_href = content['automobile']
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["automobile"] = bin
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Car"},
                status=400,
            )

        SalesRecord.objects.filter(id=id).update(**content)
        SalesRecord = SalesRecord.objects.get(id=id)
        return JsonResponse(
            sales_record,
            encoder=SalesRecordEncoder,
            safe=False,
        )

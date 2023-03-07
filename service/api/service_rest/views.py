from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

from common.json import ModelEncoder
from .models import Service, Technician, AutoVO

class ServiceListEncoder(ModelEncoder):
    model = Service
    properties = [
        "owner_name",
        "date",
        "reason",
        "isVIP",
    ]

    def get_extra_data(self, o):
        return {
            "auto": o.auto.vin,
            "technician": o.technician.name,
        }

class AutoVODetailEncoder(ModelEncoder):
    model = AutoVO
    properties = ["import_href", "vin"]

class ServiceDetailEncoder(ModelEncoder):
    model = Service
    properties = [
        "owner_name",
        "date",
        "reason",
        "isVIP",
        "auto",
    ]
    encoders = {
        "auto": AutoVODetailEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.order_by("name")

        technician_list = []
        for technician in technicians:
            technician_dict = {
                "name": technician.name,
                "id": technician.id,
            }
            technician_list.append(technician_dict)
        return JsonResponse({"technicians": technician_list})
    else:
        content = json.loads(request.body)
        try:
            name = content["name"]
        except Technician.DoesNotExist:
            return JsonResponse(
                {"Message": "invalid technician"},
                status=400
            )

        technician = Technician.objects.create(**content)
        technician_dict = {
            "name": technician.name,
            "id": technician.id,
        }
        return JsonResponse(
            technician_dict,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_services(request):
    if request.method == "GET":
        services = Service.objects.all()
        return JsonResponse(
            {"services": services},
            encoder=ServiceDetailEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            auto_href = content["auto"]
            auto = AutoVO.objects.get(import_href=auto_href)
            content['auto'] = auto
        except AutoVO.DoesNotExist:
            return JsonResponse(
                {"Message": "invalid auto"},
                status=400
            )

        service = Service.objects.create(**content)
        return JsonResponse(
            service,
            encoder=ServiceDetailEncoder,
            safe=False,
        )

@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_service(request, id):
    if request.method == "GET":
        try:
            service = Service.objects.get(id=id)
            return JsonResponse(
                {"service": service},
                encoder=ServiceDetailEncoder,
                safe=False,
            )
        except Service.DoesNotExist:
            return JsonResponse(
                {"message": "invalid service id"},
                status=400,
            )
    elif request.method == "DELETE":
        count, _ = Service.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        try:
            service = Service.objects.get(id=id)
        except Service.DoesNotExist:
            return JsonResponse(
                {"message": "invalid sesrvice id"},
                status=400,
            )

        Service.objects.filter(id=id).update(**content)
        service = Service.objects.get(id=id)
        return JsonResponse(
            service,
            encoder=ServiceDetailEncoder,
            safe=False,
        )
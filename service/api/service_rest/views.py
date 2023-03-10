from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

from common.json import ModelEncoder
from .models import Service, Technician, AutoVO

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "id",
    ]

class AutoVODetailEncoder(ModelEncoder):
    model = AutoVO
    properties = ["import_href", "vin"]

class ServiceListEncoder(ModelEncoder):
    model = Service
    properties = [
        "owner_name",
        "date",
        "reason",
        "isVIP",
        "technician",
        "status",
    ]
    encoders = {
        "auto": AutoVODetailEncoder(),
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self, o):
        return {
            "auto": o.auto.vin,
            "technician": o.technician.name,
        }

class ServiceDetailEncoder(ModelEncoder):
    model = Service
    properties = [
        "owner_name",
        "date",
        "reason",
        "isVIP",
        "auto",
        "technician",
        "status",
    ]
    encoders = {
        "auto": AutoVODetailEncoder(),
        "technician": TechnicianEncoder(),
    }

    def get_extra_data(self, o):
        count = AutoVO.objects.filter(vin=o.auto.vin).count()
        is_vip = count > 0
        return {"isVIP": is_vip}

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"Message": "invalid technician"},
                status=400
            )


@require_http_methods(["GET", "POST"])
def api_list_services(request, auto_vo_id=None):
    if request.method == "GET":
        if auto_vo_id is not None:
            services = Service.objects.filter(auto=auto_vo_id)
        else:
            services = Service.objects.all()
        return JsonResponse(
            {"services": services},
            encoder=ServiceDetailEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            technician_name = content["technician"]
            technician = Technician.objects.get(name=technician_name)
            content['technician'] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"Message": "invalid technician"},
                status=400
            )

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
            service.finish_service()
        except Service.DoesNotExist:
            return JsonResponse(
                {"message": "invalid service id"},
                status=400,
            )

        Service.objects.filter(id=id).update(**content)
        service = Service.objects.get(id=id)
        return JsonResponse(
            {"service": service},
            encoder=ServiceDetailEncoder,
            safe=False,
        )
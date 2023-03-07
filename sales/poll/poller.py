import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
# from sales_rest.models import Something
from sales_rest.models import AutomobileVO

def get_automobiles():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for auto in content['autos']:
        AutomobileVO.objects.update_or_create(
            import_href = auto['href'],
            defaults={
            "vin": auto["vin"],
            },
        )

def poll():
    while True:
        try:
            get_automobiles()
            print('Sales poller polling for data')
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()

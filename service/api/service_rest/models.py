from django.db import models
from django.urls import reverse

class AutoVO(models.Model):
    import_href = models.CharField(max_length=100, unique=True, null=True)
    vin = models.CharField(max_length=17, unique=True)


class Technician(models.Model):
    name = models.CharField(max_length=50)
    id = models.PositiveSmallIntegerField(primary_key=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("name",)

class Service(models.Model):
    owner_name = models.CharField(max_length=200)
    date = models.DateTimeField()
    reason = models.CharField(max_length=200)
    isVIP = models.BooleanField(default=False)
    finish = models.BooleanField(default=False)

    technician = models.ForeignKey (
        Technician,
        related_name="technician_services",
        on_delete=models.CASCADE,
        null=True,
    )

    auto = models.ForeignKey(
        AutoVO,
        related_name="services",
        on_delete=models.CASCADE,
        null=True,
    )

    def __str__(self):
        return self.owner_name

    def finish(self):
        self.finish = True
        self.save()

    def get_api_url(self):
        return reverse("api_show_service", kwargs={"id": self.id})

    class Meta:
        ordering = ("owner_name", "date", "reason", "isVIP", "auto")

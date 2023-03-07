from django.db import models
from django.urls import reverse

# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=100, unique=True)


class SalesPerson(models.Model):
    name = models.CharField(max_length=40)
    employee_number = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=40)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class SalesRecord(models.Model):
    price = models.CharField(max_length=10)

    salesperson = models.ForeignKey(
        SalesPerson,
        related_name="sales_record",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="sales_record",
        on_delete=models.CASCADE,
    )

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales_record",
        on_delete=models.PROTECT,
    )

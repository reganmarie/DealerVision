from django.db import models

class Service(models.Model):
    import_href = models.CharField(max_length=100, unique=True, null=True)
    

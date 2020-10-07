from django.db import models

class lien(models.Model):
    orginialLink = models.CharField(max_length=100)
    shortLink = models.CharField(max_length=100)
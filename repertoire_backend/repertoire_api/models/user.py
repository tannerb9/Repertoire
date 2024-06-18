from django.db import models

class User(models.Model):
    username = models.CharField()
    password = models.IntegerField()
    email = models.EmailField()
    
    class Meta:
        verbose_name = ("User")
        verbose_name_plural = ("Users")
        
    def __str__(self):
        return self.username
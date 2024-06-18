from django.db import models

class Instruction(models.Model):
    recipe_id = models.ForeignKey(Recipe)
    info = models.CharField()
    
    class Meta:
        verbose_name = ("Instruction")
        verbose_name_plural = ("Instructions")
        
    def __str__(self):
        return self.info
from django.db import models

class Ingredient(models.Model):
    recipe_id = models.ForeignKey(Recipe)
    info = models.CharField()
    
    class Meta:
        verbose_name = ("Ingredient")
        verbose_name_plural = ("Ingredients")
        
    def __str__(self):
        return self.info
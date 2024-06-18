from django.db import models

class Recipe(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField()
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    is_test = models.BooleanField()
    original_recipe_id = models.ForeignKey('self')
    
    class Meta:
        verbose_name = ("Recipe")
        verbose_name_plural = ("Recipes")
        
    def __str__(self):
        return self.title
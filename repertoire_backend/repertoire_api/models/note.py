from django.db import models

class Note(models.Model):
    recipe_id = models.ForeignKey(Recipe)
    info = models.CharField()
    
    class Meta:
        verbose_name = ("Note")
        verbose_name_plural = ("Notes")
        
    def __str__(self):
        return self.info
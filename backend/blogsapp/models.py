from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField("Title", max_length=100)
    body = models.TextField("Blog Content")
    created_at = models.DateTimeField("Published Date", auto_now_add=True)

    def __str__(self):
        return self.title

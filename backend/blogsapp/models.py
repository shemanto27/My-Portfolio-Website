from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Blog(models.Model):
    cover_image = models.ImageField("Cover Image", upload_to="images/", null=True, blank=True)
    title = models.CharField("Title", max_length=100)
    categories = models.ManyToManyField(Category, related_name='blogs')
    body = models.TextField("Blog Content")
    created_at = models.DateTimeField("Published Date", auto_now_add=True)

    def __str__(self):
        return self.title

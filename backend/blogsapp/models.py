from django.db import models

# Create your models here.

class Blog(models.Model):
    CATEGORY_CHOICES = [
        ('Django', 'Django'),
        ('Machine Learning', 'Machine Learning'),
        ('React', 'React'),
        ('Computer Vision', 'Computer Vision'),
        ('Web Development', 'Web Development'),
        ('Data Science', 'Data Science'),
        ('MLOps', 'MLOps'),
        ('Business', 'Business'),
        ('Others', 'Others'),
        ('Project', 'Project'),
    ]

    cover_image = models.ImageField("Cover Image", upload_to="images/", null=True, blank=True)
    title = models.CharField("Title", max_length=100)
    category = models.CharField("Category", max_length=50, choices=CATEGORY_CHOICES, default='Project')
    body = models.TextField("Blog Content")
    created_at = models.DateTimeField("Published Date", auto_now_add=True)

    def __str__(self):
        return self.title

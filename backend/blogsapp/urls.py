from django.urls import path, include
from blogsapp.views import BlogViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'blogs', BlogViewSet, basename='blog')

urlpatterns = [
    path('', include(router.urls)),
]
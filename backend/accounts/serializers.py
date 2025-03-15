from djoser.serializers import UserCreateSerializer
from rest_framework import serializers

from .models import *

class UserCreateSerializer(UserCreateSerializer):
    password = serializers.CharField(write_only=True)

    class Meta(UserCreateSerializer.Meta):
        model = UserModel
        fields = ('id', 'email', 'username', 'password')
        
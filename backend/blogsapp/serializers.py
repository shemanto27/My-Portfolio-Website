from .models import Blog, Category
from rest_framework import serializers

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    categories = serializers.ListField(child=serializers.CharField(), write_only=True)  # Accepts list of category names
    category_objects = CategorySerializer(many=True, read_only=True, source="categories")  # Serialize categories

    class Meta:
        model = Blog
        fields = '__all__'

    def create(self, validated_data):
        categories_data = validated_data.pop('categories', [])  # List of category names
        blog = Blog.objects.create(**validated_data)

        for category_name in categories_data:
            category, created = Category.objects.get_or_create(name=category_name.strip())  # Strip spaces
            blog.categories.add(category)

        return blog

    def update(self, instance, validated_data):
        categories_data = validated_data.pop('categories', [])  
        instance.title = validated_data.get('title', instance.title)
        instance.body = validated_data.get('body', instance.body)
        instance.save()

        instance.categories.clear()  # Remove old categories
        for category_name in categories_data:
            category, created = Category.objects.get_or_create(name=category_name.strip())
            instance.categories.add(category)

        return instance


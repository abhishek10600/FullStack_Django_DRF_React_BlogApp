from rest_framework import serializers
from .models import Category
from blog.serializers import BlogSerializer


class CategorySerializer(serializers.ModelSerializer):

    id = serializers.IntegerField(read_only=True)
    category_name = serializers.CharField()
    category = BlogSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = "__all__"

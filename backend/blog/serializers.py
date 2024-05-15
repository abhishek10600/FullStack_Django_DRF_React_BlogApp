from rest_framework import serializers
from .models import Blog


class BlogSerializer(serializers.ModelSerializer):

    author = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Blog
        fields = "__all__"

    def validate_blog_title(self, value):
        if len(value) < 1:
            raise serializers.ValidationError("blog title cannot be empty.")
        return value

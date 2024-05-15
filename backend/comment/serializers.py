from rest_framework import serializers
from .models import BlogComment


class BlogCommentSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source="author.username")
    blog = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = BlogComment
        fields = "__all__"

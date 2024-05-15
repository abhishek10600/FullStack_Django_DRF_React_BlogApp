from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from .serializers import BlogCommentSerializer
from .models import BlogComment
from blog.models import Blog
from blog.permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404
from rest_framework import serializers


class BlogCommentListCreateView(generics.ListCreateAPIView):
    queryset = BlogComment.objects.all()
    serializer_class = BlogCommentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        blog_id = self.kwargs.get("blog_id")
        return BlogComment.objects.filter(blog_id=blog_id)

    def perform_create(self, serializer):
        blog_id = self.kwargs.get("blog_id")
        blog = get_object_or_404(Blog, id=blog_id)
        serializer.save(author=self.request.user, blog=blog)


class BlogCommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BlogComment.objects.all()
    serializer_class = BlogCommentSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self):
        comment_id = self.kwargs.get("comment_id")
        comment = get_object_or_404(BlogComment, id=comment_id)
        blog_id = self.kwargs.get("blog_id")
        if comment.blog.id != blog_id:
            raise serializers.ValidationError(
                "This comment is not related to the requested blog")
        return comment

    def put(self, request, *args, **kwargs):
        comment = self.get_object()
        if comment.author != request.user:
            raise serializers.ValidationError(
                {"message": "You are not authorized to perform this acrtion."})
        return super().put(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        comment = self.get_object()
        if comment.author != request.user:
            raise serializers.ValidationError(
                {"message": "You are not authorized to perform this action."})
        return super().delete(request, *args, **kwargs)

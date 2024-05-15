from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import filters
from .serializers import BlogSerializer
from .models import Blog
from .permissions import IsOwnerOrReadOnly


class BlogListCreateView(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ["created_at"]
    search_fields = ["blog_title", "blog_description",
                     "author__username", "category__category_name"]

    def create(self, request, *args, **kwargs):
        serializer = BlogSerializer(
            data=request.data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        serializer.save(author=self.request.user)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class BlogDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        if instance:
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Blog not found"}, status=status.HTTP_404_NOT_FOUND)

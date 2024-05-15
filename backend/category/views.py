from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from .models import Category
from .serializers import CategorySerializer
from .permissions import IsAdminUserOrReadOnly


class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUserOrReadOnly]

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = CategorySerializer(
            queryset, many=True, context={"request": request})
        if queryset.exists():
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "No categories found"}, status=status.HTTP_404_NOT_FOUND)


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUserOrReadOnly]

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        if instance:
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Category not found"}, status=status.HTTP_404_NOT_FOUND)

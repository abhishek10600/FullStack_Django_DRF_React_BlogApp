from django.urls import path
from .views import CategoryListCreateView, CategoryDetailView

urlpatterns = [
    path("category_list/", CategoryListCreateView.as_view(), name="category_list"),
    path("category_detail/<int:pk>/",
         CategoryDetailView.as_view(), name="category_detail")
]

from django.urls import path
from .views import BlogListCreateView, BlogDetailView

urlpatterns = [
    path("blog_list/", BlogListCreateView.as_view(), name="blog_list"),
    path("blog_detail/<int:pk>/", BlogDetailView.as_view(), name="blog_detail")
]

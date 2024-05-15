from django.urls import path
from .views import BlogCommentListCreateView, BlogCommentDetailView

urlpatterns = [
    path("blog_comment_list/blog/<int:blog_id>/",
         BlogCommentListCreateView.as_view(), name="blog_comment_list"),
    path("blog_comment_detail/blog/<int:blog_id>/comment/<int:comment_id>/",
         BlogCommentDetailView.as_view(), name="blog_comment_detail")
]

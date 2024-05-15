from django.contrib import admin
from django.urls import path, include
from .views import test

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path("api/account/", include("account.urls")),
    path("api/category/", include("category.urls")),
    path("api/blog/", include("blog.urls")),
    path("api/comment/", include("comment.urls")),
    path("test/", test, name="test")
]

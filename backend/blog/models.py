from django.db import models
from django.contrib.auth.models import User
from category.models import Category
# Create your models here.


class Blog(models.Model):
    blog_title = models.CharField(max_length=100)
    blog_description = models.TextField()
    is_public = models.BooleanField(default=True)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, related_name="category")
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.blog_title

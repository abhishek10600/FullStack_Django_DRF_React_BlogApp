from django.db import models
from django.contrib.auth.models import User
from blog.models import Blog

# Create your models here.


class BlogComment(models.Model):
    description = models.TextField()
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.blog)

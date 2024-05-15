from django.urls import path
from .views import register_user_view
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("register/", register_user_view, name="register"),
    path("api/token/", TokenObtainPairView.as_view(), name="login"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="new_access_token")
]

from django.urls import path
from .views import register_user_view, get_current_user
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("register/", register_user_view, name="register"),
    path("api/token/", TokenObtainPairView.as_view(), name="login"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="new_access_token"),
    path("current_user/", get_current_user, name="get_current_user")
]

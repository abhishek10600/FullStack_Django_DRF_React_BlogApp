from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserRegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken


@api_view(["POST",])
def register_user_view(request):
    if request.method == "POST":
        serializer = UserRegisterSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            account = serializer.save()
            data["response_message"] = "Account created succeffully."
            data["username"] = account.username
            data["email"] = account.email
            refresh = RefreshToken.for_user(account)
            data["token"] = {
                "refresh_token": str(refresh),
                "access_token": str(refresh.access_token)
            }
        else:
            data = serializer.errors
        return Response(data)


@api_view(["GET",])
def get_current_user(request):
    data = {}
    try:
        data["username"] = request.user.username
        data["email"] = request.user.email
        data["is_staff"] = request.user.is_staff
        return Response(data)
    except Exception as e:
        return Response({"message": "No logged in user found."}, status=status.HTTP_404_NOT_FOUND)

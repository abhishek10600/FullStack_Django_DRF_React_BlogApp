from rest_framework import serializers
from django.contrib.auth.models import User


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def validate_password(self, value):
        if len(value) < 5:
            raise serializers.ValidationError(
                "Password must be contain atleast 6 characters.")
        return value

    def save(self):
        if User.objects.filter(email=self.validated_data["email"]).exists():
            raise serializers.ValidationError(
                {"error": "User with this email already exists."})
        if User.objects.filter(username=self.validated_data["username"]).exists():
            raise serializers.ValidationError(
                {"error": "User with this username already exists."})
        account = User(
            email=self.validated_data["email"],
            username=self.validated_data["username"]
        )
        account.set_password(self.validated_data["password"])
        account.save()
        return account

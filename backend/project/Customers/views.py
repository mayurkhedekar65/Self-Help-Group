from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from Customers.serializers import UserFormSerializer
from Customers.models import CustomerForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
# Create your views here.


class SubmitUserRegistrationForm(APIView):
    def post(self, request, format=None):
        serializer = UserFormSerializer(data=request.data)
        if serializer.is_valid():
            customer_name=request.data.get("customer_name")
            customer_email=request.data.get("email")
            customer_phoneno=request.data.get("phone_number")
            password=request.data.get("password")
            user=User.objects.create(username=customer_email,email=customer_email)
            user.set_password(password)
            user.save()
            CustomerForm.objects.create(customer=user,customer_name=customer_name,phone_number=customer_phoneno)
            return Response({'message': 'form submitted successfully'}, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
    def post(self, request, format=None):
        user_email = request.data.get("email")
        password = request.data.get("password")

        try:
            if '@' not in user_email:
                return Response({'message': 'invalid email id'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                user_obj = User.objects.get(email=user_email)
                if not user_obj:
                    return Response({'message': 'email id not registered'}, status=status.HTTP_400_BAD_REQUEST)
                else:
                    user = authenticate(username=user_obj.username, password=password)
                    if user is not None:
                        login(request,user)
                        return Response({'message': 'user logged in successfully'}, status=status.HTTP_201_CREATED)
                    else:
                        return Response({'message': 'invalid creditials'}, status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'message': 'user not registered'}, status=status.HTTP_400_BAD_REQUEST)

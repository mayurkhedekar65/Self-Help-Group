from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from groups.models import Shg_Group_Registration
from groups.serializers import ShgFormSerializer
from django.contrib.auth import login
from django.contrib.auth.models import User
# Create your views here.


class SubmitRegistrationForm(APIView):
    def post(self, request, format=None):
        serializer = ShgFormSerializer(data=request.data)

        if serializer.is_valid():
            shg_username=request.data.get('email')
            shg_password=request.data.get('password')
            name_of_shg=request.data.get('name_of_shg')
            date_of_formation=request.data.get('date_of_formation')
            registration_number=request.data.get('registration_number')
            contact_number=request.data.get('contact_number')
            village=request.data.get('village')
            taluka=request.data.get('taluka')
            district=request.data.get('district')
            type_of_shg=request.data.get('type_of_shg')
            address=request.data.get('address')
            
            
            shg_user=User.objects.create(username=shg_username,email=shg_username)
            shg_user.set_password(shg_password)
            shg_user.save()
            Shg_Group_Registration.objects.create(shg=shg_user,
                name_of_shg=name_of_shg,
                date_of_formation=date_of_formation,
                registration_number=registration_number,
                contact_number=contact_number,
                village=village,
                taluka=taluka,
                district=district,
                type_of_shg=type_of_shg,
                address=address)
            return Response({"message": "Group Registered successfully!"}, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @login_required
def AdminPanel(request):
    print("this is a admin panel view")
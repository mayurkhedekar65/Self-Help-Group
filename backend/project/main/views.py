from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.


@api_view(['GET'])
def product_data(request):
    data = {
          "ProductName":"Premium Coconut Oil",
            "GroupName":"by Mapusa Women's Collective",
            "Amount":"350",
            "Quantity":"500",
            "Location":"Mapusa, Bardez"
    }
    return Response(data)
from  rest_framework import serializers
from Customers.models import CustomerForm




class UserFormSerializer(serializers.ModelSerializer):
    class Meta:
       model=CustomerForm
       fields=['customer','customer_name','phone_number']
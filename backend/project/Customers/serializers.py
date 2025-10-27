from  rest_framework import serializers
from Customers.models import CustomerForm




class UserRegistrationForm(serializers.ModelSerializer):
    class meta:
       model=CustomerForm
       fields=['customer_name','email','phone_number','address']
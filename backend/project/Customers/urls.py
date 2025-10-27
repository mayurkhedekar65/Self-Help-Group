from django.urls import path
from Customers.views import UserRegistrationForm

urlpatterns = [
    path('user_registration_form/',UserRegistrationForm.as_view(),'user_registration_form')
]

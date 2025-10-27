from django.urls import path
from Customers.views import SubmitUserRegistrationForm

urlpatterns = [
    path('user_registration_form/',SubmitUserRegistrationForm.as_view(),name='user_registration_form'),
]

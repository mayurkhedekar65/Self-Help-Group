from django.urls import path
from Customers.views import SubmitUserRegistrationForm,UserLogin

urlpatterns = [
    path('user_registration_form/',SubmitUserRegistrationForm.as_view(),name='user_registration_form'),
    path('user_login/',UserLogin.as_view(),name='user_login'),
    
]

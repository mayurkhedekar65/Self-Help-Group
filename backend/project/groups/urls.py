from django.urls import path
from groups.views import SubmitRegistrationForm,AdminLogin


urlpatterns = [
    path('submit_registration_form/',SubmitRegistrationForm.as_view(),name='submit_registration_form'),
    path('shg_login/',AdminLogin.as_view(),name='shglogin')
]

from django.shortcuts import render

# Create your views here.


def shg_registration(request):
    if request.method == 'POST':
        name_of_sng = request.POST.get("")
        date_of_formation =request.POST.get("")
        registration_number =request.POST.get("")
        contact_number =request.POST.get("")
        village =request.POST.get("")
        taluka =request.POST.get("")
        district =request.POST.get("")
        type_of_shg =request.POST.get("")
        Address =request.POST.get("")

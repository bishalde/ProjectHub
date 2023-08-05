from django.http import JsonResponse
from rest_framework import status

def homePage(request):
    data={
        'Status':'Success...Website Is Live.',
        'Message':'Welcome To ProjectTree Website...!!!'
    }
    return JsonResponse(data,status=status.HTTP_200_OK)
import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

from rest_framework.request import Request
from rest_framework.response import Response

from django.http.request import HttpRequest
from django.http.respone import HttpResponse

from api.models import Category
from api.serializers import CategorySerializers, CategorySerializer2
from rest_framework import status

@api_view(['GET','POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer2(categories, many=True)

        return JsonResponse(serializer.data)

    elif request.method == 'POST':
        serializer = CategorySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# @api_view
# def category_detail(request, category_id):
#     try:
#         category = Category.objects.get(id=category_id)
#     except Category.DoesNotExist as e:
#         return JsonResponse({'error', str(e)})
#
#     if request.method == 'GET':
#         serializer = CategorySerializer2(category)
#         return JsonResponse(serializer.data)
#
#     elif request.method == 'PUT':
#         request_body = json.loads(request.body)
#
#         serializer = CategorySerializer2(instance=category, data=request_body)
#         if serializer.is_valid():

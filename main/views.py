from django.shortcuts import render
# Create your views here.
from rest_framework.views import APIView
from .serializers import TeacherSerializer
from rest_framework.permissions import AllowAny
from . import models
from rest_framework.response import Response
from rest_framework import generics, permissions



class TeacherList(generics.ListCreateAPIView):
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer
    permission_classes=[AllowAny]
    
class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer
    permission_classes=[AllowAny]

    

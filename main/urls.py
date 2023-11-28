from django.urls import path
from .views import TeacherList, TeacherDetail
from main import views

app_name = 'main'
urlpatterns = [
    
    path('teacher/', views.TeacherList.as_view(), name='teacher-list'),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view(), name='teacher-detail'),
]
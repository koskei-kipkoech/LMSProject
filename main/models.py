from django.db import models
# Create your models here.
# Teacher model
class Teacher(models.Model):
	full_name=models.CharField(max_length=100)
	email=models.CharField(max_length=100)
	paasword=models.CharField(max_length=100)
	qualification=models.CharField(max_length=200)
	mobile_no=models.CharField(max_length=20)
	address=models.TextField()

#Course Category model
class CourseCategory(models.Model):
	title=models.CharField(max_length=150)
	description=models.TextField()

class Meta:
    verbose_name_plural = 'Custom Course Categories'
    
#Course model
class Course(models.Model):
	category=models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
	teacher=models.ForeignKey(Teacher, on_delete=models.CASCADE)
	title=models.CharField(max_length=150)
	description=models.TextField() 

# Student model
class Student(models.Model):
	full_name=models.CharField(max_length=100)
	email=models.CharField(max_length=100)
	paasword=models.CharField(max_length=100)
	qualification=models.CharField(max_length=200)
	mobile_no=models.CharField(max_length=20)
	address=models.TextField()
	interested_categories=models.TextField()
# Generated by Django 4.2.1 on 2023-06-20 09:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_coursecategories_alter_course_category_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='teacher',
            old_name='paasword',
            new_name='password',
        ),
        migrations.RenameField(
            model_name='teacher',
            old_name='address',
            new_name='skills',
        ),
    ]

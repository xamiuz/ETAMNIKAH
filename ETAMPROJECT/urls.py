from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin bawaan Django
    path('adminapp/', include('adminapp.urls')),  # Admin custom (adminapp)
    path('', include('myapp.urls')),  # Aplikasi utama (myapp)
]
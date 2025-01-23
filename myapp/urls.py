from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Halaman beranda
    path('about/', views.about, name='about'),  # Halaman tentang kami
    path('all-products/', views.all_products, name='all-products'),  # Halaman semua produk
    path('blog-details/<int:pk>/', views.blog_details, name='blog-details'),  # Halaman detail blog
    path('blog-posts/', views.blog_posts, name='blog-posts'),  # Halaman daftar blog
    path('contact-us/', views.contact_us, name='contact-us'),  # Halaman kontak kami
    path('login/', views.login, name='login'),  # Halaman login
    path('product-details/<int:pk>/', views.product_details, name='product-details'),  # Halaman detail produk
    path('profile/', views.profile, name='profile'),  # Halaman profil
    path('taaruf/', views.taaruf, name='taaruf'),  # Halaman ta'aruf
]
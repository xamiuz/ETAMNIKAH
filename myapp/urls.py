from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Halaman utama
    path('about/', views.about, name='about'),  # Halaman tentang kami
    path('all-products/', views.all_products, name='all-products'),  # Semua produk
    path('blog-details/', views.blog_details, name='blog-details'),  # Detail blog
    path('blog-posts/', views.blog_posts, name='blog-posts'),  # Daftar blog
    path('contact-us/', views.contact_us, name='contact-us'),  # Hubungi kami
    path('login/', views.login, name='login'),  # Halaman login
    path('product-details/', views.product_details, name='product-details'),  # Detail produk
    path('profile/', views.profile, name='profile'),  # Profil pengguna
    path('taaruf/', views.taaruf, name='taaruf'),  # Halaman ta'aruf
]
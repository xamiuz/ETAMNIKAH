from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('all-products/', views.all_products, name='all-products'),
    path('blog-details/<int:id>/', views.blog_details, name='blog-details'),  # Tambahkan parameter ID
    path('blog-posts/', views.blog_posts, name='blog-posts'),
    path('contact-us/', views.contact_us, name='contact-us'),
    path('login/', views.login, name='login'),
    path('product-details/', views.product_details, name='product-details'),
    path('profile/', views.profile, name='profile'),
    path('taaruf/', views.taaruf, name='taaruf'),
    path('pranikah-admin/', views.pranikah_admin, name='pranikah-admin'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
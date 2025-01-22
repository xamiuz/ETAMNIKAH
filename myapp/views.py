from django.shortcuts import render

def home(request):
    return render(request, 'myapp/index.html')

def about(request):
    return render(request, 'myapp/about.html')

def all_products(request):
    return render(request, 'myapp/all-products.html')

def blog_details(request):
    return render(request, 'myapp/blog-details.html')

def blog_posts(request):
    return render(request, 'myapp/blog-posts.html')

def contact_us(request):
    return render(request, 'myapp/contact-us.html')

def login(request):
    return render(request, 'myapp/login.html')

def product_details(request):
    return render(request, 'myapp/product-details.html')

def profile(request):
    return render(request, 'myapp/profile.html')

def taaruf(request):
    return render(request, 'myapp/taaruf.html')

def custom_404(request, exception):
    return render(request, 'myapp/404.html', status=404)
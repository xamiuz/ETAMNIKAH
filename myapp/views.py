from django.shortcuts import render

# Halaman beranda
def home(request):
    return render(request, 'myapp/index.html')

# Halaman tentang kami
def about(request):
    return render(request, 'myapp/about.html')

# Halaman semua produk
def all_products(request):
    return render(request, 'myapp/all-products.html')

# Halaman detail blog
def blog_details(request, pk):
    return render(request, 'myapp/blog-details.html', {'pk': pk})

# Halaman daftar blog
def blog_posts(request):
    return render(request, 'myapp/blog-posts.html')

# Halaman kontak kami
def contact_us(request):
    return render(request, 'myapp/contact-us.html')

# Halaman login
def login(request):
    return render(request, 'myapp/login.html')

# Halaman detail produk
def product_details(request, pk):
    return render(request, 'myapp/product-details.html', {'pk': pk})

# Halaman profil
def profile(request):
    return render(request, 'myapp/profile.html')

# Halaman ta'aruf
def taaruf(request):
    return render(request, 'myapp/taaruf.html')
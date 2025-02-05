from django.shortcuts import render, redirect , get_object_or_404
from .forms import PranikahForm
from .models import Pranikah
from django.contrib import messages

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
def blog_details(request, id):
    kelas = get_object_or_404(Pranikah, id=id)
    return render(request, 'myapp/blog-details.html', {'kelas': kelas})

def blog_posts(request):
    kelas_pranikah = Pranikah.objects.all().order_by('-tanggal')  # Mengambil semua kelas pranikah, diurutkan berdasarkan tanggal terbaru
    return render(request, 'myapp/blog-posts.html', {'kelas_pranikah': kelas_pranikah})

# Halaman kontak kami
def contact_us(request):
    return render(request, 'myapp/contact-us.html')

# Halaman login
def login(request):
    return render(request, 'myapp/login.html')

# Halaman detail produk
def product_details(request):
    return render(request, 'myapp/product-details.html')

# Halaman profil
def profile(request):
    return render(request, 'myapp/profile.html')

# Halaman ta'aruf
def taaruf(request):
    return render(request, 'myapp/taaruf.html')

def pranikah_admin(request):
    # Menangani form submission jika POST
    if request.method == 'POST':
        form = PranikahForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            # Menambahkan pesan keberhasilan
            messages.success(request, 'Kelas pranikah berhasil ditambahkan!')
            return redirect('pranikah-admin')  # Redirect kembali ke halaman yang sama setelah data berhasil ditambahkan
    else:
        form = PranikahForm()

    # Ambil semua kelas pranikah yang sudah ada untuk ditampilkan
    pranikahs = Pranikah.objects.all()

    return render(request, 'myapp/pranikah-admin.html', {'form': form, 'pranikahs': pranikahs})
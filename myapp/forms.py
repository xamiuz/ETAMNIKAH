# myapp/forms.py
from django import forms
from .models import Pranikah

class PranikahForm(forms.ModelForm):
    class Meta:
        model = Pranikah
        fields = ['nama_kelas', 'tanggal', 'gambar', 'deskripsi', 'link_zoom', 'pembayaran']

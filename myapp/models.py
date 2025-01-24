from django.db import models

class Pranikah(models.Model):
    nama_kelas = models.CharField(max_length=100)
    tanggal = models.DateField()
    gambar = models.ImageField(upload_to='pranikah/')
    deskripsi = models.TextField()
    link_zoom = models.URLField()
    pembayaran = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nama_kelas

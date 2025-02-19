# Generated by Django 5.1.5 on 2025-01-24 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pranikah',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nama_kelas', models.CharField(max_length=100)),
                ('tanggal', models.DateField()),
                ('gambar', models.ImageField(upload_to='pranikah/')),
                ('deskripsi', models.TextField()),
                ('link_zoom', models.URLField()),
                ('pembayaran', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]

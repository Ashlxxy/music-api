# UKM Band - Aplikasi Musik

Aplikasi pemutar musik berbasis web untuk UKM Band Universitas Telkom. Proyek ini merupakan demo frontend murni yang menggunakan `localStorage` sebagai database tiruan untuk mengelola data.

## Fitur Utama

### Fitur Pengguna
* **Autentikasi**: Pengguna dapat melakukan registrasi dan login. Sesi login disimpan di localStorage.
* **Pencarian Lagu**: Fitur pencarian global untuk mencari lagu berdasarkan judul, artis, atau deskripsi.
* **Pemutar Musik**:
    * Memutar lagu (`<audio>` HTML5) di halaman detail lagu.
    * Kontrol dasar (play, pause, repeat).
    * Navigasi lagu (next/previous) dalam daftar.
* **Interaksi Lagu**:
    * **Like**: Pengguna dapat menyukai (like) lagu. Tombol like akan aktif jika sudah disukai.
    * **Komentar**: Pengguna dapat mengirimkan komentar pada setiap lagu.
* **Manajemen Playlist**:
    * Membuat playlist baru.
    * Menambahkan lagu ke playlist yang sudah ada.
    * Menghapus lagu dari playlist.
    * Mengubah nama (rename) playlist.
    * Menghapus playlist.
* **Riwayat (History)**: Melihat 100 lagu terakhir yang diputar oleh pengguna.
* **Feedback**: Pengguna dapat mengirimkan pesan/feedback melalui formulir.

### Fitur Admin
* **Panel Admin**: Halaman khusus yang hanya dapat diakses oleh akun admin.
* **Manajemen Lagu (CRUD)**:
    * **Create**: Menambah data lagu baru melalui modal (judul, artis, deskripsi, URL cover, URL audio).
    * **Read**: Melihat semua lagu dalam bentuk tabel.
    * **Update**: Mengedit detail lagu yang sudah ada.
    * **Delete**: Menghapus lagu dari sistem.
* **Melihat Feedback**: Admin dapat melihat semua feedback yang telah dikirimkan oleh pengguna.

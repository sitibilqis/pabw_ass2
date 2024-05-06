<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "username", "password", "nama_database");

// Periksa koneksi
if (mysqli_connect_errno()) {
    echo "Koneksi database gagal: " . mysqli_connect_error();
    exit();
}

// Periksa apakah ID telah diterima dari permintaan GET
if (isset($_GET['id'])) {
    // Melakukan sanitasi data ID untuk mencegah serangan SQL Injection
    $id = mysqli_real_escape_string($koneksi, $_GET['id']);

    // Query untuk menghapus data berdasarkan ID
    $query = "DELETE FROM nama_tabel WHERE id = '$id'";
    
    // Eksekusi query
    if (mysqli_query($koneksi, $query)) {
        // Jika berhasil dihapus, kirim respons OK
        http_response_code(200);
        echo "Data berhasil dihapus.";
    } else {
        // Jika terjadi kesalahan, kirim respons error
        http_response_code(500);
        echo "Terjadi kesalahan saat menghapus data: " . mysqli_error($koneksi);
    }
} else {
    // Jika ID tidak diterima, kirim respons error
    http_response_code(400);
    echo "ID tidak ditemukan dalam permintaan.";
}

// Menutup koneksi
mysqli_close($koneksi);
?>

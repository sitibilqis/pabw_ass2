$(document).ready(function() {
    // Ketika dokumen siap, panggil fungsi untuk memuat data pertama kali
    getData();

    // Tambahkan event handler untuk tombol hapus
    $(document).on('click', '.btn-delete', function() {
        var id = $(this).data('id');
        // Kirim permintaan AJAX untuk menghapus data
        $.ajax({
            url: 'hapus_data.php?id=' + id,
            type: 'GET',
            success: function(response) {
                // Lakukan sesuatu setelah data dihapus, misalnya, panggil fungsi untuk memperbarui tabel
                getData(); // Mengupdate tabel setelah menghapus data
            },
            error: function(xhr, status, error) {
                console.error('Terjadi kesalahan: ' + status + error);
            }
        });
    });
});

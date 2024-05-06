// Mendefinisikan fungsi untuk memanggil data dari server
function getData() {
    $.ajax({
        url: 'tampil_data.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Proses data yang diterima
            // Misalnya, menampilkan data ke dalam tabel atau melakukan operasi lainnya
        },
        error: function(xhr, status, error) {
            console.error('Terjadi kesalahan: ' + status + error);
        }
    });
}

// Memanggil fungsi untuk mendapatkan data saat halaman dimuat
$(document).ready(function() {
    getData();
});

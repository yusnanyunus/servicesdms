---
sidebar_position: 2
id: security-gate
title: Security Gate
tags: [security, nomor antrian, antrian customer]
---

### Security Gate

> Customer yang telah booking atau pun walk-in ke cabang untuk service akan di input nomor plat kendaraannya di bagian security. lalu data nomor kendaraan yang telah dimasukkan akan secara otomatis masuk ke dalam monitor sistem antrian di ruangan penerimaan service.

![Docusaurus Plushie](/img/general-repair/security-gate/1.png)

| Elemen UI | Deskripsi |
|--------|--------|
| Operator | Nama user yang digunakan untuk login ke aplikasi (terisi otomatis) |
| Date, Time | Tanggal waktu saat ini (terisi otomatis) |
| License Plate No | Diisi Nomor Plat Kendaraan customer, pastikan pengisian dengan format “DD2021YY” tanpa menggunakan garis(-) dan juga spasi. Setelah pengisian nomor plat selesai lalu tekan tombol Enter. |
| Ticket No | No Tiket yang muncul pada print out tiket masuk. (terisi otomatis) |
| Customer | Nama Customer, terisi otomatis jika Customer sudah ter registrasi dalam sistem |
| Booking No | No Booking terakhir, terisi otomatis jika Customer sudah melakukan Booking sebelumnya |
| Model | Model kendaraan customer, terisi otomatis jika kendaraan customer telah ter registrasi sebelumnya |
| Note | Diisi dengan catatan customer jika diperlukan |
| Purpose | Berisi pilihan tujuan kedatangan customer ke bengkel. Jika customer sudah booking service sebelumnya, pilihan Booking akan terisi otomatis. |
| Print Off | Aktifkan opsi ini jika printer sedang mengalami masalah, tiket dapat dicetak kembali di bagian SA. |
| OK | Tekan tombol ini jika tiket telah dicetak dan customer siap masuk ke area service |

Setelah security selesai menginput data plat nomor kendaraan, maka otomatis diarahkan untuk mencetat tiket antrian :

![Docusaurus Plushie](/img/general-repair/security-gate/2.png)

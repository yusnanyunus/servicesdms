---
sidebar_position: 3
id: reception
title: Reception
tags: [reception, service advisor, SA, panggil antrian, reception queue, dashboard]
---

### Reception

> Sistem antrian dalam DMS Service ini terdiri dari 3 modul utama yang ber relasi satu dengan yang lainnya, yaitu : 

---
### **Gate Trigger Data Awal Antrian**

Lihat pada bagian **[Security Gate](http://dms-service.netlify.app/docs/general-repair/security-gate/)**.

---
### **Reception Queue Dashboard (Dashboard Antrian)**.

Aplikasi Dashboard Antrian sebaiknya dipasang dalam sebuah PC dengan layar monitor berukuran minimum 32” dan disarankan untuk menggunakan pengeras suara jika ruang tunggu service berukuran luas atau dengan tingkat kebisingan sedang. Aplikasi ini menampilkan daftar antrian aktif yang dapat dilihat langsung oleh Customer dan menghasilkan suara panggilan ketika Service Advisor melakukan aksi ![Docusaurus Plushie](/img/body-painting/reception/next.png). 

Berikut adalah tampilan Dashboard Antrian:

![Docusaurus Plushie](/img/body-painting/reception/1.png)

Aplikasi web DMS Service yang digunakan Service Advisor untuk memanggil antrian yang sudah teregistrasi dalam sistem, berikut adalah tampilan aplikasi web DMS Service untuk Service Advisor :

![Docusaurus Plushie](/img/body-painting/reception/2.png)

Berikut adalah penjelasan kolom – kolom pada list reception queue :


| Nama Kolom | Deskripsi |
|--------|--------|
| Queue No | No Tiket/Antrian yang muncul pada print out tiket masuk |
| Arrival Time | Tanggal dan Jam Customer masuk ke bengkel |
| Vehicle Unit | Kendaraan Customer yang terdaftar dalam sistem. |
| New Customer | Nomor Plat kendaraan untuk Customer yang belum ter-register dalam sistem, atau Customer yang nomor kendaraannya berubah dari data yang terakhir kali tercatat dalam sistem |
| In Call | Nomor antrian yang sementara di panggil. |
| Status | Status antrian kendaraan. |
| Service Advisor | SA yang memanggil antrian/Customer. |
| Branch | Cabang bengkel aktif. |
| Visit Reason | Tujuan kedatangan Customer |

Berikut adalah fungsi button action yang ada pada bagian atas tampilan :

| Nama Action | Deskripsi |
|--------|--------|
| ![Docusaurus Plushie](/img/body-painting/reception/next.png) | Panggil antrian berikutnya. Sistem akan mencari Customer dalam antrian berdasarkan jam kedatangan. | 
| ![Docusaurus Plushie](/img/body-painting/reception/booking.png) | Panggil antrian berikutnya khusus untuk Customer yang melakukan Booking | 
| ![Docusaurus Plushie](/img/body-painting/reception/priority.png) | Panggil antrian berikutnya khusus untuk Customer prioritas atau tamu penting. | 
| ![Docusaurus Plushie](/img/body-painting/reception/selected.png) | Menu ini digunakan untuk memanggil kembali data antrian yang sudah di skip sebelumnya dan hanya akan aktif jika user memilih data dengan status Skip. | 
| ![Docusaurus Plushie](/img/body-painting/reception/recall.png) | Memanggil ulang antrian yang telah di panggil melalui tombol Call Next, Call Booking atau pun Call Priority. | 
| ![Docusaurus Plushie](/img/body-painting/reception/skip.png) | Skip antrian aktif, digunakan jika customer tidak ada ditempat saat dipanggil. | 
| ![Docusaurus Plushie](/img/body-painting/reception/finish.png) | Klik action ini jika Customer yang dipanggil datang ke meja SA | 

![Docusaurus Plushie](/img/body-painting/reception/3.png)

Pada gambar di atas terdapat 3 cara untuk mencari identitas unit kendaraan, yaitu berdasarkan nomor plat, nomor rangka, dan nomor mesin, lalu klik enter atau klik button ![Docusaurus Plushie](/img/body-painting/reception/go.png).

Untuk tahap di reception ada tiga (3) proses untuk memulai, yaitu:

---
### **Melalui Sistem Antrian** 
Untuk tahap ini dengan menggunakan sistem antrian jika data unit kendaraan di input di bagian **Security Gate** dan **Service Advisor** tinggal memanggil antrian bisa di lihat pada bagian **[Reception](http://dms-service.netlify.app/docs/general-repair/reception/)**.

---
### **Melalui Menu Reception Vehicle Unit (Kustomer terdaftar)**
Caranya ialah dengan memasukkan nomor plat secara lengkap atau bisa juga dengan memasukkan nomor rangka atau nomor mesin, namun kali ini contoh nya memasukkan nomor plat kendaraan.

![Docusaurus Plushie](/img/body-painting/reception/4.png)

Setelah identitas customer muncul klik tombol “choose” untuk melanjutkan ke proses pembuatan **[Create Work Order](http://dms-service.netlify.app/docs/general-repair/create-wo/)**.

---
### **Melalui Menu Reception Vehicle Unit (Kustomer belum terdaftar)**
Dengan cara masukkan angka atau huruf secara acak, misalnya xyz,123 atau xy34, minimal 3 karakter.

![Docusaurus Plushie](/img/body-painting/reception/5.png)

Setelah hasil pencarian muncul klik tombol “NEW DATA” klik tombol tersebut, maka kita akan di arahkan untuk melanjutkan ke proses pembuatan data customer baru, seperti dibawah ini.

![Docusaurus Plushie](/img/body-painting/reception/6.png)

Pada gambar di atas Service Advisor akan di arahkan untuk mengisi data unit kendaraan, setelah semua nya terisi dilanjutkan mengisi data customer seperti di bawah ini.

![Docusaurus Plushie](/img/body-painting/reception/7.png)

:::tip Note

Pada bagian Field **Customer Name**, nama nama kustomer sebelumnya sudah terinput di database, jika Service Advisor mau menambahkan data customer yang belum ada, silahkan klik menu **General** -> lalu pilih dan klik **Customer** -> klik tombol ![Docusaurus Plushie](/img/general-repair/create-booking/newrecord.png) akan muncul tampilan form dan buat data kustomer baru, lihat di bagian **[Create New Customer](https://dms-service.netlify.app/docs/general#customer)**

:::

Setelah Vehicle Details dan Customer Details terisi lengkap, klik tombol ![Docusaurus Plushie](/img/body-painting/reception/saveform.png) lalu akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/body-painting/reception/8.png)

Pada halaman ini klik tab **Contact Person** maka Service Advisor di wajibkan untuk mengisi data singkat customer yang membawa kendaraan, lihat gambar di bawah ini.

![Docusaurus Plushie](/img/body-painting/reception/9.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/body-painting/reception/newcontact.png).
2. Lengkapi inputan yang mandatori*
3. Klik tombol ![Docusaurus Plushie](/img/body-painting/reception/save.png)
4. Klik tombol ![Docusaurus Plushie](/img/body-painting/reception/workorder.png)

Setelah data **Contact Person** terisi, pada bagian kanan atas tampilan klik tombol ![Docusaurus Plushie](/img/body-painting/reception/workorder.png) maka Service Advisor dilanjutkan untuk membuat Work Order
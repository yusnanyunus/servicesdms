---
sidebar_position: 8
id: mraog
title: MRA Operational Guide
sidebar_label: MRA Operational Guide
toc_max_heading_level: 4
hide_title: true
tags: [booking, MRA, appointment, reminder, kustomer terdaftar, kustomer tidak terdaftar]
---


### **Create Booking**

> Pada tahapan ini akan dijelaskan langkah untuk membuat booking service pada Dealer Management System.
Pilih menu Appointment – Booking – lalu masukkan nomor plat secara lengkap atau bisa juga dengan memasukkan nomor rangka atau nomor mesin.

Untuk tahap di menu **booking** ada dua (2) proses untuk memulai, yaitu:

---
 
### **Appointment Booking (Customer registered)**

Caranya ialah dengan memasukkan nomor plat secara lengkap atau bisa juga dengan memasukkan nomor rangka atau nomor mesin, namun kali ini contoh nya memasukkan nomor plat kendaraan.

![Docusaurus Plushie](/img/mra-og/create-booking/1.png)

Setelah identitas customer muncul klik tombol "choose" untuk melanjutkan ke proses pembuatan **Create Booking**.

lalu pada bagian kanan tampilan klik button ![Docusaurus Plushie](/img/mra-og/create-booking/booking.png) seperti gambar di bawah ini.

![Docusaurus Plushie](/img/mra-og/create-booking/1.1.png)

---

### **Appointment Booking (Customer non listed)**
Dengan cara masukkan angka atau huruf secara acak, misalnya xyz,123 atau xy34, minimal 3 karakter.

![Docusaurus Plushie](/img/general-repair/reception/5.png)

Setelah hasil pencarian muncul klik tombol “NEW DATA” klik tombol tersebut, maka kita akan di arahkan untuk melanjutkan ke proses pembuatan data customer baru, seperti dibawah ini.

![Docusaurus Plushie](/img/mra-og/create-booking/3.png)

Pada gambar di atas MRA akan di arahkan untuk mengisi data unit kendaraan, setelah semua nya terisi dilanjutkan mengisi data customer seperti di bawah ini.

![Docusaurus Plushie](/img/mra-og/create-booking/4.png)

:::tip Note

Pada bagian Field **Customer Name**, nama nama kustomer sebelumnya sudah terinput di database, jika MRA mau menambahkan data customer yang belum ada, silahkan klik menu **General** -> lalu pilih dan klik **Customer** -> klik tombol ![Docusaurus Plushie](/img/mra-og/create-booking/newrecord.png) akan muncul tampilan form dan buat data kustomer baru, lihat di bagian **[Create New Customer](https://dms-service.netlify.app/docs/general#customer)**

:::

Setelah Vehicle Details dan Customer Details terisi lengkap, klik tombol ![Docusaurus Plushie](/img/mra-og/create-booking/saveform.png) lalu akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/mra-og/create-booking/5.png)

Pada halaman ini klik tab **Contact Person** maka MRA di wajibkan untuk mengisi data singkat customer yang membawa kendaraan, lihat gambar di bawah ini.

![Docusaurus Plushie](/img/mra-og/create-booking/6.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/mra-og/create-booking/newcontact.png).
2. Lengkapi inputan yang mandatori*
3. Klik tombol ![Docusaurus Plushie](/img/mra-og/create-booking/save.png)
4. Klik tombol ![Docusaurus Plushie](/img/mra-og/create-booking/booking.png)

Setelah data **Contact Person** terisi, pada bagian kanan atas tampilan klik tombol ![Docusaurus Plushie](/img/mra-og/create-booking/booking.png) maka tugas MRA dilanjutkan untuk membuat Booking Order.

Silahkan lengkapi form order dibawah ini.

![Docusaurus Plushie](/img/mra-og/create-booking/7.png)

Setelah form di atas lengkapi, klik tombol ![Docusaurus Plushie](/img/mra-og/create-booking/saveform.png), dan nomor booking telah terbit.

Lalu dilanjutkan untuk penginputan Job Order yang merupakan proses mandatori yang ada di order booking.

![Docusaurus Plushie](/img/mra-og/create-booking/8.png)

| Nama Kolom | Deskripsi |
|--------|--------|
|Job | Pilihan job yang di kerjakan oleh teknisi|
|Service Unit Price	| Harga per unit dari job|
|Job Service Rate | Rate job yang dijual ke kustomer|
|Technician	| Nama teknisi yang akan handling job tersebut|
|Technician Job Rate | lama pengerjaan yang di berikan ke teknisi|
|Discount	| Diskon yang diberikan kepada kustomer|
|Program	| Program untuk job|
|Insurance	| Nama asuransi yang menanggung tagihan job|
|Stall	| Tempat pengerjaan job|
|Job Status | **None** : Status awal Job, **Planned** : Tidak terpakai, **Canceled** : Job dibatalkan, **Started** : Job dimulai, **On progress** : Job dalam pengerjaan, **Paused** : Job dihentikan sementara, **Completed** : Job telah selesai, **Unsolved** : Job tidak dapat diselesaikan, **Under sublet** : Job dalam pengerjaan luar bengkel|
|Sub Total | Nilai dari Job sebelum pajak, diskon, tanggungan asuransi dan program|
|Discount Percentage | Persentase diskon|
|Discount Amount | Nilai diskon yang diberikan|
|Program Percentage	| Persentase program|
|Program Amount	| Nilai Program yang di berikan|
|Job Insurance Amount | Nilai Job yang ditanggung asuransi|
|Subtotal On Customer | Nilai tagihan yang ditanggung langsung oleh kustomer|
|Sublet	| **YES** : Jika pengerjaan luar bengkel, **NO** : bukan pengerjaan luar bengkel|

![Docusaurus Plushie](/img/mra-og/create-booking/9.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/mra-og/create-booking/addjoborder.png).
2. Lengkapi inputan yang mandatori*
3. Klik tombol ![Docusaurus Plushie](/img/mra-og/create-booking/save.png)

---

### **Reminder**

> Pada tahap ini menu Reminder digunakan untuk mengingatkan customer untuk melakukan servis berkala pada unit kendaraan nya, untuk memulai melakukan reminder silahkan klik menu **Appointment - Reminder Active**

![Docusaurus Plushie](/img/mra-og/reminder/1.png)

akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/mra-og/reminder/2.png)

untuk memulai melakukan reminder, silahkan centang terlebih dahulu customer pada list view lalu klik button ![Docusaurus Plushie](/img/mra-og/reminder/blast.png)

![Docusaurus Plushie](/img/mra-og/reminder/3.png)

maka icon centang tersebut berubah menjadi button ![Docusaurus Plushie](/img/mra-og/reminder/tigatitik.png)

![Docusaurus Plushie](/img/mra-og/reminder/4.png)

silahkan klik button tersebut lalu klik button **Edit**

![Docusaurus Plushie](/img/mra-og/reminder/5.png)

maka akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/mra-og/reminder/6.png)

silahkan centang salah satu atau lebih jenis reminder yang diterapkan ke customer.

![Docusaurus Plushie](/img/mra-og/reminder/7.png)

jika customer bersedia datang servis di kemudian hari silahkan centang **booking** lalu isi tanggal di samping nya setelah itu klik button ![Docusaurus Plushie](/img/mra-og/reminder/booking.png) di bagian kanan bawah tampilan, maka secara otomatis akan di arahkan ke menu booking.

setelah semua selesai dicentang dan di isi klik **Save**

![Docusaurus Plushie](/img/mra-og/reminder/8.png)

klik pada bagian kanan atas untuk mendownload laporan reminder klik button ![Docusaurus Plushie](/img/mra-og/reminder/download.png).

![Docusaurus Plushie](/img/mra-og/reminder/9.png)
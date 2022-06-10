---
sidebar_position: 7
id: partmanog
title: PART OPERATIONAL GUIDE
sidebar_label: PART OPERATIONAL GUIDE
toc_max_heading_level: 4
hide_title: true
tags: [partman, part, part supply, return part, picking part, part transaction history, part transfer, part stock, part purchase order, request part supply, service part supply, process part supply]
---

Bagian ini akan menjelaskan secara terperinci proses-proses pada aplikasi DMS Service yang dapat diakses oleh bagian part bengkel. Modul ini berfungsi sebagai wadah bagi Partman atau Partlady untuk mengelolah data part, baik part yang keluar dari warehouse maupun part yang masuk ke warehouse. Terdapat macam-macam aktivitas yang akan dijelaskan pada bagian ini.


### Part Purchase Order
> Merupakan menu yang digunakan untuk pengajuan pembelian part ke vendor pada bahasan ini akan di jelaskan secara terperinci.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/1.png)

pada bagian kanan atas klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/neworder.png) lalu akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/2.png)

pilih nama supplier nya dan pada inputan **B/O type** pilih angka nya lalu klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/saveform.png) maka akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/3.png)

pada bagian kiri bawah klik button **Add New**, lalu akan muncul form seperti dibawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/4.png)

sebagai contoh, untuk gambar diatas penulis melakukan order part dengan nama **GROMMET, SCREW** dengan quantity yang di order 2 (dua) , lalu klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/5.png)

maka list part yang akan di order akan muncul pada bagian bawah, selanjut nya klik button **Generate Order Detail** setelah itu pada bagian kanan bawah klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

lalu dilanjutkan klik button **Generate PO** dan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png) seperti gambar dibawah ini

![Docusaurus Plushie](/img/partman-og/part-purchase-order/6.png)

pada gambar di bawah klik button **Export PO TXT** untuk mendownload list PO dalam bentuk format TXT.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/7.png)

pada tampilan sidebar aplikasi sebelah kanan, klik menu **Part Receive** 
![Docusaurus Plushie](/img/partman-og/part-purchase-order/8.png)

maka akan muncul tampilan seperti dibawah ini, klik button **New receiving (TXT)** pada bagian kanan list tampilan

![Docusaurus Plushie](/img/partman-og/part-purchase-order/9.png)

lalu akan muncul form seperti dibawah ini, klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/saveform.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/10.png)

perhatikan pada gambar di bawah ada inputan untuk melakukan upload file, perlu di perhatikan file yang di upload ialah **Packaging List** dan **Invoice** dengan format TXT

![Docusaurus Plushie](/img/partman-og/part-purchase-order/11.png)

dimulai upload file **Packaging List** seperti gambar di bawah ini lalu klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/12.png)

maka file yang telah di upload telah otomatis muncul pada list.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/13.png)

lalu di lanjutkan mengupload file **Invoice** dan klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/14.png)

setelah kedua file di upload, silahkan klik button **Save** dan di lanjutkan klik button **Generate Invoice**

![Docusaurus Plushie](/img/partman-og/part-purchase-order/15.png)

setelah di generate maka muncul tampilan seperti dibawah ini, perhatikan pada inputan pada **Confirm Receive** masukkan jumlah part yang di terima dari supplier, sebagai contoh pada quantity order 2 (dua)maka harus nya confirm receive nya pus di isi 2 (dua), setelah itu klik button ![Docusaurus Plushie](/img/partman-og/part-purchase-order/save.png)

![Docusaurus Plushie](/img/partman-og/part-purchase-order/16.png)

maka part yang di order telah di terima dan terecord oleh sistem, seperti gambar di bawah ini.

![Docusaurus Plushie](/img/partman-og/part-purchase-order/17.png)

### Part Transfer
> Part Transfer merupakan menu yang digunakan untuk transfer part antar cabang

### Part Stock
> Menu Part Stock berisikan informasi stok card part dalam bentuk List View seperti pada gambar dibawah ini

### Part Transaction History
> Part Transaction History berfungsi untuk menampilkan riwayat transaksi part pada Cabang Part Man aktif, dalam bentuk List View seperti pada gambar dibawah ini. 

### Service Part Supply

> Untuk Service Part Supply menangani semua hal yang berkaitan dengan proses supply part dari Part Man ke Teknisi, termasuk Part Booking dan Part Return dari Teknisi ke Part Man yang dapat di akses melalui partman->supply part, maka akan muncul tampilan seperti dibawah ini.


Lalu partman akan melakukan pencarian part yang akan disupply berdasarkan nomor plat atau nomor Work Order, sebagai contoh pencarian berdasarkan nomor plat kendaraan kemudian klik ENTER atau tekan tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/search.png). Akan muncul data Work Order lalu klik tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/supplypart.png).

![Docusaurus Plushie](/img/partman-og/service-part-supply/2.png)

Setelah itu lanjut ke proses di bawah ini.


---
### Proccess Part Supply

> Partman dapat memonitor permintaan supply part untuk Work Order dari Service Advisor melalui menu Part Supply. dapat dilihat daftar permintaan Part dari Service Advisor berdasarkan nomor Work Order. Sebelum melakukan proses supply terlebih dahulu Partman harus merubah status part menjadi Reserved, pilih Part yang akan di supply, tekan tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/duagaris.png) klik tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/reserve.png) lalu pilih ![Docusaurus Plushie](/img/partman-og/service-part-supply/yes-reserve.png). 

![Docusaurus Plushie](/img/partman-og/service-part-supply/3.png)


---
### Part Picking

> Partman dapat langsung men-supply Part yang diminta dengan cara menekan tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/duagaris.png) klik tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/pick.png) lalu pilih ![Docusaurus Plushie](/img/partman-og/service-part-supply/yes-picked.png), jumlah yang di-supply berjumlah sama dengan jumlah permintaan Service Advisor. Partman tidak dapat merubah jumlah supply dengan meng-edit kolom Quantity, jika ingin melakukan perubahan quantity bisa di lakukan oleh Service Advisor.

![Docusaurus Plushie](/img/partman-og/service-part-supply/4.png)


---
### Print Part Picking Slip

> Sebagai bukti serah terima Part antara Partman dan Teknisi, Partman dapat mencetak Part Packing Slip, pada bagian bawah tampilan.

![Docusaurus Plushie](/img/partman-og/service-part-supply/5.png)

![Docusaurus Plushie](/img/partman-og/service-part-supply/6.png)


---
### Return Part

> Jika ada pengembalian part yang sudah di-pick oleh Teknisi, Partman dapat meng-input pengembalian part tersebut ke Main Warehouse dengan cara tekan tombol ![Docusaurus Plushie](/img/partman-og/service-part-supply/duagaris.png), lalu klik ![Docusaurus Plushie](/img/partman-og/service-part-supply/return.png) dan klik ![Docusaurus Plushie](/img/partman-og/service-part-supply/yes-return.png),seperti pada gambar dibawah ini.

![Docusaurus Plushie](/img/partman-og/service-part-supply/7.png)

![Docusaurus Plushie](/img/partman-og/service-part-supply/8.png)

Setelah part dikembalikan, Part Status yang sebelumnya Part Status Picked berubah menjadi status None.
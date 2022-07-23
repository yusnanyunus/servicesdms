---
sidebar_position: 3
id: reception
title: Reception
tags: [reception, service advisor, SA, panggil antrian, reception queue, dashboard]
---

### **Find Vehicle/Customer**

Untuk mencari unit klik menu **Reception - Vehicle Unit**. 

![Docusaurus Plushie](/img/general-repair/reception/10.png)

Pencarian unit dilakukan menggunakan beberapa metode antara lain:
1. Plat Number
2. Frame Number
3. Engine Number
4. Customer Name
5. Mobile No

![Docusaurus Plushie](/img/general-repair/reception/11.png)

---

 **Kustomer Terdaftar**

Masukkan nomor plat secara lengkap atau bisa juga dengan memasukkan nomor rangka atau nomor mesin, namun kali ini contoh nya memasukkan nomor plat kendaraan.

![Docusaurus Plushie](/img/general-repair/reception/4.png)

Setelah identitas customer muncul klik tombol “choose”, maka akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/12.png)

untuk melanjutkan ke proses pembuatan **[Create Work Order](#create-work-order)**.

---
 **Kustomer Tidak Terdaftar**
Dengan cara masukkan angka atau huruf secara acak, misalnya xyz,123 atau xy34, minimal 3 karakter.

![Docusaurus Plushie](/img/general-repair/reception/5.png)

Setelah hasil pencarian muncul klik tombol “NEW DATA” klik tombol tersebut, maka kita akan di arahkan untuk melanjutkan ke proses pembuatan data customer baru, seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/6.png)

Pada gambar di atas Service Advisor akan di arahkan untuk mengisi data unit kendaraan, setelah semua nya terisi dilanjutkan mengisi data customer seperti di bawah ini.

![Docusaurus Plushie](/img/general-repair/reception/7.png)

:::tip Note

Pada bagian Field **Customer Name**, nama nama kustomer sebelumnya sudah terinput di database, jika Service Advisor mau menambahkan data customer yang belum ada, silahkan klik menu **General** -> lalu pilih dan klik **Customer** -> klik tombol ![Docusaurus Plushie](/img/mra-og/create-booking/newrecord.png) akan muncul tampilan form dan buat data kustomer baru, lihat di bagian **[Create New Customer](https://dms-service.netlify.app/docs/general#customer)**

:::

Setelah tab **Vehicle Details** dan **Customer Details** terisi lengkap, klik tombol ![Docusaurus Plushie](/img/general-repair/reception/saveform.png) lalu akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/8.png)

Pada halaman ini klik tab **Contact Person** maka Service Advisor di wajibkan untuk mengisi data singkat customer yang membawa kendaraan, lihat gambar di bawah ini.

![Docusaurus Plushie](/img/general-repair/reception/9.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/general-repair/reception/newcontact.png).
2. Lengkapi inputan yang mandatori*
3. Klik tombol ![Docusaurus Plushie](/img/general-repair/reception/save.png)
4. Klik tombol ![Docusaurus Plushie](/img/general-repair/reception/workorder.png)

Setelah data **Contact Person** terisi, pada bagian kanan atas tampilan klik tombol ![Docusaurus Plushie](/img/general-repair/reception/workorder.png) maka Service Advisor dilanjutkan untuk membuat Work Order

<!--

### Reception

> Sistem antrian dalam DMS Service ini terdiri dari 3 modul utama yang ber relasi satu dengan yang lainnya, yaitu : 

---
### **Gate Trigger Data Awal Antrian**

Lihat pada bagian **[Security Gate](http://localhost:3000/docs/general-repair/security-gate/)**.

---
### **Reception Queue Dashboard (Dashboard Antrian)**.

Aplikasi Dashboard Antrian sebaiknya dipasang dalam sebuah PC dengan layar monitor berukuran minimum 32” dan disarankan untuk menggunakan pengeras suara jika ruang tunggu service berukuran luas atau dengan tingkat kebisingan sedang. Aplikasi ini menampilkan daftar antrian aktif yang dapat dilihat langsung oleh Customer dan menghasilkan suara panggilan ketika Service Advisor melakukan aksi ![Docusaurus Plushie](/img/general-repair/reception/next.png). 

Berikut adalah tampilan Dashboard Antrian:

![Docusaurus Plushie](/img/general-repair/reception/1.png)

Aplikasi web DMS Service yang digunakan Service Advisor untuk memanggil antrian yang sudah teregistrasi dalam sistem, berikut adalah tampilan aplikasi web DMS Service untuk Service Advisor :

![Docusaurus Plushie](/img/general-repair/reception/2.png)

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
| ![Docusaurus Plushie](/img/general-repair/reception/next.png) | Panggil antrian berikutnya. Sistem akan mencari Customer dalam antrian berdasarkan jam kedatangan. | 
| ![Docusaurus Plushie](/img/general-repair/reception/booking.png) | Panggil antrian berikutnya khusus untuk Customer yang melakukan Booking | 
| ![Docusaurus Plushie](/img/general-repair/reception/priority.png) | Panggil antrian berikutnya khusus untuk Customer prioritas atau tamu penting. | 
| ![Docusaurus Plushie](/img/general-repair/reception/selected.png) | Menu ini digunakan untuk memanggil kembali data antrian yang sudah di skip sebelumnya dan hanya akan aktif jika user memilih data dengan status Skip. | 
| ![Docusaurus Plushie](/img/general-repair/reception/recall.png) | Memanggil ulang antrian yang telah di panggil melalui tombol Call Next, Call Booking atau pun Call Priority. | 
| ![Docusaurus Plushie](/img/general-repair/reception/skip.png) | Skip antrian aktif, digunakan jika customer tidak ada ditempat saat dipanggil. | 
| ![Docusaurus Plushie](/img/general-repair/reception/finish.png) | Klik action ini jika Customer yang dipanggil datang ke meja SA | 

![Docusaurus Plushie](/img/general-repair/reception/3.png)

Pada gambar di atas terdapat 3 cara untuk mencari identitas unit kendaraan, yaitu berdasarkan nomor plat, nomor rangka, dan nomor mesin, lalu klik enter atau klik button ![Docusaurus Plushie](/img/general-repair/reception/go.png).

Untuk tahap di reception ada tiga (3) proses untuk memulai, yaitu:

---
### **Melalui Sistem Antrian** 
Untuk tahap ini dengan menggunakan sistem antrian jika data unit kendaraan di input di bagian **Security Gate** dan **Service Advisor** tinggal memanggil antrian bisa di lihat pada bagian **[Reception](http://localhost:3000/docs/general-repair/reception/)**.

--->

### **Create Work Order**

![Docusaurus Plushie](/img/general-repair/create-wo/1.png)

> Pembuatan Work Order merupakan kelanjutan dari proses-proses sebelumnya. Work Order merupakan Detail View yang berbentuk Master-Detail Form yang terdiri atas Work Order data dan beberapa detail seperti pada gambar di atas. Berikut adalah elemen-elemen UI yang penting dalam Work Order Detail View:

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Date |Tanggal dibuat nya work order |
| Work Order Status | **None** : Status awal WO, **Booking** :WO Booking, **Waiting for reception** : Menunggu penerimaan SA, **Reception**	: Proses Penerimaan, **Waiting for job distribution** : Menunggu distribusi Job, **Waiting for technician**	: Menunggu teknisi, **Production** : Pengerjaan Job oleh teknisi, **Waiting for inspection** : Menunggu Inspeksi, **Inspection** : Inspeksi Job, **Waiting for document checking** : Menunggu pengecekan dokumen, **Document checking**	: Pengecekan dokumen, **Waiting for invoice** : Menunggu pembuatan invoice, **Invoice**	: Pembuatan invoice selesai, **Waiting for payment** : Menunggu pembayaran, **Settlement** : Pembayaran selesai, **Waiting for delivery** : Menunggu penyerahan kendaraan, **Delivered** : Kendaraan telah diserahkan, **Cancel** : dibatalkan, **Waiting Approval** : menunggu persetujuan atasan |
| Repair Type | Jenis perbaikan |
| Mobile Service Type | Diisi khusus jika pelayanan servis mobile seperti TMC dan DMC |
| Express Maintenance | Pilih **Yes** jika Express maintenance, jika tidak pilih **No** |
| Last Mileage Record | Angka kilometer terisi jika unit pernah datang servis sebelumnya |
| Current Mileage record | Angka kilometer saat datang servis.  |
| Customer Delivery Date Request | Tanggal dan jam penyerahan ke kustomer. |
| Customer Waiting | Pilih **Yes** jika customer menunggu, jika tidak pilih **No** |
| Washing	| Pilih **Yes** jika unit kendaraan ingin di cuci, jika tidak pilih **No** |
| SPK Reference | Masukkan **nomor SPK** Pembelian jika diperlukan (tidak Wajib) |
| Remark | Catatan jika diperlukan (tidak wajib) |

Service Advisor dapat meng-input jenis pekerjaan/Job yang akan dilakukan pada tab **Job Order**, bergantung kepada tujuan kedatangan Customer. Selain itu, Service Advisor juga dapat memasukkan keluhan-keluhan yang dialami oleh Customer melalui tab **Customer Request**. Part-part yang dibutuhkan dalam proses service dapat di-input pada tab **Part Order** dan juga **WAC** proses pengecekan kondisi kustomer sebelum di lakukan perbaikan.

---

### **Create Estimation**

![Docusaurus Plushie](/img/general-repair/reception/15.png)

![Docusaurus Plushie](/img/general-repair/reception/13.png)

> Halaman ini digunakan untuk membuat form biaya estimasi servis, sebelum nomor Work Order terbit

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order Estimation No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Estimation Date |Tanggal dibuat nya work order |
| Repair Type | Jenis perbaikan |
| Last Mileage Record | Angka kilometer terisi jika unit pernah datang servis sebelumnya |
| Current Mileage record | Angka kilometer saat datang servis.  |
| Remark | Catatan jika diperlukan (tidak wajib) |

setelah itu klik button ![Docusaurus Plushie](/img/general-repair/reception/saveform.png)

maka akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/general-repair/reception/19.png)

pada inputan **Plan Service Date** masukkan tanggal rencana datang servis

setelah itu silahkan isi pada bagian tab **[Customer Request](#customer-request)**, **[Job Order](#job-order)**, **[Part Order](#part-order)** seperti biasa, dilanjutkan klik button ![Docusaurus Plushie](/img/general-repair/reception/calculation.png) untuk menghitung ulang estimasi secara sistem lalu pada bagian bawah tampilan klik button ![Docusaurus Plushie](/img/general-repair/reception/printestimation.png) maka akan muncul hasil cetak estimasi.

![Docusaurus Plushie](/img/general-repair/reception/20.png)

---
### **Create Diagnostic**

![Docusaurus Plushie](/img/general-repair/reception/16.png)

![Docusaurus Plushie](/img/general-repair/reception/14.png)

> Halaman ini digunakan untuk membuat form analisa kerusakan, sebelum nomor Work Order terbit


| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order Diagnostic No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Diagnostic Date |Tanggal dibuat nya work order |
| Work Order Diagnostic Status | **Diagnostic** : Status awal WO |
| Foreman | Pilih Nama PTM |
| Remark | Catatan jika diperlukan (tidak wajib) |

setelah itu klik button ![Docusaurus Plushie](/img/general-repair/reception/saveform.png)

lalu pada bagian bawah tampilan klik button ![Docusaurus Plushie](/img/general-repair/reception/printdiagnostic.png)

![Docusaurus Plushie](/img/general-repair/reception/17.png)

maka akan muncul form seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/18.png)

---

### **Purchase Part**

![Docusaurus Plushie](/img/purchase-part/create-wo/1.png)

> Jika ada Customer yang datang kepada Service Advisor hanya untuk membeli part saja tanpa melakukan servis pada unit kendaraanya, petugas Service Advisor dapat membuat Work Order Purchase Part yang difungsikan untuk pembelian part tanpa adanya Job pada Work Order tersebut.

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Date |Tanggal dibuat nya work order |
| Work Order Status | **None** : Status awal WO, **Waiting for reception** : Menunggu penerimaan SA, **Reception**	: Proses Penerimaan, **Waiting for document checking** : Menunggu pengecekan dokumen, **Document checking**	: Pengecekan dokumen, **Waiting for invoice** : Menunggu pembuatan invoice, **Invoice**	: Pembuatan invoice selesai, **Waiting for payment** : Menunggu pembayaran, **Cancel** : dibatalkan, **Waiting Approval** : menunggu persetujuan atasan |
| Repair Type | Jenis perbaikan *(terisi otomatis)* |
| Remark | Catatan jika diperlukan (tidak wajib) |

---

### **Walk Arround Check (WAC)**

> Proses Walk Around Check (WAC) merupakan proses pengecekan kondisi kendaraan kustomer sebelum perbaikan dilakukan. Untuk memulai proses WAC, Service Advisor dapat memilih tab WAC lalu klik tombol ![Docusaurus Plushie](/img/general-repair/wac/settingwac.png) seperti pada gambar di bawah ini:

![Docusaurus Plushie](/img/general-repair/wac/1.png)

Lalu Service Advisor akan di arahkan untuk melakukan checklist pada form WAC mengambil gambar unit kendaraan sebelum dilakukan perbaikan dan juga memberikan catatan jika dibutuhkan.

![Docusaurus Plushie](/img/general-repair/wac/2.png)

Setelah semua selesai klik tombol ![Docusaurus Plushie](/img/general-repair/wac/save.png), maka proses pengisian form WAC selesai.

![Docusaurus Plushie](/img/general-repair/wac/3.png)


---
### **Customer Request**

![Docusaurus Plushie](/img/general-repair/create-wo/2.png)

![Docusaurus Plushie](/img/general-repair/create-wo/3.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addcustomerreq.png).
2. Deskripsikan keluhan atau permintaan kustomer
3. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)


---
### **Job Order**

![Docusaurus Plushie](/img/general-repair/create-wo/4.png)

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
|Job Status | **None** : Status awal Job, **On progress** : Job dalam pengerjaan, **Paused** : Job dihentikan sementara, **Completed** : Job telah selesai|
|Sub Total | Nilai dari Job sebelum pajak, diskon, tanggungan asuransi dan program|
|Discount Percentage | Persentase diskon|
|Discount Amount | Nilai diskon yang diberikan|
|Program Percentage	| Persentase program|
|Program Amount	| Nilai Program yang di berikan|
|Job Insurance Amount | Nilai Job yang ditanggung asuransi|
|Subtotal On Customer | Nilai tagihan yang ditanggung langsung oleh kustomer|
|Sublet	| **YES** : Jika pengerjaan luar bengkel, **NO** : bukan pengerjaan luar bengkel|

![Docusaurus Plushie](/img/general-repair/create-wo/5.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addjoborder.png).
2. Lengkapi inputan yang mandatori*
3. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)


---
### **Part Order**

![Docusaurus Plushie](/img/general-repair/create-wo/6.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Part No | Nomor part yang akan digunakan |
| Part Name | Nama part yang akan digunakan |
| Quantity | Jumlah part yang digunakan |
| Part Status | **None** : Status awal Part, **Reserved** : Part telah dipesan oleh SA kepada Part Man, **Picked** : Part sudah diserahkan Part Man kepada Teknisi, **Unavailable** : Part tidak tersedia, **Cancelled** : Pemesanan Part dibatalkan |
| Qty Supplied | Jumlah part yang di supply oleh Partman |
| Stock | Menampilkan jumlah stok part yang ada di gudang utama |
| Discount | Diskon yang diberikan kepada kustomer |
| Program | Program untuk part |
| Insurance | Nama asuransi yang menanggung tagihan part |
| Subtotal On Customer | Nilai tagihan yang ditanggung langsung oleh kustomer |
| Sub Total | Nilai dari Job sebelum pajak, diskon, tanggungan asuransi dan program |
| Discount Percentage | Persentase diskon |
| Discount Amount | Nilai diskon yang diberikan |

![Docusaurus Plushie](/img/general-repair/create-wo/7.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addpart.png).
2. Lengkapi inputan yang mandatori *
3. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)

### **Print Work Order**

> Service Advisor dapat mencetak Work Order dengan cara menekan tombol ![Docusaurus Plushie](/img/general-repair/print-wo/printwo.png)pada bagian bawah tampilan seperti pada gambar dibawah ini.

![Docusaurus Plushie](/img/general-repair/print-wo/1.png)

![Docusaurus Plushie](/img/general-repair/print-wo/2.png)


### **Add Program/Insurance**

> Berikut ini adalah langkah-langkah cara menambahkan program atau insurance baik itu di job maupun part.

![Docusaurus Plushie](/img/general-repair/doc-checking/5.png)

Untuk memulai proses penambahan program atau insurance, klik ![Docusaurus Plushie](/img/general-repair/doc-checking/tigatitik.png) lalu akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/doc-checking/7.png)

klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/tigatitik.png), maka akan muncul form job seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/doc-checking/8.png)

*Keterangan :*

1. **Pilih Insurance** : Masukkan nama insurer nya.
2. **Pilih Program** : Masukkan nama pihak ke-3 penyedia program.

Pilih salah satu penyedia potongan harga, lalu klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/save.png) pada bagian kanan bawah form.

### **Request Discount**

:::info

proses ini membutuhkan approval :

- Diskon 1 - 15 % : Kepala Bengkel
- Diskon 16 - 25 % : Kepala Bengkel -> Kepala Cabang
- Diskon 26 - 100 % : Kepala Bengkel -> Kepala Cabang -> MO (Head Office) -> GM (Head Office)

:::

> Berikut adalah cara memasukkan diskon baik itu di job maupun part

![Docusaurus Plushie](/img/general-repair/doc-checking/5.png)

Untuk memulai proses penambahan diskon, klik ![Docusaurus Plushie](/img/general-repair/doc-checking/tigatitik.png) lalu akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/doc-checking/9.png)

klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/tigatitik.png), maka akan muncul form job seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/doc-checking/10.png)

setelah di pilih diskon nya, klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/save.png)

lalu akan muncul alert **Success**

![Docusaurus Plushie](/img/general-repair/doc-checking/success.png)

pada bagian bawah kanan list view klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/reqdiskon.png)

lalu akan muncul tampilan form kecil seperti di bawah ini.

![Docusaurus Plushie](/img/general-repair/doc-checking/11.png)

deskripsikan alasan nya permintaan diskon tersebut, setelah itu klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/process.png)

maka proses pengajuan selesai tinggal menunggu approval dari atasan.


### **Cancel Work Order**

:::info

proses ini membutuhkan approval **Kepala bengkel**

:::

> Tahapan ini akan di jelaskan langkah - langkah cara melakukan cancel pada Work Order, pilih menu **reception - klik work order list**

![Docusaurus Plushie](/img/sa-og/cancel-wo/1.png)

lalu akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/sa-og/cancel-wo/2.png)

pada bagian kiri list view klik button ![Docusaurus Plushie](/img/sa-og/cancel-wo/tigatitik.png) lalu klik ![Docusaurus Plushie](/img/sa-og/cancel-wo/cancelwo.png)

![Docusaurus Plushie](/img/sa-og/cancel-wo/3.png)

setelah itu muncul form seperti dibawah ini, silahkan masukkan alasan nya mengapa **Work Order** ini harus dibatalkan dan klik ![Docusaurus Plushie](/img/sa-og/cancel-wo/save.png)

![Docusaurus Plushie](/img/sa-og/cancel-wo/4.png)

maka status work order berubah menjadi **Waiting Approval Cancel Work Order by Service Manager** artinya pembatalan work order membutuhkan persetujuan kepala bengkel

![Docusaurus Plushie](/img/sa-og/cancel-wo/5.png)

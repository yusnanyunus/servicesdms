---
sidebar_position: 3
id: reception
title: Reception
tags: [reception, service advisor, SA, panggil antrian, reception queue, dashboard]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## **Find Vehicle/Customer**

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

### **Customer registered**

Masukkan nomor plat secara lengkap atau bisa juga dengan memasukkan nomor rangka atau nomor mesin, namun kali ini contoh nya memasukkan nomor plat kendaraan.

![Docusaurus Plushie](/img/general-repair/reception/4.png)

Setelah identitas customer muncul klik tombol ![Docusaurus Plushie](/img/general-repair/reception/choose.png), maka akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/reception/12.png)

untuk melanjutkan ke proses pembuatan **[Create Work Order](#create-work-order)**.


### **Customer non listed**
Dengan cara masukkan angka atau huruf secara acak, misalnya xyz,123 atau xy34, minimal 3 karakter.

![Docusaurus Plushie](/img/general-repair/reception/5.png)

Setelah hasil pencarian muncul klik tombol ![Docusaurus Plushie](/img/general-repair/reception/newdata.png) klik tombol tersebut, maka kita akan di arahkan untuk melanjutkan ke proses pembuatan data customer baru, seperti dibawah ini.

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

### **Customer by legacy**

Masukkan nomor rangka secara lengkap atau bisa juga dengan memasukkan nomor plat atau nomor mesin, namun kali ini contoh nya memasukkan nomor rangka kendaraan, 

lalu klik button ![Docusaurus Plushie](/img/general-repair/reception/getcustomer.png)

![Docusaurus Plushie](/img/general-repair/reception/21.png)

maka akan muncul tampilan seperti dibawah ini, klik button ![Docusaurus Plushie](/img/general-repair/reception/go.png)

![Docusaurus Plushie](/img/general-repair/reception/22.png)

setelah data kustomer muncul maka di lanjutkan untuk klik button ![Docusaurus Plushie](/img/general-repair/reception/choose.png)

![Docusaurus Plushie](/img/general-repair/reception/23.png)

---

## **Create Work Order**

> Pembuatan Work Order merupakan kelanjutan dari proses-proses sebelumnya. Work Order merupakan Detail View yang berbentuk Master-Detail Form yang terdiri atas Work Order data dan beberapa detail seperti pada gambar di atas, Berikut adalah elemen-elemen UI yang penting dalam Work Order Detail View baik itu General Repair maupun Body Painting:

<Tabs>
  <TabItem value="gr" label="General Repair" default>

![Docusaurus Plushie](/img/general-repair/create-wo/1.png)

![Docusaurus Plushie](/img/general-repair/create-wo/1x.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Date |Tanggal dibuat nya work order |
| Work Order Status | **None** : Status awal WO, **Booking** :WO Booking, **Waiting for reception** : Menunggu penerimaan SA, **Reception**	: Proses Penerimaan, **Waiting for job distribution** : Menunggu distribusi Job, **Waiting for technician**	: Menunggu teknisi, **Production** : Pengerjaan Job oleh teknisi, **Waiting for inspection** : Menunggu Inspeksi, **Inspection** : Inspeksi Job, **Waiting for document checking** : Menunggu pengecekan dokumen, **Document checking**	: Pengecekan dokumen, **Waiting for invoice** : Menunggu pembuatan invoice, **Invoice**	: Pembuatan invoice selesai, **Waiting for payment** : Menunggu pembayaran, **Delivered** : Kendaraan telah diserahkan, **Cancel** : dibatalkan, **Waiting Approval** : menunggu persetujuan atasan |
| Repair Type | **GR (General Repair)** = Jenis perbaikan |
| Mobile Service Type | Diisi khusus jika pelayanan servis mobile seperti TMC dan DMC |
| Express Maintenance | Pilih **Yes** jika Express maintenance, jika tidak pilih **No** |
| Last Mileage Record | Angka kilometer terisi jika unit pernah datang servis sebelumnya |
| Current Mileage record | Angka kilometer saat datang servis.  |
| Plan Service Date | Tanggal dan jam rencana servis selanjutnya |
| Customer Delivery Date Request | Tanggal dan jam penyerahan ke kustomer. |
| Customer Waiting | Pilih **Yes** jika customer menunggu, jika tidak pilih **No** |
| Washing	| Pilih **Yes** jika unit kendaraan ingin di cuci, jika tidak pilih **No** |
| SPK Reference | Masukkan **nomor SPK** Pembelian jika diperlukan (tidak Wajib) |
| Stall | Nama stall tempat unit di kerjakan |
| Remark | Catatan jika diperlukan (tidak wajib) |

  </TabItem>
  <TabItem value="bp" label="Body Painting">

![Docusaurus Plushie](/img/body-painting/create-wo/1.png)

![Docusaurus Plushie](/img/body-painting/create-wo/1.1.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Date |Tanggal dibuat nya work order |
| Work Order Status | **Waiting for reception** : Menunggu penerimaan SA, **Reception**	: Proses Penerimaan, **Waiting for job distribution** : Menunggu distribusi Job, **Waiting for technician**	: Menunggu teknisi, **Production** : Pengerjaan Job oleh teknisi, **Waiting for inspection** : Menunggu Inspeksi, **Inspection** : Inspeksi Job, **Waiting for document checking** : Menunggu pengecekan dokumen, **Document checking**	: Pengecekan dokumen, **Waiting for invoice** : Menunggu pembuatan invoice, **Invoice**	: Pembuatan invoice selesai, **Waiting for payment** : Menunggu pembayaran, **Delivered** : Kendaraan telah diserahkan, **Cancel** : dibatalkan, **Waiting Approval** : menunggu persetujuan atasan |
| Repair Type | **BP (Body Paint)** = Jenis perbaikan |
| Mobile Service Type | Diisi khusus jika pelayanan servis mobile seperti TMC dan DMC |
| Express Maintenance | Pilih **Yes** jika Express maintenance, jika tidak pilih **No** |
| Last Mileage Record | Angka kilometer terisi jika unit pernah datang servis sebelumnya |
| Current Mileage record | Angka kilometer saat datang servis.  |
| Plan Service Date | Tanggal dan jam rencana servis selanjutnya |
| Customer Delivery Date Request | Tanggal dan jam penyerahan ke kustomer. |
| Customer Waiting | Pilih **Yes** jika customer menunggu, jika tidak pilih **No** |
| Washing	| Pilih **Yes** jika unit kendaraan ingin di cuci, jika tidak pilih **No** |
| SPK Reference | Masukkan **nomor SPK** Pembelian jika diperlukan (tidak Wajib) |
| Stall | Nama stall tempat unit di kerjakan |
| Remark | Catatan jika diperlukan (tidak wajib) |
  
  </TabItem>
</Tabs>

Service Advisor dapat meng-input jenis pekerjaan/Job yang akan dilakukan pada tab **Job Order**, bergantung kepada tujuan kedatangan Customer. Selain itu, Service Advisor juga dapat memasukkan keluhan-keluhan yang dialami oleh Customer melalui tab **Customer Request**. Part-part yang dibutuhkan dalam proses service dapat di-input pada tab **Part Order** dan juga **WAC** proses pengecekan kondisi kustomer sebelum di lakukan perbaikan.
  
---

## **Create Estimation**


![Docusaurus Plushie](/img/general-repair/reception/15.png)

<Tabs>
  <TabItem value="gr" label="General Repair" default>

![Docusaurus Plushie](/img/general-repair/reception/13.png)

> Halaman ini digunakan untuk membuat form biaya estimasi servis, sebelum nomor Work Order terbit

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order Estimation No | Nomor yang ter generate otomatis oleh sistem. |
| Work Order Estimation Date | Tanggal dibuat nya work order |
| Repair Type | Jenis perbaikan |
| Mobile Service Type | Diisi khusus jika pelayanan servis mobile seperti TMC dan DMC |
| Last Mileage Record | Angka kilometer terisi jika unit pernah datang servis sebelumnya |
| Current Mileage record | Angka kilometer saat datang servis.  |
| Remark | Catatan jika diperlukan (tidak wajib) |

setelah itu klik button ![Docusaurus Plushie](/img/general-repair/reception/saveform.png)

maka akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/general-repair/reception/19.png)

pada inputan **Plan Service Date** masukkan tanggal rencana datang servis

setelah itu silahkan isi pada bagian tab **[Customer Request](#customer-request)**, **[Job Order](#job-order)**, **[Part Order](#part-order)** seperti biasa, dilanjutkan klik button ![Docusaurus Plushie](/img/general-repair/reception/calculation.png) untuk menghitung ulang estimasi secara sistem lalu pada bagian bawah tampilan klik button ![Docusaurus Plushie](/img/general-repair/reception/printestimation.png) maka akan muncul hasil cetak estimasi.

![Docusaurus Plushie](/img/general-repair/reception/20.png)
  
  </TabItem>
  <TabItem value="bp" label="Body Painting">

![Docusaurus Plushie](/img/general-repair/reception/24.png)

> Halaman ini digunakan untuk membuat form biaya estimasi servis, sebelum nomor Work Order terbit

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order Estimation No | Nomor yang ter generate otomatis oleh sistem. |
| Work Order Estimation Date | Tanggal dibuat nya work order |
| Repair Type | Jenis perbaikan |
| Mobile Service Type | Diisi khusus jika pelayanan servis mobile seperti TMC dan DMC |
| Own Risk | Jumlah biaya yang di tanggung oleh kustomer |
| Last Mileage Record | Angka kilometer terisi jika unit pernah datang servis sebelumnya |
| Current Mileage record | Angka kilometer saat datang servis.  |
| Remark | Catatan jika diperlukan (tidak wajib) |

setelah itu klik button ![Docusaurus Plushie](/img/general-repair/reception/saveform.png)

maka akan muncul tampilan seperti di bawah ini.

![Docusaurus Plushie](/img/general-repair/reception/25.png)

pada inputan **Plan Service Date** masukkan tanggal rencana datang servis

setelah itu silahkan isi pada bagian tab **[Customer Request](#customer-request)**, **[Job Order](#job-order)**, **[Part Order](#part-order)** seperti biasa, dilanjutkan klik button ![Docusaurus Plushie](/img/general-repair/reception/calculation.png) untuk menghitung ulang estimasi secara sistem lalu pada bagian bawah tampilan klik button ![Docusaurus Plushie](/img/general-repair/reception/printestimation.png) maka akan muncul hasil cetak estimasi.

![Docusaurus Plushie](/img/general-repair/reception/26.png)
  
  </TabItem>
</Tabs>

---
## **Create Diagnostic**

![Docusaurus Plushie](/img/general-repair/reception/16.png)

<Tabs>
  <TabItem value="gr" label="General Repair" default>

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
  
  </TabItem>
  <TabItem value="bp" label="Body Painting">

*Not Available*
  
  </TabItem>
</Tabs>

---

## **Create Purchase Part**

> Jika ada Customer yang datang kepada Service Advisor hanya untuk membeli part saja tanpa melakukan servis pada unit kendaraanya, petugas Service Advisor dapat membuat Work Order Purchase Part yang difungsikan untuk pembelian part tanpa adanya Job pada Work Order tersebut.

<Tabs>
  <TabItem value="gr" label="General Repair" default>

![Docusaurus Plushie](/img/purchase-part/create-wo/1.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Date |Tanggal dibuat nya work order |
| Work Order Status | **None** : Status awal WO, **Waiting for reception** : Menunggu penerimaan SA, **Reception**	: Proses Penerimaan, **Waiting for document checking** : Menunggu pengecekan dokumen, **Document checking**	: Pengecekan dokumen, **Waiting for invoice** : Menunggu pembuatan invoice, **Invoice**	: Pembuatan invoice selesai, **Waiting for payment** : Menunggu pembayaran, **Cancel** : dibatalkan, **Waiting Approval** : menunggu persetujuan atasan |
| Repair Type | Jenis perbaikan *(terisi otomatis)* |
| Remark | Catatan jika diperlukan (tidak wajib) |

maka dilanjutkan untuk melakukan input part **[Part Order](#part-order)**
  
  </TabItem>
  <TabItem value="bp" label="Body Painting">

*Not Available*
  
  </TabItem>
</Tabs>

---

## **Walk Arround Check (WAC)**

<Tabs>
  <TabItem value="gr" label="General Repair" default>

> Proses Walk Around Check (WAC) merupakan proses pengecekan kondisi kendaraan kustomer sebelum perbaikan dilakukan. Untuk memulai proses WAC, Service Advisor dapat memilih tab WAC lalu klik tombol ![Docusaurus Plushie](/img/general-repair/wac/settingwac.png) seperti pada gambar di bawah ini:

![Docusaurus Plushie](/img/general-repair/wac/1.png)

Lalu Service Advisor akan di arahkan untuk melakukan checklist pada form WAC mengambil gambar unit kendaraan sebelum dilakukan perbaikan dan juga memberikan catatan jika dibutuhkan.

![Docusaurus Plushie](/img/general-repair/wac/2.png)

Setelah semua selesai klik tombol ![Docusaurus Plushie](/img/general-repair/wac/save.png), maka proses pengisian form WAC selesai.

![Docusaurus Plushie](/img/general-repair/wac/3.png)
  
  </TabItem>
  <TabItem value="bp" label="Body Painting">

*Not Available*
  
  </TabItem>
</Tabs>

---
## **Customer Request**

![Docusaurus Plushie](/img/general-repair/create-wo/2.png)

![Docusaurus Plushie](/img/general-repair/create-wo/3.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addcustomerreq.png).
2. Deskripsikan keluhan atau permintaan kustomer
3. Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)


---
## **Job Order**

<Tabs>
  <TabItem value="gr" label="General Repair" default>

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

1.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addjoborder.png).

2.Lengkapi inputan yang mandatori*

3.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)

  </TabItem>
  <TabItem value="bp" label="Body Painting">

*Not Available*
  
  </TabItem>
</Tabs>

---
## **Part Order**

<Tabs>
  <TabItem value="gr" label="General Repair" default>

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

1.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/addpart.png).

2.Lengkapi inputan yang mandatori*

3.Klik tombol ![Docusaurus Plushie](/img/general-repair/create-wo/save.png)

  
  </TabItem>
  <TabItem value="bp" label="Body Painting">

*Not Available*
  
  </TabItem>
  <TabItem value="prt" label="Purchase Part">

*Not Available*
  
  </TabItem>
</Tabs>

---

## **Print Work Order**

<Tabs>
  <TabItem value="gr" label="General Repair" default>

> Service Advisor dapat mencetak Work Order dengan cara menekan tombol ![Docusaurus Plushie](/img/body-painting/print-wo/printwo.png)pada bagian bawah tampilan seperti pada gambar dibawah ini.

![Docusaurus Plushie](/img/general-repair/print-wo/1.png)

![Docusaurus Plushie](/img/general-repair/print-wo/2.png)
  
  </TabItem>
  <TabItem value="bp" label="Body Painting">

> Service Advisor dapat mencetak Work Order dengan cara menekan tombol ![Docusaurus Plushie](/img/body-painting/print-wo/printwo.png)pada bagian bawah tampilan seperti pada gambar dibawah ini.

![Docusaurus Plushie](/img/body-painting/print-wo/1.png)

![Docusaurus Plushie](/img/body-painting/print-wo/2.png)
  
  </TabItem>
</Tabs>

---

## **Add Program/Insurance**

> Berikut ini adalah cara menambahkan program atau insurance baik itu di job maupun part.

![Docusaurus Plushie](/img/general-repair/doc-checking/8.png)

*Keterangan :*

1. **Pilih Insurance** : Masukkan nama insurer nya.
2. **Pilih Program** : Masukkan nama pihak ke-3 penyedia program.

Pilih salah satu penyedia potongan harga, lalu klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/save.png) pada bagian kanan bawah form.

---

## **Request Discount**

:::info

proses ini membutuhkan approval :

- Diskon 1 - 15 % : Kepala Bengkel
- Diskon 16 - 25 % : Kepala Bengkel -> Kepala Cabang
- Diskon 26 - 100 % : Kepala Bengkel -> Kepala Cabang -> Aftersales Operation Manager (Head Office) -> Aftersales General Manager (Head Office)

:::

> Berikut adalah cara memasukkan diskon baik itu di job maupun part

![Docusaurus Plushie](/img/general-repair/doc-checking/10.png)

setelah di pilih diskon nya, klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/save.png)

lalu akan muncul alert **Success**

![Docusaurus Plushie](/img/general-repair/doc-checking/success.png)

pada bagian bawah kanan list view klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/reqdiskon.png)

lalu akan muncul tampilan form kecil seperti di bawah ini.

![Docusaurus Plushie](/img/general-repair/doc-checking/11.png)

deskripsikan alasan nya permintaan diskon tersebut, setelah itu klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/process.png)

maka proses pengajuan selesai tinggal menunggu approval dari atasan.

---

## **Cancel Work Order**

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

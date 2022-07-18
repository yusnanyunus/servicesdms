---
sidebar_position: 12
id: invoicing
title: Invoicing
tags : [Invoicing, service invoice, program invoice, insurance invoice, billing, admin service, credit note, CN]
---

### Invoicing

> Setelah pengecekan data dokumen pada Work Order telah selesai dilakukan oleh Service Advisor, Work Order tersebut dapat diproses untuk dilanjutkan ke proses Invoicing oleh petugas Billing. 

![Docusaurus Plushie](/img/general-repair/invoicing/1.png)

Berikut ini adalah Invoice yang dapat di-generate oleh petugas Billing, yaitu:

- **Service Invoice**, untuk ditagihkan kepada Customer.
- **Program Invoice**,  untuk ditagihkan kepada pihak ke-3 yang menyediakan program, baik program jasa maupun program part.
- **Insurance Invoice**, untuk ditagihkan kepada Insurer yang menyediakan klaim asuransi pada Jasa maupun Part.
- **Credit Note**, untuk membatalkan Invoice yang sudah di-generate di sistem.

---

### Calculation Invoice

> Sebelum melakukan proses **Generate Invoice** maka terlebih dahulu, billing harus melakukan perhitungan ulang secara sistem sebelum di terbitkan invoice, dengan cara klik menu **Billing - Invoicing**

lalu akan muncul tampilan seperti dibawah ini

![Docusaurus Plushie](/img/general-repair/invoicing/9.png)

pada bagian kiri list view klik button ![Docusaurus Plushie](/img/general-repair/invoicing/tigatitik.png) maka akan muncul form invoice

![Docusaurus Plushie](/img/general-repair/invoicing/10.png)

dibagian kiri bawah klik button ![Docusaurus Plushie](/img/general-repair/invoicing/calculation.png)

maka akan muncul alert **Calculation Success** yang menandakan proses kalkulasi nilai Work Order berhasil

![Docusaurus Plushie](/img/general-repair/invoicing/calsuccess.png)


---

### Generate Service Invoice

Untuk memulai proses Invoicing, klik ![Docusaurus Plushie](/img/general-repair/invoicing/tigatitik.png) lalu akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/invoicing/2.png)

Setelah Billing menekan tombol ![Docusaurus Plushie](/img/general-repair/invoicing/serviceinvoice.png), maka proses service invoice telah selesai jika Work Order tersebut tidak mempunyai **Program** atau **Insurance**. 

Setelah Work Order telah selesai di proses dan menjadi invoice, maka Work Order tersebut akan muncul di menu **Service Invoice**, seperti gambar di bawah ini.

![Docusaurus Plushie](/img/general-repair/invoicing/4.png)

Billing juga dapat mencetak Service Invoice dengan cara klik ![Docusaurus Plushie](/img/general-repair/invoicing/tigatitik.png) lalu ![Docusaurus Plushie](/img/general-repair/invoicing/printinvoice.png) maka tampilan nya seperti berikut.

![Docusaurus Plushie](/img/general-repair/invoicing/5.png)

---

### Generate Program Invoice

jika Work Order yang mempunyai **Program** maka otomatis tombol ![Docusaurus Plushie](/img/general-repair/invoicing/serviceinvoice.png) berubah menjadi tombol ![Docusaurus Plushie](/img/general-repair/invoicing/programinvoice.png) seperti gambar dibawah ini.

![Docusaurus Plushie](/img/general-repair/invoicing/3.png)

silahkan klik button ![Docusaurus Plushie](/img/general-repair/invoicing/programinvoice.png) untuk melakukan generate invoice

masuk ke menu **Program Invoice** lalu klik ![Docusaurus Plushie](/img/general-repair/invoicing/tigatitik.png) lalu ![Docusaurus Plushie](/img/general-repair/invoicing/printinvoice.png)

![Docusaurus Plushie](/img/general-repair/invoicing/8.png)

---

### Generate Insurance Invoice


---

### Back To Document Checking

> Di status **Waiting For Invoice** billing dapat mengembalikan Work Order ke status Document Checking, jika masih ada ingin di tambahkan oleh Service Advisor, dengan cara pada halaman form invoice klik button ![Docusaurus Plushie](/img/general-repair/invoicing/backtodoc.png) pada bagian kiri bawah.

![Docusaurus Plushie](/img/general-repair/invoicing/6.png)

lalu akan muncul tampilan form kecil seperti di bawah ini.

![Docusaurus Plushie](/img/general-repair/invoicing/7.png)

deskripsikan alasan nya kenapa Work Order tersebut harus kembali ke status document checking, setelah itu klik button ![Docusaurus Plushie](/img/general-repair/invoicing/backtodoc2.png)

maka Work Order tersebut kembali ke status **Document Checking**

---

### Credit Note

---


### **Request Discount**

:::info

proses ini membutuhkan approval :

- Diskon 1 - 15 % : Kepala Bengkel
- Diskon 16 - 25 % : Kepala Bengkel -> Kepala Cabang
- Diskon 26 - 100 % : Kepala Bengkel -> Kepala Cabang -> MO (Head Office) -> GM (Head Office)

:::

> Tidak hanya Service Advisor, tetapi **Seorang Billing juga dapat mengajukan diskon di proses waiting for invoice** Berikut adalah cara memasukkan diskon baik itu di job maupun part

![Docusaurus Plushie](/img/general-repair/invoicing/11.png)

Untuk memulai proses penambahan diskon, klik ![Docusaurus Plushie](/img/general-repair/doc-checking/tigatitik.png) lalu akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/invoicing/12.png)

pilih tab *Job Order* atau *Part Order* yang mau di masukkan diskon setelah itu, klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/tigatitik.png), maka akan muncul form job seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/doc-checking/10.png)

setelah di pilih diskon nya, klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/save.png)

lalu akan muncul alert **Success**

![Docusaurus Plushie](/img/general-repair/doc-checking/success.png)

pada bagian bawah kanan list view klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/reqdiskon.png)

lalu akan muncul tampilan form kecil seperti di bawah ini.

![Docusaurus Plushie](/img/general-repair/doc-checking/11.png)

deskripsikan alasan nya permintaan diskon tersebut, setelah itu klik button ![Docusaurus Plushie](/img/general-repair/doc-checking/process.png)

maka proses pengajuan selesai tinggal menunggu approval dari atasan.
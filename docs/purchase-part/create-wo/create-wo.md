---
sidebar_position: 1
id: create-wo
title: Create Work Order
tags: [work order, service advisor, SA, estimation, purchase part, part order]
---

### Create Work Order

![Docusaurus Plushie](/img/purchase-part/create-wo/1.png)

> Jika ada Customer yang datang kepada Service Advisor hanya untuk membeli part saja tanpa melakukan servis pada unit kendaraanya, petugas Service Advisor dapat membuat Work Order Purchase Part yang difungsikan untuk pembelian part tanpa adanya Job pada Work Order tersebut.

| Nama Kolom | Deskripsi |
|--------|--------|
| Work Order No |Nomor yang ter generate otomatis oleh sistem. |
| Work Order Date |Tanggal dibuat nya work order |
| Work Order Status | **None** : Status awal WO, **Waiting for reception** : Menunggu penerimaan SA, **Reception**	: Proses Penerimaan, **Inspection** : Inspeksi Job, **Waiting for document checking** : Menunggu pengecekan dokumen, **Document checking**	: Pengecekan dokumen, **Waiting for invoice** : Menunggu pembuatan invoice, **Invoice**	: Pembuatan invoice selesai, **Waiting for payment** : Menunggu pembayaran, **Cancel** : dibatalkan, **Waiting Approval** : menunggu persetujuan atasan |
| Repair Type | Jenis perbaikan *(terisi otomatis)* |
| Remark | Catatan jika diperlukan (tidak wajib) |

---
### Part Order

![Docusaurus Plushie](/img/purchase-part/create-wo/6.png)

| Nama Kolom | Deskripsi |
|--------|--------|
| Part No | Nomor part yang akan digunakan |
| Part Name | Nama part yang akan digunakan |
| Quantity | Jumlah part yang digunakan |
| Part Status | **None** : Status awal Part, **Reserved** : Part telah dipesan oleh SA kepada Part Man, **Picked** : Part sudah diserahkan Part Man kepada Teknisi, **Unavailable** : Part tidak tersedia, **Cancelled** : Pemesanan Part dibatalkan |
| Stock | Menampilkan jumlah stok part yang ada di gudang utama |
| Discount | Diskon yang diberikan kepada kustomer |
| Program | Program untuk part |
| Insurance | Nama asuransi yang menanggung tagihan part |
| Subtotal On Customer | Nilai tagihan yang ditanggung langsung oleh kustomer |
| Sub Total | Nilai dari Job sebelum pajak, diskon, tanggungan asuransi dan program |
| Discount Amount | Nilai diskon yang diberikan |

![Docusaurus Plushie](/img/purchase-part/create-wo/7.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/purchase-part/create-wo/addpart.png).
2. Lengkapi inputan yang mandatori *
3. Klik tombol ![Docusaurus Plushie](/img/purchase-part/create-wo/save.png)
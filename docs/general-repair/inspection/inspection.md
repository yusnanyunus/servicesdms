---
sidebar_position: 10
id: inspection
title: Inspection
tags: [foreman,ptm]
---

### Inspection

> Menu inspection berfungsi untuk memfasilitasi Foreman atau PTM dalam melakukan inspeksi setelah unit kendaraan di handling oleh teknisi. Pada gambar dibawah ini adalah list Work Order dengan status Waiting for Inspection dan status Inspection yang dapat diakses melalui menu Controller -> Inspection.

![Docusaurus Plushie](/img/general-repair/inspection/1.png)

Untuk memulai proses Inspection, klik ![Docusaurus Plushie](/img/general-repair/inspection/tigatitik.png) lalu akan muncul tampilan seperti dibaw2h ini.

![Docusaurus Plushie](/img/general-repair/inspection/2.png)

Kemudian klik ![Docusaurus Plushie](/img/general-repair/inspection/on.png), maka Foreman atau PTM akan melanjutkan proses Inspection pada unit kendaraan yang telah selesai proses produksi.

:::tip Note

Sebelum melanjutkan proses Inspection biasa nya PTM belum bisa melanjutkan ke proses selanjutnya, jika di awal pembuatan Work Order pilihan Washing di pilih **YES** dan akan muncul peringatan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/inspection/3.png)

maka dari itu untuk melanjutkan proses update Washing dapat di akses melalui menu Washing -> Car Washing, maka akan muncul tampilan seperti dibawah ini.

![Docusaurus Plushie](/img/general-repair/inspection/4.png)

Keterangan :
1. Klik tombol ![Docusaurus Plushie](/img/general-repair/inspection/tigatitik.png).
2. klik tombol ![Docusaurus Plushie](/img/general-repair/inspection/on.png) lalu klik ![Docusaurus Plushie](/img/general-repair/inspection/yes.png) untuk memulai pencucian.
3. Setelah pencucian mobil selesai, klik ![Docusaurus Plushie](/img/general-repair/inspection/off.png) lalu klik ![Docusaurus Plushie](/img/general-repair/inspection/yes.png) maka pencucian selesai.

:::

Jika ada cacat pada unit kendaraan karena ada kesalahan pada saat Produksi, Foreman atau PTM dapat mengembalikan status Work Order ke Production untuk dilakukan pengerjaan job kembali/perbaikan pada unit kendaraan dengan cara klik ![Docusaurus Plushie](/img/general-repair/inspection/redo.png)

![Docusaurus Plushie](/img/general-repair/inspection/5.png)

maka Work Order akan kembali ke status Production lalu job akan Kembali ke On Proggress Jika proses Inspection pada unit kendaraan telah selesai,  klik ![Docusaurus Plushie](/img/general-repair/inspection/off.png) untuk melanjutkan Work Order ke proses Document Checking.
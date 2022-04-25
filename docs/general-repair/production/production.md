---
sidebar_position: 8
id: production
title: Production
tags: [technician, teknisi]
---

### Production

> Ketika Work Order ada dalam status Waiting For Technician, aplikasi Technician sudah dapat digunakan. Teknisi yang diberikan tugas untuk mengerjakan Job dapat melakukan scan ID karyawan nya pada aplikasi ini dan melihat daftar Job yang diberikan oleh Service Advisor (SA) pada Teknisi bersangkutan. Dengan memilih Job yang akan dikerjakan, Teknisi dapat melakukan Clock On untuk memulai pekerjaan di lapangan. Setelah proses Clock On, Job terpilih berubah status menjadi On Progress dan WO akan berubah status menjadi Production, dan pada kondisi ini Teknisi sudah dapat melakukan Picking untuk Part yang dibutuhkan di loket Partman/Partlady.

![Docusaurus Plushie](/img/general-repair/production/1.png)

![Docusaurus Plushie](/img/general-repair/production/2.png)

Setelah pengerjaan Job selesai, Teknisi dapat melakukan Kembali scan ID karyawan, untuk melakukan Clock Off dengan memilih Job yang tersedia. Proses Clock On dan Clock Off ini harus dilakukan pada semua Job yang ada hingga semua Job selesai dikerjakan. Jika Job karena alasan tertentu harus dihentikan sementara, Teknisi dapat menekan tombol Pause yang akan merubah status Job menjadi Paused dan dapat melanjutkan kembali dengan menekan tombol Continue. Tombol-tombol yang tersedia akan aktif-non aktif sesuai dengan status Job terpilih. Tombol Clear digunakan untuk me-reset tampilan aplikasi, dan Teknisi lain dapat melakukan proses pada aplikasi dengan cara yang sama.

| Nama Action | Deskripsi |
|--------|--------|
| ![Docusaurus Plushie](/img/general-repair/production/on.png) | Mulai Pengerjaan |
| ![Docusaurus Plushie](/img/general-repair/production/off.png) | Selesai Pengerjaan |
| ![Docusaurus Plushie](/img/general-repair/production/pause.png) | Menghentikan sementara pengerjaan |
| ![Docusaurus Plushie](/img/general-repair/production/continue.png) | Melanjutkan pengerjan setelah menekan tombol pause |
| ![Docusaurus Plushie](/img/general-repair/production/clear.png) | Menghilangkan list job |
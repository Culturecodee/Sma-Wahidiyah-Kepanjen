import { Helmet } from "react-helmet-async";
import Ppdb from "../section/Ppdb/Ppdb";

export default function Ppdbs() {
  return (
    <>
    <Helmet>
        {/* Title yang muncul di tab browser & hasil pencarian Google */}
        <title>PPDB 2026/2027 | SMA Wahidiyah Kepanjen - Pendaftaran Online</title>
        
        {/* Deskripsi singkat di bawah judul Google */}
        <meta name="description" content="Pendaftaran Peserta Didik Baru (PPDB) SMA Wahidiyah Kepanjen Tahun Ajaran 2026/2027. Segera daftar secara online dan wujudkan generasi cerdas berakhlak." />
        
        {/* Keyword utama agar mudah ditemukan */}
        <meta name="keywords" content="PPDB SMA Wahidiyah Kepanjen, SMA Wahidiyah Malang, sekolah menengah atas Kepanjen, pendaftaran sekolah Kepanjen, sekolah islam Kepanjen" />
        
        {/* Open Graph untuk tampilan saat link dibagikan di WhatsApp/Facebook */}
        <meta property="og:title" content="PPDB SMA Wahidiyah Kepanjen 2026/2027" />
        <meta property="og:description" content="Mulai pendaftaran siswa baru secara online di sini." />
        <meta property="og:image" content="/gedung.jpg" />
        <meta property="og:url" content="https://smawahidiyahkpj.sch.id/ppdb" />
      </Helmet>
    <Ppdb/>
    </>
  )
}
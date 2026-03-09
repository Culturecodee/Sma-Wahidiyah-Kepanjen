import Hero from "../section/Home/Hero";
import Progams from '../section/Home/Progam'
import Stats from '../section/Home/Stats'
import VisiMisi from '../section/Home/VisiMisi'
import Gallery from '../section/Home/Gallery'
import Testimoni from "../section/Home/Testimoni";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
    <Helmet>
        {/* Title: Gunakan kombinasi Nama Sekolah + Keunggulan + Lokasi */}
        <title>SMA Wahidiyah Kepanjen | Mewujudkan Generasi Cerdas Berakhlak</title>
        
        {/* Description: Harus mengandung keyword utama dalam kalimat yang persuasif */}
        <meta name="description" content="Selamat datang di SMA Wahidiyah Kepanjen. Sekolah menengah atas unggulan di Malang yang memadukan kurikulum nasional dengan kedalaman spiritual Wahidiyah untuk mencetak lulusan kompeten dan beradab." />
        
        {/* Keywords: Targetkan pencarian lokal Kepanjen dan Malang */}
        <meta name="keywords" content="SMA Wahidiyah Kepanjen, SMA Wahidiyah Malang, sekolah terbaik di Kepanjen, SMA Islam Malang, pondok pesantren Kepanjen, pendaftaran SMA Kepanjen 2026, pendidikan berkarakter Malang" />
        
        {/* Open Graph (OG) Tags: Untuk tampilan preview saat link web dikirim di WA/Medsos */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SMA Wahidiyah Kepanjen - Cerdas Berakhlak" />
        <meta property="og:description" content="Pendidikan unggul berbasis IPTEK dan IMTAK di Kepanjen, Malang. Daftar sekarang untuk Tahun Ajaran 2026/2027." />
        <meta property="og:image" content="/gedung.jpg" /> {/* Pastikan path gambar benar */}
        <meta property="og:url" content="https://smawahidiyahkpj.sch.id/" />

        {/* Twitter Card: Agar tampilan di Twitter/X juga rapi */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SMA Wahidiyah Kepanjen" />
        <meta name="twitter:image" content="/gedung.jpg" />
      </Helmet>
      <Hero/>
      <Progams/>
      <Stats/>
      <VisiMisi/>
      <Gallery/>
      <Testimoni/>
      
    </>
  )
}
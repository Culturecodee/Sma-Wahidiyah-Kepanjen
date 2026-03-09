import { Helmet } from 'react-helmet-async'
import Akademik from '../section/Akademik/Akademik'

export default function Akademiks() {
  return (
    <>
    <Helmet>
        {/* Title: Menonjolkan Kurikulum dan Program Unggulan */}
        <title>Kurikulum & Program Akademik | SMA Wahidiyah Kepanjen</title>
        
        {/* Description: Penjelasan singkat tentang keunggulan akademik */}
        <meta name="description" content="Eksplorasi kurikulum inovatif di SMA Wahidiyah Kepanjen. Mulai dari Kelas Tahfidz, Digital Science, hingga berbagai ekstrakurikuler untuk bakat dan minat siswa." />
        
        {/* Keywords: Fokus pada program spesifik sekolah */}
        <meta name="keywords" content="Kurikulum SMA Wahidiyah, Kelas Tahfidz Kepanjen, Kelas Digital Malang, Ekstrakurikuler SMA Wahidiyah, Pendidikan Karakter Kepanjen, Sekolah Tahfidz Malang" />
        
        {/* Open Graph Tags: Agar menarik saat dibagikan ke wali murid */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Program Akademik Unggulan SMA Wahidiyah Kepanjen" />
        <meta property="og:description" content="Membentuk kompetensi berbasis karakter dengan perpaduan sains dan spiritualitas." />
        <meta property="og:image" content="/gedung.jpg" /> 
        <meta property="og:url" content="https://smawahidiyahkpj.sch.id/akademik" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Akademik SMA Wahidiyah Kepanjen" />
        <meta name="twitter:description" content="Cek program unggulan kami: Tahfidz, Digital, dan Sains." />
      </Helmet>
      <Akademik/>
    </>
  )
}
import { Helmet } from 'react-helmet-async'
import Profil from '../section/Profile/Profil'

export default function Profile() {
  return (
    <>
      <Helmet>
        {/* Title: Fokus pada identitas resmi sekolah */}
        <title>Profil Sekolah | SMA Wahidiyah Kepanjen - Cerdas Berakhlak</title>
        
        {/* Description: Penjelasan tentang identitas dan komitmen sekolah */}
        <meta name="description" content="Kenali lebih dekat SMA Wahidiyah Kepanjen. Temukan informasi mengenai sejarah, visi dan misi, serta komitmen kami dalam mengintegrasikan keunggulan akademik dengan kedalaman spiritual Wahidiyah." />
        
        {/* Keywords: Targetkan pencarian profil lembaga dan lokasi */}
        <meta name="keywords" content="Profil SMA Wahidiyah Kepanjen, Sejarah SMA Wahidiyah Malang, Visi Misi SMA Wahidiyah, identitas sekolah islam Kepanjen, pendidikan menengah Kepanjen" />
        
        {/* Open Graph Tags: Branding saat dibagikan ke WhatsApp atau Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Profil Lengkap SMA Wahidiyah Kepanjen" />
        <meta property="og:description" content="Mengenal visi, misi, dan sejarah SMA Wahidiyah dalam membentuk generasi emas di Kepanjen." />
        <meta property="og:image" content="/gedung.jpg" /> 
        <meta property="og:url" content="https://smawahidiyahkpj.sch.id/profil" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Profil SMA Wahidiyah Kepanjen" />
        <meta name="twitter:image" content="/gedung.jpg" />
      </Helmet>
      <Profil/>
    </> 
  )
}
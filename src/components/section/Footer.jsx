import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <footer className="bg-primary-900 dark:bg-[#011a14] text-white pt-20 pb-10 transition-colors duration-500">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Kolom 1: Branding */}
        <div className="col-span-1 md:col-span-1">
          <Reveal direction="left">
            <h2 className="text-2xl font-serif font-bold mb-6">SMA WAHIDIYAH <br/> <span className="text-accent">KEPANJEN</span></h2>
            <p className="text-primary-100/70 text-sm leading-relaxed mb-6">
              Membentuk generasi cerdas berakhlak melalui perpaduan sains modern dan nilai-nilai religius Wahidiyah.
            </p>
          </Reveal>
        </div>

        {/* Kolom 2: Navigasi Cepat */}
        <div>
          <Reveal direction="up" delay={0.2}>
            <h3 className="font-bold text-lg mb-6 text-accent">Navigasi</h3>
            <ul className="space-y-4 text-sm text-primary-100/70">
              <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/profil" className="hover:text-white transition-colors">Profil Sekolah</Link></li>
              <li><Link to="/akademik" className="hover:text-white transition-colors">Program Akademik</Link></li>
              <li><Link to="/ppdb" className="hover:text-white transition-colors">PPDB 2026</Link></li>
            </ul>
          </Reveal>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <Reveal direction="up" delay={0.4}>
            <h3 className="font-bold text-lg mb-6 text-accent">Kontak Kami</h3>
            <ul className="space-y-4 text-sm text-primary-100/70 font-sans">
              <li className="flex items-center gap-3">📍 Kepanjen, Malang, Jawa Timur</li>
              <li className="flex items-center gap-3">📞 (0341) 123-4567</li>
              <li className="flex items-center gap-3">📧 info@smawahidiyahkpj.sch.id</li>
            </ul>
          </Reveal>
        </div>

        {/* Kolom 4: Media Sosial */}
        <div>
          <Reveal direction="up" delay={0.6}>
            <h3 className="font-bold text-lg mb-6 text-accent">Ikuti Kami</h3>
            <div className="flex gap-4">
              {/* Tambahkan ikon sosmed di sini */}
              <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent transition-all cursor-pointer">IG</div>
              <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent transition-all cursor-pointer">FB</div>
              <div className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent transition-all cursor-pointer">YT</div>
            </div>
          </Reveal>
        </div>

      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-primary-800 text-center text-xs text-primary-100/30">
        <p>© 2026 SMA Wahidiyah Kepanjen. All Rights Reserved. Created with ❤️ by Fal.</p>
      </div>
    </footer>
  );
};

export default Footer;
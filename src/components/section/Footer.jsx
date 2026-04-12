import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { Instagram, Youtube, MapPin, Phone, Mail} from "lucide-react";

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
              <li className="flex items-center gap-3"><MapPin /> Kepanjen, Malang, Jawa Timur</li>
              <li className="flex items-center gap-3"><Phone /> (0341) 123-4567</li>
              <li className="flex items-center gap-3"><Mail /> info@smawahidiyahkpj.sch.id</li>
            </ul>
          </Reveal>
        </div>

        {/* Kolom 4: Media Sosial */}
        <div>
          <Reveal direction="up" delay={0.6}>
            <h3 className="font-bold text-lg mb-6 text-accent">Ikuti Kami</h3>
            <div className="">
              {/* Tambahkan ikon sosmed di sini */}
              <ul className="flex gap-4">
                <li className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent transition-all cursor-pointer"><Instagram /></li>
                <li className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent transition-all cursor-pointer"><Youtube /></li>
                <li className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent transition-all cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/></svg></li>
              </ul>
            </div>
          </Reveal>
        </div>

      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-primary-800 text-center text-xs text-primary">
        <p>© 2026 SMA Wahidiyah Kepanjen. All Rights Reserved. Created By <b>CULTURE CODE</b></p>
      </div>
    </footer>
  );
};

export default Footer;
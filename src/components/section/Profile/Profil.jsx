import { motion } from "framer-motion";
import Reveal from "../Reveal";

const Profil = () => {
  return (
    <>
    
    <section className="pt-24 min-h-screen bg-white dark:bg-primary-950 transition-colors duration-500">
      
      {/* SECTION 1: HEADER & IDENTITAS */}
      
        {/* Dekorasi Latar Belakang */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-700 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Teks Profil */}
            <div>
              <Reveal direction="left">
                <span className="text-primary-700 dark:text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                  Tentang Lembaga
                </span>
              </Reveal>
              
              <Reveal direction="left" delay={0.4}>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary-900 dark:text-white leading-tight mb-6">
                  Profil <br />
                  <span className="text-primary-700 italic">SMA Wahidiyah</span> <br />
                  Kepanjen
                </h1>
              </Reveal>

              <Reveal direction="left" delay={0.6}>
                <p className="text-lg text-slate-600 dark:text-primary-100/70 leading-relaxed mb-8">
                  SMA Wahidiyah Kepanjen hadir sebagai institusi pendidikan yang berdedikasi untuk mencetak generasi unggul. Kami percaya bahwa perpaduan antara kurikulum nasional yang kuat dan bimbingan spiritual Wahidiyah adalah kunci kesuksesan santri di masa depan.
                </p>
              </Reveal>
            </div>

            {/* Gambar Sekolah dengan Frame Elegan */}
            <div className="relative">
              <Reveal direction="right" delay={0.5} overflow="visible">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-primary-900">
                  <img 
                    src="https://images.unsplash.com/photo-1523050853064-59f602c3d3a6?auto=format&fit=crop&q=80" 
                    alt="Gedung SMA Wahidiyah Kepanjen" 
                    className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Aksen Kotak di Belakang Gambar */}
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-100 dark:bg-primary-800 -z-10 rounded-[3rem]" />
              </Reveal>
            </div>

          </div>
        </div>
        </section>
      

      {/* SECTION 2: IDENTITAS DETAIL (Opsional tapi Bagus untuk SEO) */}
      <section className="py-16 bg-primary-50 dark:bg-primary-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0.2} width="100%">
              <div className="bg-white dark:bg-primary-900 p-8 rounded-3xl shadow-sm border border-primary-100 dark:border-primary-800">
                <h3 className="text-primary-700 dark:text-accent font-bold mb-2">NPSN</h3>
                <p className="text-2xl font-serif font-bold text-primary-900 dark:text-white">2040XXXX</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.4} width="100%">
              <div className="bg-white dark:bg-primary-900 p-8 rounded-3xl shadow-sm border border-primary-100 dark:border-primary-800">
                <h3 className="text-primary-700 dark:text-accent font-bold mb-2">Akreditasi</h3>
                <p className="text-2xl font-serif font-bold text-primary-900 dark:text-white">B (Baik)</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.6} width="100%">
              <div className="bg-white dark:bg-primary-900 p-8 rounded-3xl shadow-sm border border-primary-100 dark:border-primary-800">
                <h3 className="text-primary-700 dark:text-accent font-bold mb-2">Kurikulum</h3>
                <p className="text-2xl font-serif font-bold text-primary-900 dark:text-white">Merdeka</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profil;
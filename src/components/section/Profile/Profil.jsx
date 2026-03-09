import Reveal from "../Reveal";

const Profil = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 min-h-screen bg-white dark:bg-primary-950 transition-colors duration-500 overflow-hidden">
        
        {/* Dekorasi Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-700 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Layar Besar (md:): Kolom teks 5 bagian, Kolom gambar 7 bagian (7 lebih besar dari 5)
              Items-stretch: Memastikan tinggi kontainer kanan dan kiri sama
          */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* KOLOM KIRI: Teks (5 Bagian) */}
            <div className="md:col-span-5 order-1 md:order-1">
              <Reveal direction="left">
                <span className="text-primary-700 dark:text-accent font-extrabold tracking-[0.2em] uppercase text-xs mb-6 block">
                  Tentang Lembaga
                </span>
              </Reveal>
              
              <Reveal direction="left" delay={0.4}>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-900 dark:text-white leading-[1.1] mb-8">
                  Profil <br />
                  <span className="text-primary-700 italic">SMA Wahidiyah</span> <br />
                  Kepanjen
                </h1>
              </Reveal>

              <Reveal direction="left" delay={0.6}>
                <p className="text-lg text-slate-600 dark:text-primary-100/70 leading-relaxed font-sans border-l-4 border-primary-700/20 pl-6">
                  SMA Wahidiyah Kepanjen hadir sebagai institusi pendidikan yang berdedikasi untuk mencetak generasi unggul. Kami percaya bahwa perpaduan antara kurikulum nasional yang kuat dan bimbingan spiritual Wahidiyah adalah kunci kesuksesan santri di masa depan.
                </p>
              </Reveal>
            </div>

            {/* KOLOM KANAN: Gambar Besar & Fix (7 Bagian) */}
            <div className="w-full md:col-span-7 order-2 md:order-2">
              <Reveal direction="right" delay={0.5} overflow="visible" width="100%">
                <div className="relative group">
                  {/* Bingkai Utama Gambar */}
                  <div className="w-full relative z-10 rounded-3xl overflow-hidden border-8 md:border-[16px] border-white dark:border-primary-900 aspect-video md:aspect-square lg:aspect-video">
                    <img 
                      src="/gedung.jpg" 
                      alt="Gedung SMA Wahidiyah Kepanjen" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      // Fix: Jika gambar gagal load, gunakan placeholder agar tidak pecah/kosong
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200"; }}
                    />
                  </div>

                  {/* Dekorasi Aksen Kotak Belakang agar terlihat "Seni" */}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: IDENTITAS DETAIL */}
      <section className="py-20 bg-primary-50 dark:bg-primary-900/30">
        <div className="container mx-auto px-6 text-center mb-12">
            <Reveal direction="up">
                <h2 className="text-primary-900 dark:text-white font-serif font-bold text-3xl">Informasi Pokok</h2>
            </Reveal>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0.2} width="100%">
              <div className="bg-white dark:bg-primary-900 p-10 rounded-[2rem] shadow-sm border border-primary-100 dark:border-primary-800 group hover:bg-primary-700 transition-all duration-500">
                <h3 className="text-primary-700 dark:text-accent font-bold mb-2 group-hover:text-white transition-colors">NPSN</h3>
                <p className="text-3xl font-serif font-bold text-primary-900 dark:text-white group-hover:text-white transition-colors">2040XXXX</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.4} width="100%">
              <div className="bg-white dark:bg-primary-900 p-10 rounded-[2rem] shadow-sm border border-primary-100 dark:border-primary-800 group hover:bg-primary-700 transition-all duration-500">
                <h3 className="text-primary-700 dark:text-accent font-bold mb-2 group-hover:text-white transition-colors">Akreditasi</h3>
                <p className="text-3xl font-serif font-bold text-primary-900 dark:text-white group-hover:text-white transition-colors text-accent">B (Baik)</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.6} width="100%">
              <div className="bg-white dark:bg-primary-900 p-10 rounded-[2rem] shadow-sm border border-primary-100 dark:border-primary-800 group hover:bg-primary-700 transition-all duration-500">
                <h3 className="text-primary-700 dark:text-accent font-bold mb-2 group-hover:text-white transition-colors">Kurikulum</h3>
                <p className="text-3xl font-serif font-bold text-primary-900 dark:text-white group-hover:text-white transition-colors">Merdeka</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profil;
import Reveal from '../Reveal';
import { motion } from "framer-motion";

const AcademicPrograms = () => {
  const classPrograms = [
    { title: "Kelas Tahfidz", desc: "Fokus pada hafalan Al-Qur'an dengan sistem setoran harian dan bimbingan tajwid." },
    { title: "Kelas Digital", desc: "Pembelajaran berbasis IT dengan kurikulum coding dasar dan desain grafis." },
    { title: "Kelas Sains", desc: "Eksplorasi mendalam di bidang matematika dan IPA dengan praktikum rutin." }
  ];

  // Data Eskul: Ubah dari string menjadi objek dengan 'name' dan 'src'
  // Gunakan format gambar .webp untuk performa SEO terbaik
  const extraCurricular = [
    { name: "Pramuka", src: "/smawa.png" },
    { name: "Paskibra", src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400" },
    { name: "Futsal", src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400" },
    { name: "Seni Hadroh", src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400" },
    { name: "Jurnalistik", src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400" },
    { name: "Robotik", src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <section className="pt-32 pb-20 bg-white dark:bg-primary-950 transition-colors duration-500 overflow-hidden">
      
      {/* Dekorasi Latar Belakang (Opsional untuk estetika) */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-700 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header (Tetap Sama) */}
        <div className="max-w-3xl mb-20 text-left md:text-left mx-auto md:mx-0">
          <Reveal direction="down">
            <span className="text-primary-700 dark:text-accent font-bold tracking-[0.2em] uppercase text-xs">Kurikulum & Akademik</span>
          </Reveal>
          <Reveal direction="down" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-900 dark:text-white mt-4 mb-6 leading-tight">
              Membangun Kompetensi <span className="text-primary-700 italic">Berbasis Karakter.</span>
            </h1>
          </Reveal>
          <Reveal direction="down" delay={0.4}>
            <p className="text-lg text-slate-600 dark:text-primary-100/70 leading-relaxed font-sans max-w-2xl">
              Kami menerapkan kurikulum yang dinamis, memadukan standar nasional dengan pendekatan religius khas Wahidiyah untuk membekali siswa di Kepanjen dengan ilmu dan adab.
            </p>
          </Reveal>
        </div>

        {/* Program Kelas Unggulan (Tetap Sama) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {classPrograms.map((program, index) => (
            <Reveal key={program.title} direction="up" delay={0.2 + (index * 0.1)}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-primary-50 dark:bg-primary-900 border border-primary-100 dark:border-primary-800 h-50 shadow-sm hover:bg-white dark:hover:bg-primary-900 transition-all duration-300"
              >
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 dark:text-white mb-5">{program.title}</h3>
                <p className="text-slate-600 dark:text-primary-100/70 leading-relaxed font-sans">{program.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Ekstrakurikuler Card Grid (Responsive & Menarik) */}
        <div className="bg-primary-900 dark:bg-[#011a14] rounded-[3rem] p-12 text-white shadow-2xl shadow-primary-950/20">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 text-center">Pengembangan Bakat & Minat</h2>
          </Reveal>
          
          {/* Grid System: 
              - 1 Kolom di HP (default)
              - 2 Kolom di Tablet (sm:)
              - 3 Kolom di Desktop (md:)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {extraCurricular.map((eskul, index) => (
              <Reveal key={eskul.name} direction="up" delay={0.1 * index} width="100%">
                <motion.div 
                    whileHover="hover"
                    className="relative rounded-3xl overflow-hidden group border border-primary-700 hover:border-accent transition-colors duration-300 aspect-video md:aspect-[5/4] cursor-pointer"
                >
                    {/* Gambar Eskul */}
                    <motion.img 
                        src={eskul.src} 
                        alt={`Kegiatan ${eskul.name} di SMA Wahidiyah Kepanjen`}
                        className="w-full h-full object-cover transition-colors duration-500"
                        variants={{
                            hover: { scale: 1.1 }
                        }}
                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                        // Fix: SEO & Performa (Preload jika penting)
                        loading="lazy"
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=400"; }}
                    />

                    {/* Overlay Gradasi agar teks terbaca */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8" />

                    {/* Judul Eskul di Atas Gambar */}
                    <div className="absolute inset-x-0 bottom-0 p-8 z-10">
                        <motion.h4 
                            variants={{
                                hover: { y: -5 }
                            }}
                            className="text-2xl font-serif font-bold text-white group-hover:text-accent transition-colors"
                        >
                            {eskul.name}
                        </motion.h4>
                        <p className="text-xs text-primary-100/70 mt-1 uppercase tracking-widest font-sans font-semibold">
                           SMA Wahidiyah Kepanjen
                        </p>
                    </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicPrograms;
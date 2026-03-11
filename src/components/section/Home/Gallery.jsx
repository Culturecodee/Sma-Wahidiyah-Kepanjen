import Reveal from "../Reveal";
import { motion } from "framer-motion";

const galleryImages = [
  { id: 1, src: "/gedung.jpg", title: "Gedung Utama", size: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/gazebo.jpg", title: "Gazebo", size: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "/perpustakaan.jpg", title: "Perpustakaan", size: "md:col-span-1 md:row-span-1" },
  { id: 4, src: "kelas.jpg", title: "Ruang kelas", size: "md:col-span-2 md:row-span-1" },
];

const Gallery = () => {
  return (
    <section id="galeri" className="py-24 bg-white dark:bg-primary-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header Galeri */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Reveal direction="left">
              <span className="text-primary-700 dark:text-accent font-bold tracking-widest uppercase text-sm">Fasilitas</span>
            </Reveal>
            <Reveal direction="left" delay={0.4}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 dark:text-white mt-4">
                Lingkungan Belajar <br /> Yang Nyaman.
              </h2>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.6}>
            <p className="text-slate-600 dark:text-primary-100/70 font-sans max-w-sm border-l-4 border-primary-700 pl-4">
              Menyediakan sarana prasarana modern untuk menunjang kreativitas dan fokus siswa di Kepanjen.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid Gallery - Responsive Version */}
        {/* - grid-cols-1: Satu kolom di HP
            - md:grid-cols-4: Empat kolom di Desktop
            - auto-rows-[250px]: Memberi tinggi dasar yang lebih pas untuk mobile
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 auto-rows-[220px] md:auto-rows-[200px]">
          {galleryImages.map((img, index) => (
            <Reveal 
              key={img.id} 
              // Di mobile lebih baik semua muncul dari 'up' agar tidak pusing
              direction={window.innerWidth < 768 ? "up" : (index % 2 === 0 ? "up" : "down")} 
              delay={0.2 * index}
              width="100%"
              // Class size sekarang menggunakan prefix md:
              className={img.size}
            >
              <motion.div 
                className="relative w-full h-full group overflow-hidden rounded-3xl  cursor-pointer"
                whileHover="hover"
                // Tap effect untuk mobile agar user tahu itu bisa diklik
                whileTap={{ scale: 0.98 }}
              >
                {/* Image */}
                <motion.img 
                  src={img.src} 
                  alt={img.title}
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full object-cover transition-colors duration-500"
                />
                
                
                {/* Overlay Text - Di mobile kita buat opacity lebih terlihat (0.4) agar teks terbaca tanpa hover */}
                <motion.div 
                  className="absolute w-full inset-0 bg-gradient-to-t from-primary-950/90 via-transparent to-transparent flex items-end p-6 md:p-8 md:translate-y-3"
                >
                  <p className="text-white font-serif text-xl md:mb-0 lg:mb-2 text-start md:text-xl font-bold">{img.title}</p>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
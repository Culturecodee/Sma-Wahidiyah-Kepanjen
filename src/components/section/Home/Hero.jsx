import { UserRound, LogIn } from 'lucide-react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Hero = () => {
  // Data gambar slider (Ganti URL dengan foto asli sekolah/event)
  const schoolImages = [
    { src: "/gedung.jpg", title: "Gedung Utama Kepanjen" },
    { src: "https://images.unsplash.com/photo-1523050853064-59f602c3d3a6?q=80&w=800", title: "Event Sholawat Wahidiyah" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", title: "Laboratorium Sains Modern" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f0faf4] dark:bg-primary-950 overflow-hidden pt-28">
      {/* Grid Dots Decor */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10" 
           style={{backgroundSize: '30px 30px' }} />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* KOLOM KIRI: Konten Teks (Tetap Sama) */}
        <div className="max-w-sm md:max-w-lg">
          <Reveal direction="down" delay={0.2}>
            <div className="inline-block border border-primary-600/30 px-4 py-1.5 rounded-full mb-8 bg-white/50 dark:bg-primary-900/30">
              <span className="text-xs font-bold tracking-widest uppercase text-primary-700 dark:text-accent">
                Pendaftaran Siswa Baru 2026/2027
              </span>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.4}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-900 dark:text-white leading-[1.1] mb-8 text-left">
              Mewujudkan <br /> 
              Generasi <br />
              <span className="text-primary-700 italic">Cerdas Berakhlak.</span>
            </h1>
          </Reveal>

          <Reveal direction="left" delay={0.6}>
            <p className="text-lg text-slate-600 dark:text-primary-100/70 font-sans leading-relaxed mb-10 max-w-md text-left">
              SMA Wahidiyah Kepanjen memadukan keunggulan akademik dengan kedalaman spiritual untuk masa depan santri yang cemerlang.
            </p>
          </Reveal>

          <div className="flex flex-wrap md:flex-nowrap items-center justify-items-center gap-4">
             <Reveal direction="up" delay={0.8}>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdwauRnDhy2edFGQXkj7BPPMB8cylid6_YYR6kLpGABEsmgXQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnEdp8bV64LHIQnmyKscepxEX7iamwRC-MGzQQc91sab-umWvWk9HiAxBRT9Q_aem_sdYYdPQhyqv6_KDRoxDxTA" className='cursor-pointer'>
                <motion.button 
                  whileHover={{ y: -5 }}
                  className="px-8 py-4 mt-2 flex gap-2 bg-[#047857] text-white rounded-2xl font-bold text-lg transition-all duration-300 cursor-pointer"
                  >
                  <LogIn />Mulai Pendaftaran
                </motion.button>
                  </a>
             </Reveal>
             <Reveal direction="up" delay={0.9} overflow="visible">
                <motion.button 
                  whileHover={{ y: -5 }}
                  className="px-8 py-4 mt-2 border-2 border-[#047857] text-[#047857] dark:text-primary-100 dark:border-primary-100 rounded-2xl font-bold text-lg transition-all duration-300"
                ><Link to="/profil" className='flex gap-2'>

                 <UserRound /> Lihat Profil
                </Link>
                </motion.button>
             </Reveal>
          </div>
        </div>

        {/* KOLOM KANAN: Slider Foto Sekolah */}
        <div className="relative flex flex-col items-center justify-center w-full max-w-full mx-auto md:ml-auto">
          <Reveal direction="right" delay={0.5} overflow="visible">
            <div className="relative">
              {/* Slider Utama */}
              <Swiper
                effect={"fade"}
                speed={1000}
                autoplay={{ delay: 100, disableOnInteraction: true }}
                pagination={{ clickable: true }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="absolute max-w-lg md:max-w-xl lg:max-w-3xl h-[350px] md:h-[400px] lg:h-[550px] shadow-sm rounded-3xl border-8 border-white dark:border-primary-900 z-10"
              >
                {schoolImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Caption Kecil di dalam Slider */}
                    <div className="absolute bottom-10 left-8 bg-white px-4 py-2 rounded-xl">
                       <p className="text-black text-xs font-bold uppercase tracking-widest">{img.title}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Elemen Dekoratif di belakang slider (Sesuai gaya gambarmu sebelumnya) */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-[2rem] -z-10 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full -z-10 blur-xl" />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Hero;
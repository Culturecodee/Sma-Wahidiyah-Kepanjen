import { Helmet } from 'react-helmet-async';
import Reveal from "../Reveal";
import { motion } from "framer-motion";

const PPDB = () => {
  const GFORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdwauRnDhy2edFGQXkj7BPPMB8cylid6_YYR6kLpGABEsmgXQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnEdp8bV64LHIQnmyKscepxEX7iamwRC-MGzQQc91sab-umWvWk9HiAxBRT9Q_aem_sdYYdPQhyqv6_KDRoxDxTA";

  return (
    <>
      <Helmet>
        <title>PPDB 2026/2027 | SMA Wahidiyah Kepanjen - Daftar Online</title>
        <meta name="description" content="Pendaftaran Peserta Didik Baru SMA Wahidiyah Kepanjen. Klik untuk mengisi formulir pendaftaran resmi." />
      </Helmet>

      {/* Main Container dengan Flexbox */}
      <section className="pt-32 pb-20 min-h-screen bg-white dark:bg-primary-950 flex flex-col items-center justify-center transition-colors duration-500 overflow-hidden">
        
        {/* Dekorasi Background Tetap Sama */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-40 right-10 w-80 h-80 bg-primary-700 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          
          {/* Bagian Header Konten */}
          <div className="flex flex-col items-center text-center max-w-4xl">
            <Reveal direction="down">
              <span className="text-primary-700 dark:text-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
                Admission Office
              </span>
            </Reveal>

            <Reveal direction="down" delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-900 dark:text-white leading-tight mb-8">
                Penerimaan Siswa Baru <br />
                <span className="text-primary-700 italic text-4xl md:text-6xl">T.A 2026 / 2027</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="text-lg text-slate-600 dark:text-primary-100/70 mb-12 max-w-2xl">
                Wujudkan masa depan gemilang bersama SMA Wahidiyah Kepanjen. Silakan klik tombol di bawah untuk mengisi formulir pendaftaran resmi melalui Google Form.
              </p>
            </Reveal>
          </div>

          {/* Bagian Tombol dengan Flexbox */}
          <Reveal direction="up" delay={0.6}>
            <div className="flex flex-col items-center gap-6 mx-5 my-5">
              <a
                href={GFORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-10 py-5 bg-primary-700 text-white rounded-full font-bold text-sm shadow-md shadow-primary-900/30 hover:bg-primary-800 transition-all duration-500 hover:scale-110"
              >
                <span>Isi Formulir Sekarang</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <div className="flex items-center gap-2 text-sm text-slate-400 italic">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p>Pendaftaran sedang dibuka</p>
              </div>
            </div>
          </Reveal>

          {/* Gambar Dekoratif dengan Flexbox Centering */}
          <Reveal direction="up" delay={0.8}>
            <div className="mt-20 w-full max-w-5xl flex items-center justify-center">
                <div className="relative w-full rounded-3xl overflow-hidden border-8 mb-10 border-white dark:border-primary-900 shadow-md aspect-video">
                    <img 
                        src="/gedung.jpg" 
                        alt="Gedung SMA Wahidiyah Kepanjen" 
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1200"; }}
                    />
                    <div className="absolute inset-0 bg-primary-900/10 pointer-events-none" />
                </div>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
};

export default PPDB;
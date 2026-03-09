import Reveal from "../Reveal";

const VisiMisi = () => {
  const missions = [
    "Menyelenggarakan pendidikan menengah yang berkualitas dan kompetitif.",
    "Membentuk karakter santri yang berakhlakul karimah dan berjiwa kepemimpinan.",
    "Mengembangkan potensi akademik dan non-akademik sesuai minat dan bakat.",
    "Menanamkan nilai-nilai religius dalam setiap aspek kehidupan sekolah."
  ];

  return (
    <section id="profil" className="py-24 bg-[#f8fafc] dark:bg-primary-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Bagian Visi */}
          <div>
            <Reveal direction="left">
              <span className="text-primary-700 dark:text-accent font-bold tracking-widest uppercase text-sm">Cita-cita Kami</span>
            </Reveal>
            <Reveal direction="left" delay={0.4}>
              <h2 className="text-5xl font-serif font-bold text-primary-900 dark:text-white mt-4 mb-8">Visi Sekolah</h2>
            </Reveal>
            <Reveal direction="up" delay={0.6}>
              <div className="p-10 bg-white dark:bg-primary-900 rounded-[2.5rem] border-l-[12px] shadow-sm border-primary-700">
                <p className="text-2xl font-serif italic text-slate-700 dark:text-primary-100 leading-relaxed">
                  "Menciptakan Wali yang intelek, dan intelektual yang wali."
                </p>
              </div>
            </Reveal>
          </div>

          {/* Bagian Misi */}
          <div>
            <Reveal direction="right">
              <span className="text-primary-700 dark:text-accent font-bold tracking-widest uppercase text-sm">Langkah Nyata</span>
            </Reveal>
            <Reveal direction="right" delay={0.4}>
              <h2 className="text-5xl font-serif font-bold text-primary-900 dark:text-white mt-4 mb-8">Misi Sekolah</h2>
            </Reveal>
            <div className="space-y-4">
              {missions.map((text, index) => (
                <Reveal key={index} direction="right" delay={0.6 + (index * 0.1)}>
                  <div className="flex items-start gap-4 p-5 bg-white dark:bg-primary-900 rounded-2xl border border-primary-100 dark:border-primary-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-accent flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-slate-800 dark:text-primary-100/70 font-sans font-medium">
                      {text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
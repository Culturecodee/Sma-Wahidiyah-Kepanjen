import Reveal from '../Reveal';
import { motion } from "framer-motion";

const AcademicPrograms = () => {
  const classPrograms = [
    { title: "Kelas Tahfidz", desc: "Fokus pada hafalan Al-Qur'an dengan sistem setoran harian dan bimbingan tajwid." },
    { title: "Kelas Digital", desc: "Pembelajaran berbasis IT dengan kurikulum coding dasar dan desain grafis." },
    { title: "Kelas Sains", desc: "Eksplorasi mendalam di bidang matematika dan IPA dengan praktikum rutin." }
  ];

  const extraCurricular = ["Pramuka", "Paskibra", "Futsal", "Seni Hadroh", "Jurnalistik", "Robotik"];

  return (
    <section className="pt-32 pb-20 bg-white dark:bg-primary-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <Reveal direction="down">
            <span className="text-primary-700 dark:text-accent font-bold tracking-widest uppercase text-sm">Kurikulum & Akademik</span>
          </Reveal>
          <Reveal direction="down" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary-900 dark:text-white mt-4 mb-6">
              Membangun Kompetensi <span className="text-primary-700 italic">Berbasis Karakter.</span>
            </h1>
          </Reveal>
          <Reveal direction="down" delay={0.4}>
            <p className="text-lg text-slate-600 dark:text-primary-100/70 leading-relaxed">
              Kami menerapkan kurikulum yang dinamis, memadukan standar nasional dengan pendekatan religius khas Wahidiyah untuk membekali siswa dengan ilmu dan adab.
            </p>
          </Reveal>
        </div>

        {/* Program Kelas Unggulan */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {classPrograms.map((program, index) => (
            <Reveal key={program.title} direction="up" delay={0.2 + (index * 0.1)}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-primary-50 dark:bg-primary-900 border border-primary-100 dark:border-primary-800 h-full"
              >
                <h3 className="text-2xl font-serif font-bold text-primary-900 dark:text-white mb-4">{program.title}</h3>
                <p className="text-slate-600 dark:text-primary-100/70 leading-relaxed">{program.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Ekstrakurikuler Grid */}
        <div className="bg-primary-900 dark:bg-primary-900/50 rounded-[3rem] p-12 text-white">
          <Reveal direction="up">
            <h2 className="text-3xl font-serif font-bold mb-10 text-center">Pengembangan Bakat & Minat</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {extraCurricular.map((item, index) => (
              <Reveal key={item} direction="up" delay={0.1 * index}>
                <div className="py-4 border-b border-primary-700 text-center text-lg font-semibold hover:text-accent transition-colors">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicPrograms;
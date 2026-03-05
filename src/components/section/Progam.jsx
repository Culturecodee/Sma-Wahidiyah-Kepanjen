import Reveal from "./Reveal";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Tahfidzul Qur'an",
    desc: "Program unggulan menghafal Al-Qur'an dengan metode mutqin dan bimbingan ustadz berpengalaman.",
    icon: "📖",
  },
  {
    title: "Kajian Kitab Kuning",
    desc: "Pendalaman literatur Islam klasik untuk membentuk pemahaman agama yang mendalam dan moderat.",
    icon: "🕌",
  },
  {
    title: "Digital Science",
    desc: "Penguasaan teknologi informasi dan sains modern sebagai bekal menghadapi era industri 4.0.",
    icon: "💻",
  },
];

const Programs = () => {
  return (
    <section id="akademik" className="py-24 bg-primary-50 dark:bg-primary-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <Reveal direction="down">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-4">
              Program Unggulan
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <p className="text-slate-600 dark:text-primary-100/70 max-w-2xl mx-auto font-sans">
              Kami menyusun kurikulum yang menyeimbangkan kecerdasan intelektual dan spiritual untuk mencetak lulusan paripurna.
            </p>
          </Reveal>
        </div>

        {/* Grid Cards dengan Staggered Reveal */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((item, index) => (
            <Reveal 
              key={item.title} 
              direction="up" 
              delay={0.2 * (index + 1)} // Jeda bertahap: 0.2s, 0.4s, 0.6s
              overflow="visible" // Agar efek shadow/hover tidak terpotong
            >
              <motion.div 
                whileHover={{ y: -10 }} // Efek angkat saat di-hover
                className="p-8 rounded-[2rem] bg-white dark:bg-primary-900 border border-primary-100 dark:border-primary-800 shadow-xl shadow-primary-900/5 h-full transition-colors duration-500"
              >
                <div className="w-14 h-14 bg-primary-50 dark:bg-primary-800 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-primary-100/70 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
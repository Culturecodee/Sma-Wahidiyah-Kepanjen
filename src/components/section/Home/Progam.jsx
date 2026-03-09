import Reveal from "../Reveal";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Tahfidzul Qur'an",
    desc: "Program unggulan menghafal Al-Qur'an dengan metode mutqin dan bimbingan ustadz berpengalaman.",
    icon: "/smawa.png",
  },
  {
    title: "Kajian Kitab Kuning",
    desc: "Pendalaman literatur Islam klasik untuk membentuk pemahaman agama yang mendalam dan moderat.",
    icon: "/smawa.png",
  },
  {
    title: "Digital Science",
    desc: "Penguasaan teknologi informasi dan sains modern sebagai bekal menghadapi era industri 4.0.",
    icon: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600",
  },
];

const Programs = () => {
  return (
    <section id="akademik" className="py-24 bg-primary-50 dark:bg-primary-950 transition-colors duration-500">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <Reveal direction="down">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-4">
              Program Unggulan
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <p className="text-slate-600 dark:text-primary-100/70 max-w-2xl text-start font-sans">
              Kami menyusun kurikulum yang menyeimbangkan kecerdasan intelektual dan spiritual untuk mencetak lulusan paripurna.
            </p>
          </Reveal>
        </div>

        {/* Grid Cards dengan Staggered Reveal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((item, index) => (
            <Reveal 
              key={item.title} 
              direction="up" 
              delay={0.2 * (index + 1)} // Jeda bertahap: 0.2s, 0.4s, 0.6s
              overflow="visible" // Agar efek shadow/hover tidak terpotong
            >
              <motion.div 
                whileHover={{ y: -10 }} // Efek angkat saat di-hover
                className="mt-3 rounded-[2rem] bg-white dark:bg-primary-900 border border-primary-100 dark:border-primary-800 shadow-xl shadow-primary-900/5 h-full transition-colors duration-500"
              >
                <div className="w-full h-40 mb-6 bg-primary-50 dark:bg-primary-800 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
                  <img src={ item.icon } className="w-full h-full object-cover object-center" alt="" />
                </div>
                <h3 className="pl-6 text-2xl font-serif font-bold text-primary-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="pl-6 mb-6 text-slate-600 dark:text-primary-100/70 leading-relaxed line-clamp-2
                 font-sans">
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
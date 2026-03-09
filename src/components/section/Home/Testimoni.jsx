import Reveal from "../Reveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmad Fauzi",
    role: "Alumni 2021 - Mahasiswa UB",
    text: "Belajar di SMA Wahidiyah Kepanjen memberikan saya keseimbangan antara ilmu umum dan agama. Guru-gurunya sangat suportif.",
    avatar: "https://i.pravatar.cc/150?u=ahmad"
  },
  {
    name: "Siti Aminah",
    role: "Alumni 2022 - Entrepreneur",
    text: "Program Digital Science-nya sangat membantu saya dalam membangun bisnis online setelah lulus. Sangat merekomendasikan sekolah ini!",
    avatar: "https://i.pravatar.cc/150?u=siti"
  },
  {
    name: "Budi Santoso",
    role: "Wali Murid",
    text: "Anak saya menjadi lebih disiplin dan berbakti semenjak sekolah di sini. Lingkungan belajarnya sangat religius dan aman.",
    avatar: "https://i.pravatar.cc/150?u=budi"
  }
];

const Testimoni = () => {
  return (
    <section className="py-24 bg-primary-50 dark:bg-primary-950 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        <Reveal direction="down">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-16">
            Apa Kata Mereka?
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Reveal key={index} direction="up" delay={0.2 * index}>
              <div className="p-8  bg-white dark:bg-primary-900 rounded-2xl mb-2 shadow-md border border-primary-100 dark:border-primary-900 text-left relative overflow-visible">
                <div className="absolute inset-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                  "
                </div>
                <p className="text-slate-600 md:h-20 dark:text-primary-100/70 italic mb-8 font-sans leading-relaxed pt-4">
                  {t.text}
                </p>
                <div className="flex items-center mt-20 gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary-700" />
                  <div>
                    <h4 className="font-bold text-primary-900 dark:text-white">{t.name}</h4>
                    <p className="text-xs text-primary-700 dark:text-accent font-semibold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
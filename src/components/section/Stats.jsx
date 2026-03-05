import Reveal from "./Reveal";
import { motion } from "framer-motion";

const statData = [
  { label: "Alumni Sukses", value: "1500+" },
  { label: "Tenaga Pengajar", value: "45+" },
  { label: "Ekstrakurikuler", value: "12" },
  { label: "Akreditasi", value: "B" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-white dark:bg-primary-900 transition-colors duration-500">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statData.map((stat, index) => (
            <Reveal 
              key={stat.label} 
              direction="up" 
              delay={0.1 * index}
              width="100%"
            >
              <div className="text-center p-6 border-r last:border-r-0 border-primary-100 dark:border-primary-800">
                <motion.h3 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="text-4xl md:text-5xl font-serif font-bold text-primary-700 dark:text-accent mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-sm md:text-base font-sans font-medium text-slate-500 dark:text-primary-100/60 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
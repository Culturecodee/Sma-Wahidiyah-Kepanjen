import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";

const Ppdb = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-primary-50 dark:bg-primary-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Header PPDB */}
        <div className="max-w-3xl mb-12 text-center md:text-left">
          <Reveal direction="down">
            <span className="text-primary-700 dark:text-accent font-bold tracking-widest uppercase text-sm">Penerimaan Siswa Baru</span>
          </Reveal>
          <Reveal direction="down" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 dark:text-white mt-4">
              Form Pendaftaran T.A 2026/2027
            </h1>
            <p className="mt-4 text-slate-600 dark:text-primary-100/70">
              Mohon isi form pendaftaran berikut sebagai syarat administrasi SMA Wahidiyah Kepanjen.
            </p>
          </Reveal>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num} 
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors ${
                  step >= num ? "bg-primary-700 text-white" : "bg-white text-slate-400 border border-slate-200"
                }`}
              >
                {num}
              </div>
            ))}
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary-700"
              initial={{ width: "25%" }}
              animate={{ width: `${step * 25}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-primary-900 rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-primary-100 dark:border-primary-800">
          <form className="space-y-8">
            <AnimatePresence mode="wait">
              {/* STEP 1: IDENTITAS DIRI */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-serif font-bold text-primary-900 dark:text-white border-b pb-4">Identitas Peserta Didik</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-slate-700 dark:text-primary-100">Nama Lengkap *</label>
                      <input type="text" className="p-4 rounded-xl bg-slate-50 dark:bg-primary-950 border border-slate-200 dark:border-primary-800 outline-none focus:border-primary-700" placeholder="Sesuai Akta Kelahiran" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-slate-700 dark:text-primary-100">Jenis Kelamin *</label>
                      <select className="p-4 rounded-xl bg-slate-50 dark:bg-primary-950 border border-slate-200 dark:border-primary-800 outline-none focus:border-primary-700">
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-slate-700 dark:text-primary-100">NISN (10 Digit)</label>
                      <input type="number" className="p-4 rounded-xl bg-slate-50 dark:bg-primary-950 border border-slate-200 dark:border-primary-800 outline-none focus:border-primary-700" placeholder="0009321234" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-slate-700 dark:text-primary-100">NIK / Kitas *</label>
                      <input type="number" className="p-4 rounded-xl bg-slate-50 dark:bg-primary-950 border border-slate-200 dark:border-primary-800 outline-none focus:border-primary-700" placeholder="16 digit sesuai KK" required />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: LAHIR & AGAMA */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-serif font-bold text-primary-900 dark:text-white border-b pb-4">Kelahiran & Kepercayaan</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-slate-700 dark:text-primary-100">Tempat Lahir *</label>
                      <input type="text" className="p-4 rounded-xl bg-slate-50 dark:bg-primary-950 border border-slate-200 dark:border-primary-800 outline-none focus:border-primary-700" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-slate-700 dark:text-primary-100">Tanggal Lahir *</label>
                      <input type="date" className="p-4 rounded-xl bg-slate-50 dark:bg-primary-950 border border-slate-200 dark:border-primary-800 outline-none focus:border-primary-700" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-slate-700 dark:text-primary-100">Agama & Kepercayaan *</label>
                      <select className="p-4 rounded-xl bg-slate-50 dark:bg-primary-950 border border-slate-200 dark:border-primary-800 outline-none focus:border-primary-700">
                        <option>Islam</option>
                        <option>Kristen Protestan</option>
                        <option>Katholik</option>
                        <option>Hindu</option>
                        <option>Budha</option>
                        <option>Khonghucu</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3 & 4: Dapat dilanjutkan dengan logika Alamat & PIP */}
              {step >= 3 && (
                <div className="text-center py-10">
                   <p className="italic text-slate-500">Lanjutkan pengisian Alamat, Transportasi, dan Data PIP...</p>
                </div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t dark:border-primary-800">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="px-8 py-3 rounded-xl border border-primary-700 text-primary-700 font-bold hover:bg-primary-50 transition-colors">
                  Sebelumnya
                </button>
              )}
              {step < 4 ? (
                <button type="button" onClick={nextStep} className="ml-auto px-10 py-4 bg-primary-700 text-white rounded-2xl font-bold shadow-lg shadow-primary-900/20 hover:bg-primary-800 transition-all">
                  Lanjutkan
                </button>
              ) : (
                <button type="submit" className="ml-auto px-10 py-4 bg-accent text-white rounded-2xl font-bold shadow-lg hover:brightness-110 transition-all">
                  Kirim Pendaftaran
                </button>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Ppdb;
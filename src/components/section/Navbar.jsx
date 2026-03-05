import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Profil", path: "/profil" },
    { name: "Akademik", path: "/akademik" },
    { name: "PPDB", path: "/ppdb" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/90 dark:bg-primary-900/95 shadow-lg py-3" 
        : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Reveal direction="left" delay={0.1}>
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-serif font-bold text-2xl">W</span>
            </div>
            <div className="hidden sm:block text-primary-900 dark:text-white">
              <h1 className="font-serif font-bold text-lg leading-none">SMA WAHIDIYAH</h1>
              <p className="font-sans text-[10px] tracking-widest uppercase text-primary-600 dark:text-accent">Kepanjen</p>
            </div>
          </Link>
        </Reveal>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <Reveal key={item.name} direction="down" delay={0.2 + index * 0.1}>
              <Link to={item.path} className={`font-sans font-semibold text-sm transition-colors ${
                location.pathname === item.path ? "text-primary-700 dark:text-accent" : "text-primary-900 dark:text-primary-100"
              }`}>
                {item.name}
              </Link>
            </Reveal>
          ))}

          <Reveal direction="down" delay={0.7}>
            <button onClick={toggleTheme} className="p-2 rounded-xl bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-accent overflow-visible">
              <motion.div animate={{ rotate: isDark ? 180 : 0 }}>
                {isDark ? <SunIcon /> : <MoonIcon />}
              </motion.div>
            </button>
          </Reveal>
          
          <Reveal direction="down" delay={0.8}>
            <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-2 bg-primary-700 text-white rounded-full font-bold text-sm shadow-lg shadow-primary-700/20">
              Daftar
            </motion.button>
          </Reveal>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <div className="md:hidden flex items-center gap-4">
           <button onClick={toggleTheme} className="p-2 text-primary-900 dark:text-white">
              {isDark ? <SunIcon /> : <MoonIcon />}
           </button>
           <button onClick={() => setIsOpen(!isOpen)} className="text-primary-900 dark:text-white focus:outline-none">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
             </svg>
           </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-[280px] bg-white dark:bg-primary-900 shadow-2xl z-[60] p-8 flex flex-col gap-8 md:hidden"
          >
            <div className="flex justify-between items-center border-b dark:border-primary-800 pb-4">
              <span className="font-serif font-bold text-xl text-primary-900 dark:text-white transition-colors">Menu</span>
              <button onClick={() => setIsOpen(false)} className="text-primary-900 dark:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className={`font-serif font-bold text-2xl transition-colors ${
                    location.pathname === item.path ? "text-primary-700 dark:text-accent" : "text-primary-900 dark:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="mt-auto w-full py-4 bg-primary-700 text-white rounded-2xl font-bold shadow-lg"
            >
              Daftar Sekarang
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background Dimmer (untuk mobile menu) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden"
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

// Helper Icons
const SunIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>;
const MoonIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>;

export default Navbar;
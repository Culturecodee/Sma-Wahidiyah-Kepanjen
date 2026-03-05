import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import Komponen & Pages
import Navbar from "./components/section/Navbar";
import Home from "./components/pages/Home";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    // AnimatePresence memungkinkan animasi saat komponen di-unmount (pindah halaman)
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-primary-900 transition-colors duration-300">
        {/* Navbar tetap muncul di semua halaman */}
        <Navbar />
        
        <main>
          <AnimatedRoutes />
        </main>

        {/* Footer bisa diletakkan di sini nanti */}
      </div>
    </Router>
  );
}

export default App;
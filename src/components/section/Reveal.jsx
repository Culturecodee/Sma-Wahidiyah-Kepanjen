import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.25, 
  direction = "up", // Default muncul dari bawah ke atas
  overflow = 'hidden'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Logika penentuan posisi awal berdasarkan arah
  const getVariants = () => {
    const initialPos = {
      up: { y: 40, x: 0 },
      down: { y: -40, x: 0 },
      left: { x: -40, y: 0 },
      right: { x: 40, y: 0 },
    };

    return {
      hidden: { 
        opacity: 0, 
        ...initialPos[direction] 
      },
      visible: { 
        opacity: 1, 
        y: 0, 
        x: 0 
      },
    };
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.6, 
          delay: delay, 
          ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier untuk gerakan yang lebih premium
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
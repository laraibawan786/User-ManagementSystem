import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import uolLogo from "../assets/logo.jpeg";

export default function Splash() {
  const navigate = useNavigate();

  const line1 = "Welcome to University of Lahore";
  const line2 = "Registration Portal";

  const [displayLine1, setDisplayLine1] = useState("");
  const [displayLine2, setDisplayLine2] = useState("");

  // 🎯 Effect for Line 1
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayLine1(line1.substring(0, index));
      if (index === line1.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // 🎯 Effect for Line 2 (starts after line1 finishes)
  useEffect(() => {
    if (displayLine1 === line1) {
      let index = 0;
      const delay = setTimeout(() => {
        const interval = setInterval(() => {
          index++;
          setDisplayLine2(line2.substring(0, index));
          if (index === line2.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [displayLine1]);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* 🌌 Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 z-0"></div>

      {/* ✨ Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30 z-10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [Math.random() * window.innerHeight, -20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

 {/* 🎓 Logo replaced with UOL Logo */}
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
  className="bg-white/10 p-6 rounded-full shadow-2xl backdrop-blur-lg mb-6 relative z-50 border border-white/20"
>
<img 
  src={uolLogo}  
  alt="University of Lahore Logo" 
  className="w-30 h-30 md:w-40 md:h-40 object-cover rounded-full"
/>
</motion.div>


      {/* ✅ Line 1 */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg relative z-50">
        {displayLine1}
        <span className="animate-pulse">|</span>
      </h1>

      {/* ✅ Line 2 (shows after Line 1 finishes) */}
      {displayLine1 === line1 && (
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mt-2 relative z-50">
          {displayLine2}
        </h2>
      )}

      {/* 🌟 Subtitle Line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 text-xl text-gray-300 font-medium max-w-xl relative z-50"
      >
        The Future of Student Registration – Simple. Fun. Modern.
      </motion.p>

      {/* 🚀 Register Button */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(250, 204, 21, 0.8)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/register")}
        className="mt-10 px-10 py-3 bg-yellow-400 text-black font-bold text-lg rounded-full shadow-lg hover:bg-yellow-300 transition-all relative z-50"
      >
        🚀 Register Now
      </motion.button>

      {/* Footer text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-5 text-sm text-gray-400 z-50"
      >
        Crafted with ❤️ by MERN Team @ UDEVS Laraib Batool
      </motion.p>
    </div>
  );
}

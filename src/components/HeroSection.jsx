import { motion } from "framer-motion";
import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 z-10 h-full w-full overflow-hidden">
        <motion.video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.video>
      </div>
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <motion.div
        className="relative z-30 flex h-screen flex-col justify-end pb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.img
          src={logo}
          alt="restaura"
          className="w-full p-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.p
          className="p-4 text-lg tracking-tighter text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Paris
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;

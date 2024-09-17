import { motion } from "framer-motion";
import missionImg from "../assets/mission.jpeg";
import mission from "../assets/mission.mp4";
import { MISSION } from "../constants";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto text-center">
        <motion.h2
          className="mb-8 text-3xl lg:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Mission
        </motion.h2>
        <div className="relative flex items-center justify-center">
          <motion.video
            className="w-full rounded-3xl"
            autoPlay
            muted
            loop
            playsInline
            poster={missionImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <source src={mission} type="video/mp4" />
          </motion.video>
          <div className="absolute h-full w-full rounded-3xl bg-black/40"></div>
          <motion.p
            className="absolute max-w-lg tracking-tighter lg:text-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;

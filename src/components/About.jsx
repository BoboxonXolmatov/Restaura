import { motion } from "framer-motion";
import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";

const About = () => {
  return (
    <section className="container mx-auto mb-8" id="about">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        About Us
      </h2>
      <motion.div
        className="flex flex-wrap lg:flex-nowrap items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-full p-4 lg:w-1/2">
          <motion.img
            src={about}
            className="rounded-3xl lg:-rotate-3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            className="text-4xl tracking-tighter lg:text-6xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div
            className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.p
            className="mt-4 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

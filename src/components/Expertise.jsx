import { motion } from "framer-motion";
import { CUSINES } from "../constants/index";

const Expertise = () => {
  return (
    <section id="expertise">
      <motion.h2
        className="my-8 text-center text-3xl tracking-tighter lg:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Expertise
      </motion.h2>
      <div className="container mx-auto px-4">
        {CUSINES.map((cusine, index) => (
          <motion.div
            key={index}
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex-shrink-0 pr-8 text-2xl">{cusine.number}</div>
            <motion.div
              className="w-1/3 flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={cusine.image}
                alt={cusine.title}
                className="w-60 h-48 rounded-3xl"
              />
            </motion.div>
            <div className="pl-8">
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">
                {cusine.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;

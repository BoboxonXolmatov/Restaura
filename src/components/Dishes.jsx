import { motion } from "framer-motion";
import { DISHES } from "../constants/index";
import DishCard from "./DishCard";

const Dishes = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <motion.h2
        className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Dishes
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {DISHES.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <DishCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Dishes;

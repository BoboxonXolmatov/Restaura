import { motion } from "framer-motion";
import { DISHES } from "../constants/index";

const DishCard = ({ project }) => {
  return (
    <motion.div
      className="shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default DishCard;

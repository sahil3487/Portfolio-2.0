// Import icons
import { IconName } from "react-icons/rx";

// Service data
export const serviceData = [];

// Components
import WorkSlider from "../../components/WorkSlider";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

// Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-9">
          {/* Text Section */}
          <div className="text-center h-auto w-auto xl:pt-[180px] xl:w-[31vw] flex flex-col lg:text-left  xl:mb-1">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Work<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-7 max-w-[400px] mx-auto lg:mx-0"
            >
            Highlighting dynamic web applications crafted with MERN stack, emphasizing seamless performance, stunning design, and innovative functionality.
            </motion.p>
          </div>
          {/* Slider Section */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[57%] xl:pt-[180px]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;

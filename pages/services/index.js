// Import icons
import { IconName } from "react-icons/rx";

// Service data
export const serviceData = [];

// Components
import ServiceSlider from "../../components/ServiceSlider";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

// Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-9">
          {/* Text Section */}
          <div className="text-center xl:w-[32%] flex flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Creating dynamic web applications with the MERN stack. Offering custom APIs for seamless integration, optimizing performance for lightning-fast speed, designing stunning, responsive interfaces, and integrating powerful Firebase features to elevate your app's functionality. Let's innovate together!
            </motion.p>
          </div>
          {/* Slider Section */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
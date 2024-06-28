//icone

import moduleName from "react-icons/rx";
//service data
export const serviceData = [];

//cmponetnts

import ServiceSlider from "../../components/ServiceSlider";
import bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// motionns

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";

const Services = () => {
  return (
    <div className=" h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className=" container mx-auto">
        <div className=" flex felx-col xl:flex-row gap-x-9">
          {/* text */}
          <div className=" text-center flex xl:w-[31vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" h2 xl:mt-8"
            >
              My Services<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" md-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              reiciendis laborum. Officia dolores accusamus veniam quisquam
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" w-full xl:max-w-[65%]"
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

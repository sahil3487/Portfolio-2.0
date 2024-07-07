import React from 'react';
import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";

const Testimonials = () => {
  return (
    <div className="h-screen bg-primary/30 py-32 text-center flex flex-col justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-4xl md:text-5xl lg:text-6xl pt-[170px] mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-lg md:text-xl text-white px-3 md:px-8 xl:px-23 xl:pt-10  "
        >
          Discover what our clients have to say about their experiences working with us. 
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full px-2 md:px-8 lg:px-16 xl:px-24  flex justify-center"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
      <Bulb className="absolute bottom-0 right- mb-8 mr-8 lg:mb-16 lg:mr-16 xl:mb-24 xl:mr-24" />
    </div>
  );
};

export default Testimonials;

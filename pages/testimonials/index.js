// Import necessary components
import React from 'react';
import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";

// Define and export the Testimonials component
const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center flex items-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-12"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>
        {/* Slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full px-4 md:px-8 lg:px-16 xl:px-24"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default Testimonials;

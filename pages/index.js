// Next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative">
      {/* background image */}
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 xl:p-[300px] xl:-top-0"></div>
      <ParticlesContainer />

      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col  w-auto justify-center xl:pr-[500px]  xl:text-left h-auto container mx-auto xl:text pt-[180px]">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Meet the MERN Maestro <br /> Crafting Scalable <br /> <span className="text-accent">Web Marvels.</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-auto  xl:max-w-xl mx-auto h-auto w-aut0 xl:mx-0 mb-6 xl:mb-16 "
          >
            With 2 years of experience in JavaScript and its frameworks, I specialize in crafting dynamic, responsive web applications. My expertise lies in leveraging modern tools and best practices to deliver elegant and efficient solutions that elevate user experience.
          </motion.p>
          {/* button for small screens */}
          <div className="flex pt-5 h-auto w-auto justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          {/* button for large screens with fade-in animation */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex xl:pb-[8%]"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* avatar */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "circInOut" }}
        className="absolute flex-shrink-9 xl:h-auto xl:w-auto bottom-0 right-20"
      >
        <Avatar />
      </motion.div>

      {/* particles */}
      <ParticlesContainer />
    </div>
  );
};

export default Home;

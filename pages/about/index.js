import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// Data for the about section
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development :",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design : ",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

// Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// Framer Motion for animations
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";

// Counter component for animated numbers
import Counters from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* Avatar Section */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[170px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent design
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis libero exercitationem quas eaque porro, ex cupiditate
            sint dolorum necessitatibus fugiat aspernatur error minus iure.
            Sapiente harum dignissimos dicta odit beatae.
          </motion.p>
        </div>

        {/* Counters Section */}
        <div className="hidden md:flex md:max-w-none mx-auto xl:mx-0 mb-8">
          <div className=" flex flex-1 xl:gap-x-6">
            {/* Experience Counter */}
            <div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <Counters start={0} end={10} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                years of experience
              </div>
            </div>
            {/* Satisfied Clients Counter */}
            <div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <Counters start={0} end={210} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                satisfied clients
              </div>
            </div>
            {/* Completed Projects Counter */}
            <div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <Counters start={0} end={310} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                completed projects
              </div>
            </div>
            {/* Awards Won Counter */}
            <div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <Counters start={0} end={8} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                awards won
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col  xl:max-w-[49%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize text-lg relative ${
                  index === itemIndex ? "text-accent" : ""
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
                <div
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${
                    index === itemIndex ? "w-full bg-accent" : "w-8 bg-white"
                  }`}
                  style={{ pointerEvents: "none" }}
                />
              </div>
            ))}
          </div>
          <div className="mt-4">
            {aboutData[index].info.map((infoItem, infoIndex) => (
              <div key={infoIndex} className="mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-white/60">
                    {infoItem.title}
                  </h3>
                  {infoItem.icons && (
                    <div className="flex gap-x-2">{infoItem.icons}</div>
                  )}
                </div>
                {!infoItem.icons && <p className="mt-1">{infoItem.stage}</p>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

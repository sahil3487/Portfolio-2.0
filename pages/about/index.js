import { useState } from "react";
import { motion } from "framer-motion";
import Counters from "react-countup";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiFirebase ,SiNodedotjs, SiPostman, SiRedis, SiSwagger, SiMongodb, SiMysql } from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Data for the about section
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development:",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <SiNodedotjs key="Nodejs" />
          
        ],
      },
      {
        title: "Tools / Database:",
        icons: [
          <SiSwagger key="swagger" />,
          <SiPostman key="postman" />,
          <SiRedis key="redis" />,
          <SiMongodb key="mongodb" />,
          <SiMysql key="mySql" />,
          <SiFirebase key="firebase" />
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: " JavaScript And Algo - FreeCodeCamp",
        stage: "2022 - 2022",
      },
      {
        title: "LeetCode Contest winner 600+ Q - LeetCode",
        stage: "2022 - 2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full-Stack Developer - Shreejan Techsure",
        stage: "2023 - 2024",
      },
      {
        title: "Web Developer - Webiwork Technology",
        stage: "2022 - 2023",
      },
      {
        title: "Backend Developer Intern - FunctionUp",
        stage: "2022 - 2022",
      },


    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Master of Computer Application - LNCT Group of college, Bhopal",
        stage: "2022",
      },
      {
        title: "Bachlour of Computer Application - RKDF Univercity, Bhopal",
        stage: "2020",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-1 -left-[100px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-10">
        {/* Text Section */}
        <div className="flex flex-1 flex-col justify-center xl:w-3/5 xl:pl-[30px] lg:pl-[10px]">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-white"
          >
            Transformation ideas <br /> Into <span className="text-accent">Digital Reality. </span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-5 xl:mb-10 px-3 xl:px-1 text-white/70"
          >
            Dynamic MERN stack wizard with a flair for MongoDB, Express, React, and Node.js. Transforming visions into scalable, stunning web applications. Let's create something extraordinary together.
          </motion.p>
          {/* Counters Section */}
          <div className="hidden md:flex md:max-w-none mx-auto xl:mx-0 mb-1 pl-5">
            <div className="flex flex-0 xl:gap-x-10">
              {/* Experience Counter */}
              <div className="relative after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Counters start={10} end={2} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-white/70">
                  years of experience
                </div>
              </div>
              {/* Satisfied Clients Counter */}
              <div className="relative after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-lg xl:text-4xl font-extrabold text-accent mb-2">
                  <Counters start={200} end={20} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-white/70">
                  satisfied clients
                </div>
              </div>
              {/* Completed Projects Counter */}
              <div className="relative after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Counters start={310} end={10} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-white/70">
                  completed projects
                </div>
              </div>
              {/* Awards Won Counter */}
              <div className="relative after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:-right-5">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Counters start={110} end={8} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[2px] leading-[1.4] max-w-[100px] text-white/70">
                  awards won
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Info Section */}
        <div
          variants={fadeIn("", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col xl:max-w-[30%] h-[300px] justify-center xl:justify-center"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-0">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize text-lg relative ${index === itemIndex ? "text-accent" : "text-white/70"}`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
                <div
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${index === itemIndex ? "w-full bg-accent" : "w-8 bg-white"}`}
                  style={{ pointerEvents: "none" }}
                />
              </div>
            ))}
          </div>
          <div className="mt-4">
            {aboutData[index].info.map((infoItem, infoIndex) => (
              <div key={infoIndex} className="mb-4">
                <div className="flex justify-between items-center gap-x-4">
                  <h3 className="font-semibold text-lg text-white/60">
                    {infoItem.title}
                  </h3>
                  {infoItem.icons && (
                    <div className="flex gap-x-1">{infoItem.icons}</div>
                  )}
                </div>
                {!infoItem.icons && (
                  <p className="mt-1 text-white/70">{infoItem.stage}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

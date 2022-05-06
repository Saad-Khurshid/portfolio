import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Experience from "../components/portfolio/Experience";
import TechStack from "../components/portfolio/TechStack";
import ProjectList from "../components/portfolio/ProjectsList";

const activeMenuStyle =
  "flex-grow text-primary border-b-2 border-primary py-2 text-lg px-1 duration-500  transition-border transform";
const passiveMenuStyle =
  "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 duration-500 transition-border transform hover:text-primary";

const portfolio = (props) => {
  const [currentMenu, setCurrentMenu] = useState("techStack"); // ['techStack', 'experience', 'projects']
  const router = useRouter();

  const setCurrentMenuWithRouter = (currentMenu) => {
    router.push(`portfolio?${currentMenu}`);
    setCurrentMenu(currentMenu);
  };

  useEffect(() => {
    const currentMenu = router.asPath?.split("?")[1] || "techStack";
    setCurrentMenu(currentMenu);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ x: "-100vW", opacity: 0, transition: { duration: 0.3 } }}
    >
      <section
        key="portfolio"
        className="text-gray-500 overflow-hidden subpixel-antialiased"
      >
        {/*** submenu md*/}
        <div className="flex flex-wrap md:block">
          <div className="flex w-full justify-evenly mb-4 hover:cursor-pointer fixed pt-8 z-20 bg-white">
            <a
              onClick={() => setCurrentMenuWithRouter("techStack")}
              className={
                currentMenu === "techStack" ? activeMenuStyle : passiveMenuStyle
              }
            >
              Technology Stack
            </a>
            <a
              onClick={() => setCurrentMenuWithRouter("experience")}
              className={
                currentMenu === "experience"
                  ? activeMenuStyle
                  : passiveMenuStyle
              }
            >
              Experience
            </a>
            <a
              onClick={() => setCurrentMenuWithRouter("projects")}
              className={
                currentMenu === "projects" ? activeMenuStyle : passiveMenuStyle
              }
            >
              Projects
            </a>
          </div>
        </div>
        {/*** subMenu sm*/}
      </section>
      {/***section & current section */}
      {currentMenu === "techStack" && (
        <section id="techStack" className="z-0 mt-8">
          <TechStack />
        </section>
      )}
      {currentMenu === "experience" && (
        <section id="experience" className="z-0 mt-8">
          <Experience />
        </section>
      )}
      {currentMenu === "projects" && (
        <section id="projects">
          <ProjectList />
        </section>
      )}
    </motion.div>
  );
};

export default portfolio;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Project from "../components/portfolio/Project";

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
      <section id="projects">
        <Project />
      </section>\
    </motion.div>
  );
};

export default portfolio;

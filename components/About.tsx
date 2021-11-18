import Link from "next/link";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { animateHelper } from "../utilities/animateHelpers";

import Services from "./Services";
import Experience from "./portfolio/Experience";
import Contact from "./contact/Contact";

const About = () => {
  return (
    <>
      <motion.section
        key="about"
        initial="initial"
        animate="animate"
        exit={{ x: "-100vW", opacity: 0, transition: { duration: 0.6 } }}
        className="bg-secondary subpixel-antialiased mt-8 "
      >
        {/*** Display image for small screens. */}
        <div className="block md:hidden mb-4">
          <motion.object
            variants={animateHelper("x", 0, 0, 0.6, 0, 1)}
            className="shadow-lg h-96 w-full object-cover object-center inset-0"
            type="image/svg+xml"
            data="/animated/jsAnimatedCoderFinal.svg"
          ></motion.object>
        </div>
        <motion.div className="w-full px-2 py-2 sm:px-4 sm:py-4 lg:px-12 md:grid md:grid-cols-5">
          <div className="hidden mr-6 md:block md:col-span-2">
            <motion.object
              variants={animateHelper("x", 0, 0, 0.6, 0, 1)}
              type="image/svg+xml"
              data="/animated/jsAnimatedCoderFinal.svg"
            ></motion.object>
          </div>
          <motion.div
            variants={animateHelper("x", 0, 0, 0.6, 0, 1)}
            className="md:col-span-3 my-auto"
          >
            <h1 className="text-gray-800 text-3xl md:text-4xl max-w-prose tracking-wide font-bold md:font-extrabold px-2 md:px-4">
              {`HI  I  AM  `}
              <span className="text-primary">S</span>
              {`AAD  `}
              <span className="text-primary">K</span>
              {`HURSHID.`}
            </h1>

            <div className="my-4 text-gray-800 px-2 md:px-4">
              I AM AN EXPERIENCED{" "}
              <Typical
                steps={[
                  "FULL STACK WEB DEVELOPER.",
                  2000,
                  "AWS DEVELOPER.",
                  2000,
                  "COMPUTER SYSTEMS ENGINEER.",
                  2000,
                ]}
                loop={Infinity}
                wrapper="div"
              />
            </div>

            {/* <p className="max-w-prose text-gray-500 mt-4">
            I have been a computer science student since childhood. I have
            always found myself passionate in computers and programming.
          </p>
          <p className="max-w-prose  text-gray-500 mt-4">
            I'm an avid programmer and a software developer. I always seek
            challenging opportunities to learn and enhance my knowledge and
            experience in software engineering.
          </p> */}
            <div className="mt-4 w-max text-primary hover:scale-125 hover:translate-x-4 duration-300 ease-in-out transform transition px-2 md:px-4">
              <Link href="/portfolio">{"View portfolio"}</Link>
            </div>
          </motion.div>
        </motion.div>

        {/*** Hobbies div */}
        <motion.div
          variants={animateHelper("y", 100, 0, 0.6, 0, 1)}
          className="bg-primary mt-8 w-full text-center tracking-wider px-2 py-2 sm:px-4 md:px-8 lg:px-16"
        >
          <h1 className="text-white">
            When I'm not coding, you can find me...
          </h1>
          <div className="mt-6 space-y-6 md:space-y-0 md:mx-auto  md:align-bottom md:flex md:flex-1">
            <img
              className="h-24 md:h-20 w-auto mx-auto"
              src="/animated/running.svg"
              alt="jogging"
            />{" "}
            <img
              className="h-24 md:h-20 w-auto mx-auto"
              src="/animated/longDrive.svg"
              alt="long drive"
            />{" "}
            <img
              className="h-24 md:h-20 w-auto mx-auto"
              src="/animated/visitingFriends.svg"
              alt="visiting friends"
            />
          </div>
        </motion.div>
      </motion.section>
      <Services />
      <Experience />
      <Contact />
    </>
  );
};

export default About;

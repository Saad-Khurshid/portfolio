import Link from "next/link";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { animateHelper, animateStagger } from "../utilities/animateHelpers";

import Services from "./Services";
import Experience from "./portfolio/Experience";
import Contact from "./contact/Contact";

const About = () => {
  return (
    <>
      {/** WEB */}
      <motion.div
        className="hidden md:block section bg-secondary subpixel-antialiased"
        key="about"
        initial="initial"
        animate="animate"
        exit={{ x: "-100vW", opacity: 0, transition: { duration: 0.3 } }}
      >
        <motion.div className="fullHeight w-full grid grid-cols-8 content-center">
          <div className="col-span-4">
            <motion.object
              animate={{ rotateY: 15, skewY: -6, skewX: -2 }}
              transition={{ duration: 0.3 }}
              type="image/svg+xml"
              data="./animated/jsAnimatedCoderFinal.svg"
            ></motion.object>
          </div>
          <div
            className="col-span-4 my-auto ml-4"
          >
            <motion.div
              className="text-gray-800 text-8xl gradientText "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Hello World!
            </motion.div>
            <motion.div
              className="text-gray-800 text-4xl max-w-prose tracking-wide mt-6 ml-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p>
                <span className="text-primary">{`Saad Khurshid `}</span>  {`here ...`}
              </p>
            </motion.div>

            <motion.div
              className="text-gray-800 max-w-prose tracking-wide mt-6 ml-6"
              style={{ display: "flex", flex: 1, alignItems: 'center' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.5 }}
            >
              {"I am a"}
              <div
                style={{ display: "flex", flex: 1, marginLeft: "0.25em" }}
              >
                <Typical
                  steps={[
                    "Resourceful Software Engineer.",
                    3000,
                    "Programming Enthusiast..",
                    3000,
                    "Computer Systems Engineer.",
                    3000
                  ]}
                  loop={Infinity}
                  wrapper="div"
                />
              </div>
            </motion.div>

            <motion.div
              className="mt-4 w-max text-primary hover:scale-125 hover:translate-x-4 duration-300 ease-in-out transform transition ml-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.5 }}
            >
              <Link href="./portfolio">{"View portfolio"}</Link>
            </motion.div>
          </div>
        </motion.div>

        {/*** Hobbies div */}
        {/* <motion.div
          variants={animateHelper("y", 100, 0, 0.6, 0, 1)}
          className="bg-primary mt-8 w-full text-center tracking-wider px-2 py-2 sm:px-4 md:px-8 lg:px-16"
        >
          <h1 className="text-white">
            When I'm not coding, you can find me...
          </h1>
          <div className="mt-6 space-y-6 md:space-y-0 md:mx-auto  md:align-bottom md:flex md:flex-1">
            <img
              className="h-24 md:h-20 w-auto mx-auto"
              src="./animated/running.svg"
              alt="jogging"
            />{" "}
            <img
              className="h-24 md:h-20 w-auto mx-auto"
              src="./animated/longDrive.svg"
              alt="long drive"
            />{" "}
            <img
              className="h-24 md:h-20 w-auto mx-auto"
              src="./animated/visitingFriends.svg"
              alt="visiting friends"
            />
          </div>
        </motion.div> */}
      </motion.div>
      {/** MOBILE */}
      <motion.div
        className="block md:hidden section bg-secondary subpixel-antialiased"
        key="about"
        initial="initial"
        animate="animate"
        exit={{ x: "-100vW", opacity: 0, transition: { duration: 0.3 } }}
      >
        {/*** Display image for small screens. */}
        <div className="mb-4">
          <motion.object
            variants={animateHelper("x", 0, 0, 0.3, 0, 1)}
            className="h-96 w-full object-cover object-center inset-0"
            type="image/svg+xml"
            data="./animated/jsAnimatedCoderFinal.svg"
          ></motion.object>
        </div>
        <motion.div className="w-full px-2 sm:px-4">
          <div
            className="my-auto ml-2"
          >
            <motion.div
              className="text-gray-800 text-4xl gradientText h-16"
              initial={{ scaleX: 0, translateZ: 32, translateX: 32, opacity: 0 }}
              animate={{ scaleX: 1, translateZ: 0, translateX: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Hello World!
            </motion.div>
            <motion.div
              className="text-gray-800 text-3xl max-w-prose tracking-wide pt-4 ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p>
                <span className="text-primary">{`Saad Khurshid `}</span>  {`here ...`}
              </p>
            </motion.div>

            <motion.div
              className="text-gray-800 tracking-wide mt-4 ml-3"
              style={{ display: "flex", flex: 1, alignItems: 'center' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.5 }}
            >
              {"I am"}
              <div
                style={{ display: "flex", flex: 1, marginLeft: "0.25em" }}
              >
                <Typical
                  steps={[
                    "a Full Stack JavaScript Developer.",
                    3000,
                    "an AWS Developer.",
                    3000,
                    "a Computer Systems Engineer.",
                    3000,
                    "a Programming Enthusiast.",
                    3000
                  ]}
                  loop={Infinity}
                  wrapper="div"
                />
              </div>
            </motion.div>

            <motion.div
              className="mt-4 w-max text-primary hover:scale-125 hover:translate-x-4 duration-300 ease-in-out transform transition ml-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.5 }}
            >
              <Link href="./portfolio">{"View portfolio"}</Link>
            </motion.div>
          </div>
        </motion.div>

        {/*** Hobbies div */}
        {/* <motion.div
          variants={animateHelper("y", 100, 0, 0.6, 0, 1)}
          className="bg-primary mt-8 w-full text-center tracking-wider px-2 py-2 sm:px-4 md:px-8 lg:px-16"
        >
          <h1 className="text-white">
            When I'm not coding, you can find me...
          </h1>
          <div className="mt-6 space-y-6 md:space-y-0 md:mx-auto  md:align-bottom md:flex md:flex-1">
            <img
              className="h-24 md:h-20 w-auto mx-auto"
              src="./animated/running.svg"
              alt="jogging"
            />{" "}
            <img
              className="h-24 md:h-20 w-auto mx-auto"
              src="./animated/longDrive.svg"
              alt="long drive"
            />{" "}
            <img
              className="h-24 md:h-20 w-auto mx-auto"
              src="./animated/visitingFriends.svg"
              alt="visiting friends"
            />
          </div>
        </motion.div> */}
      </motion.div>
    </>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import { animateHelper, animateStagger } from "../../utilities/animateHelpers";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <motion.section
      key="techStack"
      initial="initial"
      animate="animate"
      exit={{ x: "-100vW", opacity: 0, transition: { duration: 0.6 } }}
      className="text-gray-600 body-font"
    >
      <motion.div
        variants={animateHelper("x", 0, 0, 1, 0, 1)}
        className="py-24 h-full bg-primary-light text-gray-500"
      >
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-24 text-gray-800 text-center px-2 md:px-4">
          Work Experience
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(13, 115, 241, 1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(13, 115, 241, 1)",
            }}
            date="Apr 2020 - Mar 2021"
            dateClassName="text-white lg:text-gray-800"
            iconStyle={{
              background: "rgb(256, 256, 256)",
              color: "#fff",
            }}
            icon={<img src="/experience/11.svg" alt="11" />}
            iconClassName="p-2 object-contain object-center"
          >
            <div className="flex md:text-lg font-semibold tracking-wide">
              <h3>Full Stack Developer @ </h3>
              <a
                href="http://concept11studios.com/"
                target="_blank"
                className="ml-4 underline hover:scale-110 transform transition"
              >
                {"Concept 11"}
              </a>
            </div>
            <h4 className="tracking-wide ">US-FL, Remote</h4>
            <div className="mt-4">
              <p className="text-base font-light">
                AWS/JavaScript Development <br />
                TypeScript | ReactJS | Node.js | MongoDB | Nginx | AWS
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(13, 115, 241, 1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(13, 115, 241, 1)",
            }}
            date="Nov 2019 - Mar 2020"
            dateClassName="text-white lg:text-gray-800"
            iconStyle={{
              background: "rgb(256, 256, 256)",
              color: "#fff",
            }}
            icon={<img src="/experience/icom.svg" alt="11" />}
            iconClassName="p-2 object-contain object-center"
          >
            <div className="flex md:text-lg font-semibold tracking-wide">
              <h3>Software Engineer @ </h3>
              <a
                href="http://icommunix.com/"
                target="_blank"
                className="ml-4 underline hover:scale-110 transform transition"
              >
                ICOMMUNIX
              </a>
            </div>
            <div className="mt-4">
              <p className="text-base font-light">
                AWS/JavaScript Development <br />
                Node.js | MySQL | AWS
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(13, 115, 241, 1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(13, 115, 241, 1)",
            }}
            date="Jun 2018 - Aug 2019"
            dateClassName="text-white lg:text-gray-800"
            iconStyle={{
              background: "rgb(256, 256, 256)",
              color: "#fff",
            }}
            icon={<img src="/experience/ioTics.svg" alt="11" />}
            iconClassName="p-2 object-contain object-center"
          >
            <div className="flex md:text-lg font-semibold tracking-wide">
              <h3>Web Developer @ </h3>
              <a
                href="#"
                target="_blank"
                className="ml-4 underline hover:scale-110 transform transition"
              >
                IoTics Technology Pvt Ltd
              </a>
            </div>
            <div className="mt-4">
              <p className="text-base font-light">
                AWS/JavaScript/PHP Development <br />
                HTML | JavaScript | React Native | PHP | MySQL | Firebase
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "rgb(13, 115, 241, 1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(13, 115, 241, 1)",
            }}
            date="Jun 2018 - Aug 2019"
            dateClassName="text-white lg:text-gray-800"
            iconStyle={{
              background: "rgb(256, 256, 256)",
              color: "#fff",
            }}
            icon={<img src="/experience/education.svg" alt="11" />}
            iconClassName="p-2 object-contain object-center"
          >
            <div className="md:text-lg font-semibold tracking-wide">
              <h3>Computer Systems Engineering @</h3>
              <h4 className="tracking-wide">
                <a
                  href="https://www.uetpeshawar.edu.pk/"
                  target="_blank"
                  className="underline hover:scale-110 transform transition"
                >
                  {`University of Engineering & Technology (UET)`}
                </a>
              </h4>
            </div>
            <div className="mt-4">
              <p className="text-base font-light">
                Programming/Operating Systems/ Networking/Database/Web
                Development <br />C | C++ | Assembly | Linux | Internet
                Protocols | MySQL | HTML | PHP
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </motion.div>
    </motion.section>
  );
};

export default Experience;

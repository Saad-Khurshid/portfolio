import React from "react";
import { motion } from "framer-motion";
import { animateHelper, animateStagger } from "../../utilities/animateHelpers";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Experience = () => {
  return (
    <motion.section
      key="techStack"
      initial="initial"
      animate="animate"
      exit={{ x: "-100vW", opacity: 0, transition: { duration: 0.3 } }}
      className="section text-gray-600 body-font"
      style={{ width: '99vw', minHeight: '82vh' }}
    >
      <motion.div
        variants={animateHelper("x", 0, 0, 1, 0, 1)}
        className="py-24 h-full bg-secondary text-gray-500"
      >
        <h1 className="text-4xl md:text-6xl font-bold title-font mb-24 text-gray-800 text-center px-2 md:px-4">
          My Journey so far
        </h1>
        <div
          style={{ overflowX: "auto" }}
        >
          <VerticalTimeline
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(13, 115, 241, 1)",
                color: "#fff"
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(13, 115, 241, 1)",
              }}
              date="May 2021 - Present"
              dateClassName="text-white lg:text-gray-800"
              iconStyle={{
                background: "rgb(256, 256, 256)",
                color: "#fff",
              }}
              icon={<img src="/experience/FireTEXT.svg" alt="11" />}
              iconClassName="p-2 object-contain object-center"
            >
              <div className="md:text-lg font-semibold tracking-wide">
                <div>
                  <h3>
                    Senior Software Engineer </h3>
                </div>
                <a
                  href="https://firetext.net/"
                  target="_blank"
                  className="underline hover:scale-110 transform transition"
                >
                  {"FireTEXT Dispatch Solutions"}
                </a>
              </div>
              <h4 className="tracking-wide ">US, Remote</h4>
              <div className="mt-4">
                <p className="text-base font-light">
                  <b>Skills</b> <br />
                  ReactJS | Reacat Native | Node.js | TypeScript | JavaScript | Python
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
              date="Apr 2020 - Present"
              dateClassName="text-white lg:text-gray-800"
              iconStyle={{
                background: "rgb(256, 256, 256)",
                color: "#fff",
              }}
              icon={<img src="/experience/11.svg" alt="11" />}
              iconClassName="p-2 object-contain object-center"
            >
              <div className="md:text-lg font-semibold tracking-wide">
                <div>
                  <h3>Software Engineer </h3>
                </div>
                <div>
                  <a
                    href="http://concept11studios.com/"
                    target="_blank"
                    className="underline hover:scale-110 transform transition"
                  >
                    {"Concept 11"}
                  </a>
                </div>
              </div>
              <h4 className="tracking-wide ">US, Remote</h4>
              <div className="mt-4">
                <p className="text-base font-light">
                  <b>Skills</b> <br />
                  ReactJS | Node.js | TypeScript | JavaScript | Python | AWS
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
              <div className="md:text-lg font-semibold tracking-wide">
                <div>
                  <h3>Software Engineer </h3>
                </div>
                <div>
                  <a
                    href="http://icommunix.com/"
                    target="_blank"
                    className="underline hover:scale-110 transform transition"
                  >
                    ICOMMUNIX
                  </a>
                </div>
              </div>
              <h4 className="tracking-wide ">Lahore, Pakistan</h4>
              <div className="mt-4">
                <p className="text-base font-light">
                  <b>Skills</b> <br />
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
              <div className="md:text-lg font-semibold tracking-wide">
                <div>
                  <h3>Web Developer </h3>
                </div>
                <div>
                  <a
                    href="#"
                    target="_blank"
                    className="underline hover:scale-110 transform transition"
                  >
                    IoTics Technology Pvt Ltd
                  </a>
                </div>
              </div>
              <h4 className="tracking-wide ">Peshawar, Pakistan</h4>
              <div className="mt-4">
                <p className="text-base font-light">
                  <b>Skills</b> <br />
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
                <div>
                  <h3>Computer Systems Engineering</h3>
                </div>
                <div>
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
              </div>
              <h4 className="tracking-wide ">Peshawar, Pakistan</h4>
              <div className="mt-4">
                <p className="text-base font-light">
                  <b>Courses</b> <br />
                  Computer Programming | Object Oriented Programming | Intro to OS and Systems Programming | Data Structures and Algorithms | Communication Systems
                  | Computer Organization and Architecture | Systems Programming | Database Management Systems | Data Communication and Networks | Control Systems
                  | Digital System Design | Embedded Systems | Software Engineering
                </p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;

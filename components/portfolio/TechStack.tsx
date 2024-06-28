import React from "react";
import { motion } from "framer-motion";
import { animateHelper, animateStagger } from "../../utilities/animateHelpers";


const list = {
  visible: { opacity: 1, transition: { delayChildren: 0.5 } },
  hidden: { opacity: 0 },
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

const TechStack = () => {
  return (
    <>
      <motion.section
        key="techStack"
        initial="initial"
        animate="animate"
        exit={{ x: "-100vW", opacity: 0, transition: { duration: 0.3 } }}
        className="text-gray-600 body-font"
        style={{ width: '99vw', minHeight: '83vh' }}
      >
        <div className="md:px-4 py-20 mx-auto">
          <div className="flex flex-wrap justify-center">
            {/*** FRONTEND */}
            <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <motion.h2
                variants={animateHelper("x", 0, 0, 0.3, 0, 1)}
                className="font-medium title-font tracking-widest text-gray-800 mb-6 text-2xl lg:text-center sm:text-left"
              >
                FRONTEND
              </motion.h2>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={list}
                className="flex flex-col -mb-1 space-y-2.5"
              >
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/react.svg" alt="react" />
                  </span>
                  <p className="my-auto"> React</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/expo.svg" alt="react" />
                  </span>
                  <p className="my-auto"> Expo</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/reactNative.svg" alt="react" />
                  </span>
                  <p className="my-auto"> React Native</p>
                </motion.div>
                {/* <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/nextjs.svg" alt="nextjs" />
                  </span>
                  <p className="my-auto"> Next.js</p>
                </motion.div> */}
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/redux.svg" alt="redux" />
                  </span>
                  <p className="my-auto"> Redux</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/mui.svg" alt="antdesign" />
                  </span>
                  <p className="my-auto"> Material-UI</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/tailwindCSS.svg" alt="tailwindcss" />
                  </span>
                  <p className="my-auto"> TailwindCSS</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/antDesign.svg" alt="bootstrap" />
                  </span>
                  <p className="my-auto"> Ant Design</p>
                </motion.div>
              </motion.div>
            </div>

            {/*** BACKEND */}
            <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <motion.h2
                variants={animateHelper("x", 0, 0, 0.6, 0, 1)}
                className="font-medium title-font tracking-widest text-gray-800 mb-6 text-2xl lg:text-center sm:text-left"
              >
                BACKEND
              </motion.h2>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={list}
                className="flex flex-col  -mb-1 space-y-2.5"
              >
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/aws.svg" alt="aws" />
                  </span>
                  <p className="my-auto"> AWS</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/node.svg" alt="nodejs" />
                  </span>
                  <p className="my-auto"> Node.js</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/mysql.svg" alt="sql" />
                  </span>
                  <p className="my-auto"> MySQL</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/mongodb.svg" alt="mongodb" />
                  </span>
                  <p className="my-auto"> MongoDB</p>
                </motion.div>
                {/* <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/firebase.svg" alt="firebase" />
                  </span>
                  <p className="my-auto"> Firebase</p>
                </motion.div> */}
                {/* <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/php.svg" alt="php" />
                  </span>
                  <p className="my-auto"> PHP</p>
                </motion.div> */}
              </motion.div>
            </div>
            {/*** DEVOPS */}
            <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <motion.h2
                variants={animateHelper("x", 0, 0, 0.6, 0, 1)}
                className="font-medium title-font tracking-widest text-gray-800 mb-6 text-2xl lg:text-center sm:text-left"
              >
                DEVOPS
              </motion.h2>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={list}
                className="flex flex-col  -mb-1 space-y-2.5"
              >
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/linux.svg" alt="git" />
                  </span>
                  <p className="my-auto"> Linux</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/bash.svg" alt="git" />
                  </span>
                  <p className="my-auto"> Bash Scripting</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/git.svg" alt="git" />
                  </span>
                  <p className="my-auto"> Git</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/npm.svg" alt="npm" />
                  </span>
                  <p className="my-auto"> NPM</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/yarn.svg" alt="yarn" />
                  </span>
                  <p className="my-auto"> YARN</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/webpack.svg" alt="webpack" />
                  </span>
                  <p className="my-auto"> Webpack</p>
                </motion.div>
                {/* <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/vercel.svg" alt="vercel" />
                  </span>
                  <p className="my-auto"> Vercel</p>
                </motion.div> */}
              </motion.div>
            </div>
            {/*** TESTING */}
            <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <motion.h2
                variants={animateHelper("x", 0, 0, 0.6, 0, 1)}
                className="font-medium title-font tracking-widest text-gray-800 mb-6 text-2xl lg:text-center sm:text-left"
              >
                TESTING
              </motion.h2>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={list}
                className="flex flex-col  -mb-1 space-y-2.5"
              >
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/jest.svg" alt="jest" />
                  </span>
                  <p className="my-auto"> Jest</p>
                </motion.div>
              </motion.div>
            </div>
            {/*** TOOLS */}
            <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <motion.h2
                variants={animateHelper("x", 0, 0, 0.6, 0, 1)}
                className="font-medium title-font tracking-widest text-gray-800 mb-6 text-2xl lg:text-center sm:text-left"
              >
                TOOLS
              </motion.h2>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={list}
                className="flex flex-col  -mb-1 space-y-2.5"
              >
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/vscode.svg" alt="vscode" />
                  </span>
                  <p className="my-auto"> Visual Studio Code</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/ssh.svg" alt="tailwindcss" />
                  </span>
                  <p className="my-auto"> SSH</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/nginx.svg" alt="tailwindcss" />
                  </span>
                  <p className="my-auto"> Nginx</p>
                </motion.div>
                {/* <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/chromedev.svg" alt="chromedevtools" />
                  </span>
                  <p className="my-auto"> Chrome Dev Tools</p>
                </motion.div> */}
                {/* <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/postman.svg" alt="postman" />
                  </span>
                  <p className="my-auto"> Postman</p>
                </motion.div> */}
                {/* <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/filezilla.svg" alt="filezilla" />
                  </span>
                  <p className="my-auto"> FileZilla</p>
                </motion.div> */}
                {/* <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/putty.svg" alt="putty" />
                  </span>
                  <p className="my-auto"> Putty</p>
                </motion.div> */}
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/letsencrypt.svg" alt="letsencrypt" />
                  </span>
                  <p className="my-auto"> Let's Encrypt</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/figma.svg" alt="figma" />
                  </span>
                  <p className="my-auto"> Figma</p>
                </motion.div>
                {/* <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/jira.svg" alt="jira" />
                  </span>
                  <p className="my-auto"> Jira</p>
                </motion.div> */}
              </motion.div>
            </div>
            {/*** LANGUAGES */}
            <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <motion.h2
                variants={animateHelper("x", 0, 0, 0.6, 0, 1)}
                className="font-medium title-font tracking-widest text-gray-800 mb-6 text-2xl lg:text-center sm:text-left"
              >
                LANGUAGES
              </motion.h2>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={list}
                className="flex flex-col  -mb-1 space-y-2.5"
              >
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/js.svg" alt="js" />
                  </span>
                  <p className="my-auto"> JavaScript</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/ts.svg" alt="ts" />
                  </span>
                  <p className="my-auto"> TypeScript</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/c.svg" alt="c" />
                  </span>
                  <p className="my-auto"> C</p>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/cpp.svg" alt="cpp" />
                  </span>
                  <p className="my-auto"> C++</p>
                </motion.div>
                {/* <motion.div
                  variants={item}
                  className="flex"
                >
                  <span className="w-8 h-8  mr-2 rounded-full inline-flex align-middle">
                    <img src="/techStack/php.svg" alt="php" />
                  </span>
                  <p className="my-auto"> PHP</p>
                </motion.div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default TechStack;

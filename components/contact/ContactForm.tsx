import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Joi from "joi-browser";
import { animateHelper } from "../../utilities/animateHelpers";

const formSpreeUrl = "https://formspree.io/f/xqkwadzr";

const ContactForm = () => {
  const [state, setState] = useState({
    data: {
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      message: "",
    },
    errors: {},
  });
  // Formspree server state handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const schema = {
    firstName: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Last Name"),
    contact: Joi.string().allow("").label("Contact"),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "org", "edu"] },
      })
      .required()
      .label("Email"),
    message: Joi.string().min(5).max(1000).required().label("Message"),
  };

  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...state.errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...state.data };
    data[input.name] = input.value;

    setState({ data, errors });
  };

  const validate = () => {
    const { data } = state;

    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const propertySchema = {
      [name]: schema[name],
    };
    const obj = { [name]: value };
    const { error } = Joi.validate(obj, propertySchema);
    return error ? error.details[0].message : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setState({ data: state.data, errors: errors || {} });

    if (errors) return null;
    handleOnSubmit(e);
  };

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setState({
        data: {
          firstName: "",
          lastName: "",
          contact: "",
          email: "",
          message: "",
        },
        errors: {},
      });
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setServerState({ submitting: true, status: "" });
    fetch(formSpreeUrl, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(state.data),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks for reaching out!");
      })
      .catch((r) => {
        handleServerResponse(false, "Something went wrong!");
      });
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit={{ x: "-100vW", opacity: 0, transition: { duration: 0.3 } }}
      className="text-gray-800 relative customBg bg-opacity-0 h-full"
    >
      <div className="container px-5  mx-auto">
        <div className="flex flex-col text-center w-full mb-12 pt-24">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-800">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed md:px-24 md:py-4 font-medium">
            Have any questions or concerns? I am here to help. Feel free to
            reach out and I will get back to you shortly!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="firstName"
                  className="leading-7 text-gray-800 font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={state.data.firstName}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 bg-white focus:ring-2 focus:ring-primary-light focus:border-primary text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {state.errors["firstName"] && (
                  <div className="bg-red-400 border-red-700 rounded-md text-black">
                    {state.errors["firstName"]}
                  </div>
                )}
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="lastName"
                  className="leading-7 text-gray-800 font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={state.data.lastName}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 bg-white focus:ring-2 focus:ring-primary-light focus:border-primary text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {state.errors["lastName"] && (
                  <div className="bg-red-400 border-red-700 rounded-md text-black">
                    {state.errors["lastName"]}
                  </div>
                )}
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="contact"
                  className="leading-7 text-gray-800 font-medium"
                >
                  Contact Number{" "}
                  <span className="font-light text-sm">(optional)</span>
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={state.data.contact}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 bg-white focus:ring-2 focus:ring-primary-light focus:border-primary text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {state.errors["contact"] && (
                  <div className="bg-red-400 border-red-700 rounded-md text-black">
                    {state.errors["contact"]}
                  </div>
                )}
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-gray-800 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={state.data.email}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 bg-white focus:ring-2 focus:ring-primary-light focus:border-primary text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {state.errors["email"] && (
                  <div className="bg-red-400 border-red-700 rounded-md text-black">
                    {state.errors["email"]}
                  </div>
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-gray-800 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={state.data.message}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 bg-white focus:ring-2 focus:ring-primary-light focus:border-primary text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {state.errors["message"] && (
                  <div className="bg-red-400 border-red-700 rounded-md text-black">
                    {state.errors["message"]}
                  </div>
                )}
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                disabled={serverState.submitting}
                onClick={handleSubmit}
                className={
                  "flex items-center justify-center w-full m-auto text-white bg-primary-dark border-0 py-4 px-8 focus:outline-none hover:bg-blue-500 rounded text-lg font-medium tracking-wide " +
                  (validate() ? "active:bg-red-700 " : "active:bg-green-700 ")
                }
              >
                <img
                  src="/spinner.svg"
                  alt="spin"
                  className={
                    "h-8 w-8 mr-3" +
                    (serverState.submitting ? " inline-block" : " hidden")
                  }
                />
                Send
              </button>
              {serverState.status && serverState.status.ok && (
                <motion.div
                  variants={animateHelper(
                    "x",
                    0,
                    0,
                    1,
                    1,
                    0,
                    "easeIn",
                    4,
                    1,
                    0
                  )}
                  className="rounded mt-2 p-2 bg-green-400 text-gray-900 text-center"
                >
                  {serverState.status.msg}
                </motion.div>
              )}
              {serverState.status && !serverState.status.ok && (
                <motion.div
                  variants={animateHelper(
                    "x",
                    0,
                    0,
                    1,
                    1,
                    0,
                    "easeIn",
                    4,
                    1,
                    0
                  )}
                  className="rounded mt-2 p-2 bg-red-400 text-gray-900 text-center"
                >
                  {serverState.status.msg}
                </motion.div>
              )}
            </div>
            

          </div>
        </div>
        <div className="md:flex w-full items-center justify-center md:space-x-24  p-2 w-full py-8 mt-8 border-t border-gray-200 font-medium">
              
          {/** EMAIL */}
          <div className="pt-2 flex align-center">
            <a
              href="mailto:saadkhurshid06@gmail.com"
              className="flex items-center text-gray-800 hover:text-primary space-x-2"
            >
              <svg 
              className="w-5 h-5 fill-current stroke-current mr-2"
              width="64"
              height="64"
              viewBox="0 0 100.354 100.352" 
              xmlns="http://www.w3.org/2000/svg" 
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462  c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029  c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02  c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465  c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125  c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011  c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061  c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059  c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018  c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117  c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121  c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071  c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03  c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z   M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472  L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481  l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z"/>
              </svg>
              saadkhurshid06@gmail.com
            </a>
          </div>

          {/** PHONE */}
          <div className="pt-2 flex align-center">
            <a
              href="tel:+923450595731"
              className="flex items-center text-gray-800 hover:text-primary"
            >
              <svg 
              className="w-5 h-5 fill-current stroke-current mr-2"
              width="64"
              height="64"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M348.73,450.06a198.63,198.63,0,0,1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152C46.65,146.75,56.15,99.61,86.69,69.07l8.72-8.72a42.2,42.2,0,0,1,59.62,0l50.11,50.1a42.18,42.18,0,0,1,0,59.62l-29.6,29.59c14.19,24.9,33.49,49.82,56.3,72.63s47.75,42.12,72.64,56.31L334.07,299a42.15,42.15,0,0,1,59.62,0l50.1,50.1a42.16,42.16,0,0,1,0,59.61l-8.73,8.72C413.53,439,383.73,450.06,348.73,450.06ZM125.22,78a12,12,0,0,0-8.59,3.56l-8.73,8.72c-22.87,22.87-29.55,60-18.81,104.49,11.37,47.13,40.64,96.1,82.41,137.86s90.73,71,137.87,82.41c44.5,10.74,81.61,4.06,104.48-18.81l8.72-8.72a12.16,12.16,0,0,0,0-17.19l-50.09-50.1a12.16,12.16,0,0,0-17.19,0l-37.51,37.51a15,15,0,0,1-17.5,2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15,15,0,0,1,2.71-17.5l37.52-37.51a12.16,12.16,0,0,0,0-17.19l-50.1-50.11A12.07,12.07,0,0,0,125.22,78Z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M364.75,269.73a15,15,0,0,1-15-15,99.37,99.37,0,0,0-99.25-99.26,15,15,0,0,1,0-30c71.27,0,129.25,58,129.25,129.26A15,15,0,0,1,364.75,269.73Z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M428.15,269.73a15,15,0,0,1-15-15c0-89.69-73-162.66-162.65-162.66a15,15,0,0,1,0-30c106.23,0,192.65,86.43,192.65,192.66A15,15,0,0,1,428.15,269.73Z"/>
              </svg>
              +92 345 0595731
            </a>
          </div>

          {/** Location */}
          <div className="pt-2 flex align-center items-center">
            <a 
            href = "https://maps.google.com/?q=Khalabat+Township"
            target = "_blank"
            className="flex align-center items-center text-gray-800 hover:text-primary">
              <svg 
              className="w-5 h-5 fill-current stroke-current mr-2"
              width="64"
              height="64"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24">
                <path d="M15.92,15.23,18.35,11a7.27,7.27,0,0,0,0-7.35,7.35,7.35,0,0,0-12.72,0,7.27,7.27,0,0,0,0,7.35l2.43,4.21C4,15.71,0,17,0,19.5,0,22.59,6.22,24,12,24s12-1.41,12-4.5C24,17,20,15.71,15.92,15.23ZM7.37,4.67A5.34,5.34,0,1,1,16.62,10L12,18,7.38,10A5.31,5.31,0,0,1,7.37,4.67ZM12,22C5.4,22,2,20.25,2,19.5c0-.53,2.15-1.95,7.18-2.38l1.35,2.33a1.7,1.7,0,0,0,2.94,0l1.35-2.33C19.85,17.55,22,19,22,19.5,22,20.25,18.6,22,12,22Z"/>
                <circle cx="12" cy="7" r="2"/>
              </svg>
              K.T.S, Haripur. KP, Pakistan, 22800
            </a>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;

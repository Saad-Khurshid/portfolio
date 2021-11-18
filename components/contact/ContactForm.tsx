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
      exit={{ x: "-100vW", opacity: 0, transition: { duration: 0.6 } }}
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
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center font-medium">
              <a className="text-gray-800">saadkhurshid@rocketmail.com</a>
              <br />
              <div className="pt-2 flex items-center justify-center">
                <a
                  href="tel:+923450595731"
                  className="text-gray-800 hover:text-primary pr-4"
                >
                  +92 345 0595731
                </a>
                <svg
                  width="96"
                  height="96"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-gray-800 hover:text-primary hover:scale-110 transition transform h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.2 41.6C26.6667 56.5333 39.4667 68.8 54.4 76.8L66.1333 65.0667C67.7333 63.4667 69.8667 62.9333 71.4667 64C77.3333 66.1333 83.7333 67.2 90.6667 67.2C93.8667 67.2 96 69.3333 96 72.5333V90.6667C96 93.8667 93.8667 96 90.6667 96C40.5333 96 0 55.4667 0 5.33333C0 2.13333 2.13333 0 5.33333 0H24C27.2 0 29.3333 2.13333 29.3333 5.33333C29.3333 11.7333 30.4 18.1333 32.5333 24.5333C33.0667 26.1333 32.5333 28.2667 31.4667 29.8667L19.2 41.6Z"
                    fill="black"
                  />
                </svg>
              </div>

              <p className="leading-normal my-5">
                K.T.S, Haripur.
                <br />
                KP, Pakistan, 22800
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;

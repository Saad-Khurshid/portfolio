import React from "react";
import TechStack from "./portfolio/TechStack";

const Services = () => {
  return (
    <section className="bg-secondary subpixel-antialiased mt-24 w-full">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-800 text-center px-2 md:px-4">
        What I Do
      </h1>
      <p className="text-gray-500 max-w-prose mx-auto text-center px-2 md:px-4 ">
        I make responsive, user friendly and aesthetically pleasing web
        applications, often with complex integrations and sophisticated
        functionality.
      </p>
      <TechStack />
    </section>
  );
};

export default Services;

import React from "react";
import TechStack from "./portfolio/TechStack";

const Services = () => {
  return (
    <section className="section pt-24 bg-secondary subpixel-antialiased w-full content-center">
      <h1 className="text-4xl md:text-6xl font-bold title-font mb-2 text-gray-800 text-center px-2 md:px-4">
        What I Do
      </h1>
      <p className="flex-grow text-gray-500 max-w-prose text-center px-2 md:px-4 w-full content-center m-auto">
        I develop SAAS based aesthetically pleasing web and mobile
        applications, often with complex integrations and sophisticated
        functionality.
      </p>
      <TechStack />
    </section>
  );
};

export default Services;

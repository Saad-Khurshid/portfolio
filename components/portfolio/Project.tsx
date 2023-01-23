import React from "react";

const projects = [
  {
    name: 'FireTEXT Web App',
    description: 'FireTEXT Dashboard is a web app used to manage emergency departments and configure them to use our services.',
    imgUrl: 'https://3nxb8e.p3cdn1.secureserver.net/wp-content/uploads/2021/01/Screen-Shot-2021-01-23-at-6.02.11-PM.png',
    buttons: [
      <div className="flex justify-center">
        <a 
        href='https://firetext.net' 
        target="_blank" 
        className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-blue-500 hover:bg-primary-dark"
        >
          View 
        </a>
      </div>
    ]
  },
  {
    name: 'FireTEXT Mobile App',
    description: 'FireTEXT mobile apps are available on both app store and play store. Provided to users with functionalities such as maps, notifications, chat e.t.c',
    imgUrl: 'https://3nxb8e.p3cdn1.secureserver.net/wp-content/uploads/2021/01/firetext-mobile.png',
    buttons: [
      <div className="flex justify-center">
        <a 
        href='https://apps.apple.com/us/app/firetextapp/id1555116567' 
        target="_blank" 
        className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-8 bg-blue-500 hover:bg-primary-dark"
        >
          View on AppStore
        </a>
        <a 
        href='https://play.google.com/store/apps/details?id=com.firetext.firetextapp' 
        target="_blank" 
        className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-blue-500 hover:bg-primary-dark"
        >
          View on GooglePlay
        </a>
      </div>
    ]
  }
]

const Project = (props) => {
  return (
    <section 
    className="text-gray-800"
    style={{ width: '99vw', height: '86vh' }}
    >
      {projects.map((project, idx) => (
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              {project.name}
            </h1>
            <p className="mb-8 leading-relaxed">
              {project.description}
            </p>
            {project.buttons}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="FireTEXT Web App"
              src={project.imgUrl}
            />
          </div>
          {(idx < projects.length - 1) && 
            <div
            className="bo"
            ></div>
          }
        </div>
      ))}
    </section>
  );
};

export default Project;

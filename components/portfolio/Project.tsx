import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    name: 'FireTEXT Dispatch Solutions',
    description: 'FireTEXT was created by emergency personnel, for emergency personnel. With over 50 years combined experience as first responders, we understand the importance of reliable backup communication systems.',
    contributions: 'Led major architectural and software design decisions, driving the project from inception to a user base exceeding 100K. I am also working as a senior full-stack developer building web, mobile and desktop applications and managing cloud provisioning, servers, and deployments.',
    accomplishments: [
      'Developed responsive frontends for web, mobile and desktop applications.',
      'Built backend application with proper Auth, RBAC, Data Validations and File Handling.',
      'Deployed MongoDB three-member replica sets with Aggregation Pipelines and Change Streams, achieving a 50% increase in database query performance and reducing response time by ~25% during peak usage.',
      'Design and deploy a highly available and resilient architecture within AWS VPC, ensuring 0% downtime.',
      'Designed streaming solution supporting 100+ simultaneous audio stream 24/7.',
      'Worked on VOIP solutions.',
    ],
    images: [
      '../../firetext/ft1.png',
      '../../firetext/ft2.png',
      '../../firetext/ft3.png',
      '../../firetext/ft4.png',
      '../../firetext/ftm1.png',
      '../../firetext/ftm2.png',
      '../../firetext/ftm3.png',
    ],
    buttons: [
      // <div className="flex justify-center mt-4">
      //   <a
      //     href='https://firetext.net'
      //     target="_blank"
      //     rel="noopener noreferrer"
      //     className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg bg-blue-500 hover:bg-blue-600 transition duration-300"
      //   >
      //     View
      //   </a>
      // </div>
    ]
  },
  {
    name: 'LootPaw',
    description: 'Lootpaw is a GPS/LTE pet tracking application that integrates deeply with an external Bluetooth pet tracker. I created all of Lootpaw’s software as an independent contractor.',
    contributions: 'Creation of the mobile app (React native). Implemented AWS serverless architecture. Worked with firmware developers to deeply integrate the Bluetooth Low Energy API.',
    accomplishments: [
      'Achieved a 4.8-star rating on both App Store and Google Play.',
      'Integrated Firebase Cloud Messaging for real-time notifications.',
      'Implemented offline caching, reducing data usage by 20%.',
    ],
    images: [
      '../../lootpaw/lootpaw1.png',
      '../../lootpaw/lootpaw2.png',
      '../../lootpaw/lootpaw3.png',
    ]
  },
  {
    name: 'Hyloq',
    description: 'Hyloq is a programmatic ad bidder and geofence advertising platform. Marketers can create and enrich their audiences based on physical location data that updates daily. Hyloq also allows you to create campaigns, ad groups, and creatives and serve ads to audiences on the web, mobile, and Smart TVs. I was a top contributor to the development of Hyloq through my agency, Concept 11.',
    contributions: 'Initially worked on various small projects, gradually transitioning to Data Engineering to design ETL Jobs on AWS to handle extraction and transformation of 100GBs of data per day. Later, I also worked on development of front-end and back-end features relating to data processing and visualization.',
    accomplishments: [
      'Designed a data solution to query Terra Bytes of data under 2 seconds.',
      'Reduced OLAP (analytical queries) latency by 90% and querying cost to almost 99%.',
      'Developed front-end and backend for geofencing functionalities to query relevant data based on geohash efficiently.',
    ],
    images: [
      '../../hyloq/hyloq3.png',
      '../../hyloq/hyloq1.png',
      '../../hyloq/hyloq2.png',
    ]
  }
];

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="text-gray-800 body-font">
      {projects.map((project, idx) => (
        <div key={idx} className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-white shadow-lg rounded-lg my-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {project.name}
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              {project.description}
            </p>
            <div className="mb-4 text-left w-full">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">How I Contributed</h2>
              <p className="text-gray-700">{project.contributions}</p>
            </div>
            <div className="mb-4 text-left w-full">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Accomplishments</h2>
              <ul className="list-disc list-inside text-gray-700">
                {project.accomplishments.map((accomplishment, index) => (
                  <li key={index} className="mb-1">{accomplishment}</li>
                ))}
              </ul>
            </div>
            {project.buttons}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Slider {...settings}>
              {project.images.map((imageUrl, index) => (
                <div key={index} className="flex justify-center items-center h-80">
                  <img
                    className="object-contain h-full w-full rounded-lg cursor-pointer"
                    alt={`${project.name} Screenshot ${index + 1}`}
                    src={imageUrl}
                    onClick={() => window.open(imageUrl, '_blank')}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;

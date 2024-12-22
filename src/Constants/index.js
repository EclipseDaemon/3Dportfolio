import { jibe, purebiites, equinox } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Jibe",
    icon: jibe,
    iconBg: "#accbe1",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "PureBiites",
    icon: purebiites,
    iconBg: "#fbc3bc",
    points: [
      "Developing and maintaining the PureBiites website using  HTML, and CSS.",
      "Implementing real-time customer tracking and personalized service features for the platform.",
      "Ensuring responsive design and mobile optimization for an enhanced user experience.",
      "Collaborating with marketing teams to integrate promotional content and user engagement tools.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Equinox Enviormentals",
    icon: equinox,
    iconBg: "#b7e4c7",
    points: [
      "Developed the Equinox Environments website using React.js, HTML, CSS, and Bootstrap for a modern and responsive design.",
      "Ensured cross-browser compatibility and optimized the website for seamless performance across devices.",
      "Integrated interactive features and user-friendly navigation to showcase the company's services effectively.",
      "Collaborated with the team to deliver a professional website aligned with the company’s goals and branding.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Inventory System",
    description:
      "This is a full-stack web application for managing a car inventory. The application allows users to add, view, and delete car entries. The frontend is built with React, and the backend is powered by Express.js, with data stored in MongoDB Atlas.",
    link: "https://github.com/EclipseDaemon/RevUpYourcar",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Movie-Browsing-and-Favorites-App",
    description:
      "This web application allows users to browse a curated list of popular movies, search for specific movies, and select their favorite movies. The application saves the user's selected movies in local storage, ensuring that favorites persist across sessions.",
    link: "https://github.com/EclipseDaemon/Movie-Browsing-and-Favorites-App",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "LinkedIn Reply AI",
    description:
      "LinkedIn Reply AI is a Chrome extension that helps users quickly generate and insert replies into LinkedIn messages with ease.",
    link: "https://github.com/EclipseDaemon/LinkedInReplyAI",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Forecast App",
    description:
      "A responsive weather application built using React that allows users to fetch real-time weather data for any city. This project uses the OpenWeatherMap API to display current temperature, humidity, wind speed, and other weather-related information.",
    link: "https://github.com/EclipseDaemon/WeatherApp",
  },
];

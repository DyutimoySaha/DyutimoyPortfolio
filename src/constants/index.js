import { Link } from "react-router-dom";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  ChatGPT,
  VoiceAI,
  ibook,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "MERN",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Introduction Echomind is a voice-integrated AI chat project leveraging Natural Language Processing (NLP) and AI technologies, specifically OpenAI's GPT model, to create an advanced conversational system. By integrating Eleven Labs for text-to-speech conversion and utilizing Python with FastAPI for backend development, this project aims to offer a seamless voice interaction experience. The frontend is built using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring a robust and scalable interface. With features like multi-language support and secure communication via bcrypt encryption, Echomind is designed to enhance user interaction, providing a natural and engaging way to communicate with AI.",
    name: "Journal of Xidian University",
    designation: "    Paper ID - JXU-R11224",
    company: "JXU",
    image: "",
  },
];

const projects = [
  {
    name: "Chat-GPT(Echomind)",
    description:
      "Echomind represents a contemporary solution for voice-enabled interactions with ChatGPT, leveraging present day technologies to supply a user-pleasant and secure experience in voice-driven programs. This mission showcases the mixing of AI-pushed conversational abilties with modern-day internet development practices, putting a brand new popular for interactive voice packages in diverse domains.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "orange-text-gradient",
      },
    ],
    image: ChatGPT,
    source_code_link: "https://github.com/",
  },
  {
    name: "ibook Next Genaration Scoail media Platfrom",
    description:
      "ibook is a Social media Platfrom where user can create post , save post , like post and many more .This is made with user friendly UI/UX ",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite.io",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ibook,
    source_code_link: "https://github.com/",
  },
  {
    name: "Voice AI",
    description:
      "Natural Language Processing (NLP) and present day net technologies in the MERN stack atmosphere. Built using Python for NLP competencies, FastAPI for efficient API development, and MongoDB for scalable data control ",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "Fast API",
        color: "green-text-gradient",
      },

      {
        name: "NLP",
        color: "red-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: VoiceAI,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Project, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "95",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "CSS3",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Materializcss",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "R-Bootstrap",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: Project[] = [
  { 
    name: "RR-Cloth",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/RR-cloth.png",
    deployed_url: "https://rr-cloth.herokuapp.com/",
    github_url: "https://github.com/ashur-k/RR-Clothes",
    category: ["react", "django"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Pro-Shop",
    image_path: "/images/pro-shop.jpg",
    deployed_url: "https://proshop-ash.herokuapp.com/#/",
    github_url: "https://github.com/ashur-k/proshop-ash",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    name: "Ash-Crown-Online Shopping",
    image_path: "/images/crwn.jpg",
    deployed_url: "https://ash-crwn-live.herokuapp.com/",
    github_url: "https://github.com/ashur-k/crwn-clothing-v1-follow-along",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "Jaxx Productions",
    image_path: "/images/jaxx.jpg",
    deployed_url: "https://jacxx-productions.herokuapp.com/",
    github_url: "https://github.com/ashur-k/E-Commerce-AND-Video-Subscription",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Car Sales Showroom",
    image_path: "/images/car-sales.png",
    deployed_url: "http://car-sales-showroom.herokuapp.com/index",
    github_url: "https://github.com/ashur-k/CI-MS3-Car-Showroom",
    category: ["flask", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "Bend River Media",
    image_path: "/images/benmedia.png",
    deployed_url: "https://ashur-k.github.io/Data-Centric-Milestone-Project/",
    github_url: "https://github.com/ashur-k/Data-Centric-Milestone-Project",
    category: ["react"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    name: "Monster Rolodex",
    image_path: "/images/rolodex.jpg",
    deployed_url: "https://ashur-k.github.io/monsters-rolodex/",
    github_url: "https://github.com/ashur-k/monsters-rolodex",
    category: ["react"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "Boutique Ado",
    image_path: "/images/Boutique_ado.png",
    deployed_url: "https://boutique-ado-ash.herokuapp.com/",
    github_url: "https://github.com/ashur-k/bouttique_ado_v1",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
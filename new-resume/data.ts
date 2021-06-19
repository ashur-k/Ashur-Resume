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
      "RR-Cloth is a fully functional ecommerce site. This site is able to sell products including all its various variants. The site has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS).The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.",
    image_path: "/images/RR-cloth.png",
    deployed_url: "https://rr-cloth.herokuapp.com/",
    github_url: "https://github.com/ashur-k/RR-Clothes",
    category: ["django"],
    key_techs: ["Django", "AWS", "Heroku", "Stripe", "AJAX"],
  },
  {
    name: "Pro-Shop",
    image_path: "/images/pro-shop.jpg",
    deployed_url: "https://proshop-ash.herokuapp.com/#/",
    github_url: "https://github.com/ashur-k/proshop-ash",
    category: ["react", "django"],
    description:
      "Pro-shop is an ecommerce site which has been developed using HTML5,  CSS3, React, React-Redux, Postgres-SQL, Python-Django Rest Framework. It is hosted using heroku and amazon web services (AWS). The site is implemented with an order/checkout payment system using paypal.",
    key_techs: ["React", "Redux", "Bootstrap", "Django", "Postgres"],
  },

  {
    name: "Ash-Crown-Online Shopping",
    image_path: "/images/crwn.jpg",
    deployed_url: "https://ash-crwn-live.herokuapp.com/",
    github_url: "https://github.com/ashur-k/crwn-clothing-v1-follow-along",
    category: ["react", ],
    description:
      "Ash-Crown is an ecommerce site which has been developed using HTML5, CSS3, React, React-Redux, Firebase. It is hosted using heroku. The site is implemented with an order/checkout payment system using stripe. Site is purely built in React and its an ongoing project which I am hoping to compltely finish soon",
    key_techs: [
      "React",
      "Redux",
      "Firebase",
      "sass css",
    ],
  },

  {
    name: "Jaxx Productions",
    image_path: "/images/jaxx.jpg",
    deployed_url: "https://jacxx-productions.herokuapp.com/",
    github_url: "https://github.com/ashur-k/E-Commerce-AND-Video-Subscription",
    category: ["django", "JavaScript"],
    description:
      " Jaxx Productions is built using Html, CSS, JavaScript and and Django",
    key_techs: ["Django", "JavaScript"],
  },

  {
    name: "Car Sales Showroom",
    image_path: "/images/car-sales.png",
    deployed_url: "http://car-sales-showroom.herokuapp.com/index",
    github_url: "https://github.com/ashur-k/CI-MS3-Car-Showroom",
    category: ["flask", "mongo"],
    description:
      "Car Sales Showroom is a management system where Admin can  manage and book appointments for people who are interested in buying a car. A site user can find a car that they are interested  in and then they can book a test drive for that car. Project has been developed using HTML5, CSS3, json, JavaScript, jQuery, Mongodb, Python-Flask and materializecss. Project is hosted using heroku",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "Bend River Media",
    image_path: "/images/benmedia.png",
    deployed_url: "https://ashur-k.github.io/Data-Centric-Milestone-Project/",
    github_url: "https://github.com/ashur-k/Data-Centric-Milestone-Project",
    category: ["JavaScript"],
    description:
      " Bend River Media has been developed for a local photographer and videographer. The site has been developed using HTML5, CSS3, and bootstrap. Project is hosted using GitHub. The site is very detailed and comprehensive and shows all aspects of a business site.",
    key_techs: ["JavaScript"],
  },
  {
    name: "Monster Rolodex",
    image_path: "/images/rolodex.jpg",
    deployed_url: "https://ashur-k.github.io/monsters-rolodex/",
    github_url: "https://github.com/ashur-k/monsters-rolodex",
    category: ["react"],
    description:
      'Its built using react and hosted using github for learning and training.',
    key_techs: [
      "React",
      "Sass css",
    ],
  },
  {
    name: "Boutique Ado",
    image_path: "/images/Boutique_ado.png",
    deployed_url: "https://boutique-ado-ash.herokuapp.com/",
    github_url: "https://github.com/ashur-k/bouttique_ado_v1",
    category: ["django"],
    description:
    "Boutique-ado is an ecommerce site which has been developed using HTML5, CSS3, JavaScript, jQuery, Postgres-SQL, Python-Django. It is hosted using heroku and amazon web services (AWS). The site is implemented with an order/checkout payment system using Stripe. For reliability stripe webhooks are implemented to make sure the site doesn’t lose any order information if there is a system failure at the user end while making a payment.",
    key_techs: ["django", "Bootstrap"],
  },
];
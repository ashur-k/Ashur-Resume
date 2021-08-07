import { IconType } from "react-icons";

export interface Service {
  id: Number;
  Icon: string;
  title: string;
  about: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Project {
  id:number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}


export type Category = "react" | "nextjs" | "typescript" | "flask" | "django" | "mongo" | "main-projects" ;
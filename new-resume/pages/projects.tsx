import { useState} from 'react'
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectData } from '../data'
import { Category } from '../types';
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations';

const Projects = () => {
    const [projects, setProjects] = useState(projectData);
    const [active, setActive] = useState("all")

    const handleFilterCategory = (category: Category | 'all') => {
        if(category === "all"){
            setProjects(projectData)
            setActive(category);
            return;
        }
        const newArray = projectData.filter((project)=> 
            project.category.includes(category)
        );
        setProjects(newArray);
        setActive(category)
    }
    return (
        <motion.div variants={routeAnimation} initial="inital" animate="animate" exit="exit">
            <div className="px-5 py-2 overflow-y-scroll" style={{ height: "5vh" }}>
            <ProjectsNavbar
                handlerFilterCategory={handleFilterCategory}
                active={active}
            />
            </div>

            <motion.div className="relative grid grid-cols-12 gap-4 my-3"
                variants={stagger} initial="initial" animate="animate"
            >
                {
                projects.map((project)=> (                        
                    <motion.div 
                        key={project.name}  
                        className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                        variants={fadeInUp}
                        >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Projects

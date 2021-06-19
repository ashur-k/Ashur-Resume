import { useState} from 'react'
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectData } from '../data'
import { Category } from '../types';

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
        <div>
            <div className="px-5 py-2 overflow-y-scroll" style={{ height: "5vh" }}>
            <ProjectsNavbar
                handlerFilterCategory={handleFilterCategory}
                active={active}
            />
            </div>
            <div className="relative grid grid-cols-12 gap-4 my-3">
                {
                projects.map((project)=> (                        
                    <div key={project.name}  
                    className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
                        <ProjectCard project={project} key={project.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects

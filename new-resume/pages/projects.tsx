import { useState} from 'react'
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
// import { projects as projectData } from '../data'
import { Category } from '../types';
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations';
import { Project } from '../types';


const Projects = ({backendProjects}) => {

    const projectData: Project[] = backendProjects

    const [projects, setProjects] = useState(projectData);
    const [active, setActive] = useState("all")
    const [ showDetail, setShowDetail ] = useState<number|null>(null)

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

            <motion.div className="relative grid grid-cols-12 gap-4 my-3 m-auto"
                style={{ padding:"25px", marginBottom:"100%" }}
                variants={stagger} initial="initial" animate="animate"
            >
                {
                projects.map((project)=> (                        
                    <motion.div 
                        key={project.name}  
                        className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                        variants={fadeInUp}
                        >
                        <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export const getStaticProps = async({params}) => {

    const res = await fetch('https://ash-pizza-website.herokuapp.com/api/projects/');
    const backendProjects = await res.json();

    return {
      props: {
        backendProjects
        },
        revalidate:5
      }
    }


export default Projects

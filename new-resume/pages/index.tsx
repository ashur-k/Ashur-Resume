import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { Service } from "../types";
import { motion } from 'framer-motion'


const Home = ({skills}) => {
  const newSkills: Service[] = skills

  return (
    <motion.div 
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation} initial="inital" animate="animate" exit="exit"
    >
      <h5 className="my-3 text-base font-medium">
        I am Full Stack Web Developer, qualified with a Diploma 
        in Software Development from Code Institute (CI) 
        and software engineering degree from Pakistan 
        institute of management science and technology (PIMSAT). 
        I have strong understanding of object-oriented programming and more than two years
        experience of web-development. I have developed skills set to become a good full-stack
        developer.
        I am competitive, hard working and have strong work ethics. I enjoy cooking, 
        baking and inviting firends for meals.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>
        <motion.div className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger} initial="initial" animate="animate"
        >
            {
              newSkills.map(service=> (
                <motion.div 
                  variants={fadeInUp}
                  className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
                  key={service.title} 
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))
            }
        </motion.div>
      </div>
    </motion.div>
  )
}

export const getStaticProps = async({params}) => {

  const res = await fetch('https://ash-pizza-website.herokuapp.com/api/skills/');
  const skills: Service[] = await res.json();

  // console.log('MyData', skills)
  
  return {
    props: {
      skills
    },
    revalidate:5
    }
  }


export default Home

import { GetServerSideProps, GetStaticPropsContext, NextPage } from 'next'
import { services } from '../data'
import ServiceCard from '../components/ServiceCard'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'

const Home = ({props}) => {
 
  return (
    <motion.div 
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation} initial="inital" animate="animate" exit="exit"
    >
      <h5 className="my-3 text-base font-medium">
        Full Stack Web Developer, qualified with a Diploma 
        in Software Development from Code Institute (CI) 
        and software engineering degree from Pakistan 
        institute of management science and technology (PIMSAT). 
        Strong understanding of object-oriented programming and 18 
        months experience of web-development. I am developing my 
        skills set to be a great asset for my employer.  
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
              services.map(service=> (
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

export default Home

export const getServerSideProps = async (context:GetServerSideProps) => {
  
  const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json()

  return { props:{ endpoint: process.env.VERCEL_URL, } }
} 

// export const getStaticProps = async (
  
//   context:GetStaticPropsContext
  
//   ) => {
  
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   return {
//     props:{
//       services: data.services,
//     }
//   }
// } 
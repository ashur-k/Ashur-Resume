import Bar from "../components/Bar";
import React from 'react'
// import { languages, tools } from "../data";
import { motion } from 'framer-motion'
import {fadeInUp, routeAnimation} from '../animations'
import { Skill } from "../types";

const Resume = ({props}) => {

  const newLanguages: Skill[] = props.languages
  const newTools: Skill[] = props.tools

    return (
        <motion.div className="px-6 py-2" 
        variants={routeAnimation} initial="inital" animate="animate" exit="exit">
        {/* //! Education & Experience */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div 
            variants={fadeInUp} initial="initial" animate="animate" 
          >
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                Full Stack Web Development 
              </h5>
              <p className="font-semibold">Software Development diploma CI. Accredited by the Napier university, Edinburgh  (2019-2020)</p>
              <h5 className="my-2 text-xl font-bold">
                Computer Science Engineering
              </h5>
              <p className="font-semibold">Preston Institute of Mangement Science and Technology (2001-2005)</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp} initial="initial" animate="animate" 
          >
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            <div className="">
                <p className="my-3">Stockton Baptist Church member of audio / visual team	2011 – 2019</p>
                <p className="my-3">IT teacher and administrator	2007 – 2010</p>
                <p className="my-3">Parttime business, running computer gaming hub	2007 – 2010</p>
                <p className="my-3">Parttime hardware software repair troubleshooting 2007 – 2010</p>
                <p className="my-3">Assistant to manager garment company 2005 – 2007</p>
                <p className="my-3">Assistant School Teacher 2001 – 2005</p>
            </div>
          </motion.div>
        </div>
  
        {/*Languages & Tools */}
        <div className="grid gap-9 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
            <div className="my-2">
              {newLanguages.map((language, i) => (
                <Bar value={language} key={i} />
              ))}
            </div>
          </div>
  
          <div>
            <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
            <div className="my-2">
              {newTools.map((tool, i) => (
                <Bar value={tool} key={i} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    )
}
export default Resume

Resume.getInitialProps = async () => {


  const res = await fetch('https://ash-pizza-website.herokuapp.com/api/languages/');
  const languages = await res.json();
  const res1 = await fetch(`https://ash-pizza-website.herokuapp.com/api/tools/`);
  const tools = await res1.json();

  return {
    props:{
      languages: languages,
      tools: tools,
    },
    revalidate:10 
  };
};
import React from 'react'
import { FunctionComponent, useState } from "react"
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { Project } from "../types"
import { MdClose } from "react-icons/md";
import Image from 'next/image';
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animations';


const ProjectCard: FunctionComponent<{
    project: Project;
    showDetail:null|number,
    setShowDetail:(id:null|number) => void;
  }> = ({
    project: {
      name,
      image_path,
      category,
      deployed_url,
      description,
      github_url,
      key_techs,
      id,
    },
    showDetail,
    setShowDetail,
  }) => {
    return (
        <motion.div variants={stagger} initial="initial" animate="animate" className="h-full min-h-full">
           <motion.div variants={fadeInUp}>
            <Image
                src={image_path} 
                alt={name} 
                className="cursor-pointer"
                onClick={() => setShowDetail(id)}
                width="240px"
                height="140px"
                layout="responsive"
                />
            </motion.div>
           <p className="my-2 text-center">{name}</p>
           {
               showDetail === id && (
                <div className="absolute top-0 left-0 z-10 grid w-full h-auto min-h-full p-2 md:p-10 rounded-lg text-black bg-gray-100 md:grid-cols-1 gap-x-12 dark:text-white dark:bg-dark-100">
                    <motion.div variants={fadeInUp} >
                        <Image
                            src={image_path} 
                            alt={name}
                            width="300px"
                            height="200px"
                            layout="responsive"
                        />
                    <motion.div className="my-10"
                        variants={stagger} initial="initial" animate="animate" 
                    >
                        <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
                        <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
                        <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {
                                key_techs.map((tech, index)=>(
                                <span key={index} className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm">
                                    {tech}
                                </span>
                                ))
                            }
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="flex justify-center my-4 space-x-3"
                        variants={fadeInUp}
                    >
                            <a 
                                target="_blank"
                                rel="noreferrer"
                                href={github_url}
                                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                            >
                                <AiFillGithub /> <span>GitHub</span>
                            </a>
                            <a  
                                target="_blank"
                                rel="noreferrer"
                                href={deployed_url}
                                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                            >
                                <AiFillProject /> <span>Project</span>
                            </a>
                        </motion.div>
                    </motion.div>
                
                    <button 
                        onClick={() =>setShowDetail(null)}
                        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                    >
                        <MdClose size={30} />
                    </button>
            </div>
                )
            }
        </motion.div>
    )
}

export default ProjectCard

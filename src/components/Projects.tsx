"use client"


import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import AnimatedSection from './AnimatedSection';
import { GithubIcon, ExternalLinkIcon } from './icons';

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects: React.FC = () => {
    return (
        <AnimatedSection id="projects">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-12 font-serif">
                Projects
            </h2>
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {PROJECTS_DATA.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden shadow-lg flex flex-col group"
                    >
                        <div className="overflow-hidden relative">
                             <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                       
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
                            <p className="text-gray-400 mt-2 text-sm flex-grow">{project.description}</p>
                            
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                         <div className="p-6 pt-0 mt-auto flex justify-end items-center space-x-4">
                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <GithubIcon className="w-6 h-6" />
                                </a>
                            )}
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <ExternalLinkIcon className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </AnimatedSection>
    );
};

export default Projects;

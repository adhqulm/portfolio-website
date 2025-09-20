
"use client"


import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import AnimatedSection from './AnimatedSection';
import { CheckIcon } from './icons';

const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const Experience = () => {
  return (
    <AnimatedSection id="experience">
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-12 font-serif">
        Professional Experience
      </h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gray-700"></div>
        <motion.div 
            className="space-y-12"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          {EXPERIENCE_DATA.map((job, index) => (
            <motion.div 
                key={index} 
                className="relative flex items-start"
                variants={itemVariants}
            >
              <div className="hidden md:block w-1/2 pr-8 text-right">
                {index % 2 === 0 && (
                    <>
                        <h3 className="text-xl font-bold text-cyan-400">{job.role}</h3>
                        <p className="text-gray-400">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.period}</p>
                    </>
                )}
              </div>
               <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full ring-8 ring-gray-900 z-10"></div>
               <div className="w-full md:w-1/2 md:pl-8">
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/50">
                        <div className="md:hidden mb-2">
                           <h3 className="text-xl font-bold text-cyan-400">{job.role}</h3>
                           <p className="text-gray-400">{job.company}</p>
                           <p className="text-sm text-gray-500">{job.period}</p>
                        </div>
                         <div className="hidden md:block">
                            {index % 2 !== 0 && (
                                <>
                                    <h3 className="text-xl font-bold text-cyan-400">{job.role}</h3>
                                    <p className="text-gray-400">{job.company}</p>
                                    <p className="text-sm text-gray-500">{job.period}</p>
                                </>
                            )}
                        </div>
                        <ul className="mt-4 space-y-2 text-gray-400">
                        {job.description.map((point, i) => (
                            <li key={i} className="flex items-start">
                                <CheckIcon className="w-4 h-4 mr-2 mt-1 text-cyan-400 flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;

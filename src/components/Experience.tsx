"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import AnimatedSection from './AnimatedSection';
import { CheckIcon, ExternalLinkIcon } from './icons';
import { useTranslation } from '../context/LanguageContext';

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
  const t = useTranslation();

  return (
    <AnimatedSection id="experience">
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-12 font-serif">
        {t.experience.heading}
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
          {EXPERIENCE_DATA.map((job, index) => {
            const translated = t.experience.data[index];
            const role = translated?.role ?? job.role;
            const company = translated?.company ?? job.company;
            const period = translated?.period ?? job.period;
            const description = translated?.description ?? job.description;

            return (
              <motion.div
                  key={index}
                  className="relative flex items-start"
                  variants={itemVariants}
              >
                <div className="hidden md:block w-1/2 pr-8 text-right">
                  {index === 0 && (
                      <>
                          <h3 className="text-xl font-bold text-cyan-400">{role}</h3>
                          <p className="text-gray-400">{company}</p>
                          <p className="text-sm text-gray-500">{period}</p>
                      </>
                  )}
                </div>
                 <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full ring-8 ring-gray-900 z-10"></div>
                 <div className="w-full md:w-1/2 md:pl-8">
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg border border-gray-700/50 overflow-hidden">
                          {job.imageUrl && (
                              <img src={job.imageUrl} alt={job.company} className="w-full h-24 object-cover opacity-80" />
                          )}
                          <div className="p-6">
                          <div className={index === 0 ? "md:hidden mb-2" : "mb-2"}>
                             <h3 className="text-xl font-bold text-cyan-400">{role}</h3>
                             <p className="text-gray-400">{company}</p>
                             <p className="text-sm text-gray-500">{period}</p>
                          </div>
                          <ul className="space-y-2 text-gray-400">
                          {description.map((point, i) => (
                              <li key={i} className="flex items-start">
                                  <CheckIcon className="w-4 h-4 mr-2 mt-1 text-cyan-400 flex-shrink-0" />
                                  <span>{point}</span>
                              </li>
                          ))}
                          </ul>
                          {job.companyUrl && (
                              <div className="mt-4 flex justify-end">
                                  <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                      <ExternalLinkIcon className="w-6 h-6" />
                                  </a>
                              </div>
                          )}
                          </div>
                      </div>
                  </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;

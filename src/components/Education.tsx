"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../constants';
import AnimatedSection from './AnimatedSection';

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Education = () => {
    return (
        <AnimatedSection id="education">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-12 font-serif">
                Education & Certifications
            </h2>
            <motion.div
                className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {EDUCATION_DATA.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg"
                    >
                        <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider mb-2">Education</p>
                        <h3 className="text-xl font-bold text-gray-100">{edu.degree}</h3>
                        <p className="text-gray-400 mt-1">{edu.institution}</p>
                        <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
                    </motion.div>
                ))}

                {CERTIFICATIONS_DATA.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg ${index === CERTIFICATIONS_DATA.length - 1 && (EDUCATION_DATA.length + CERTIFICATIONS_DATA.length) % 2 === 1 ? 'md:col-span-2 md:max-w-sm md:mx-auto' : ''}`}
                    >
                        <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider mb-2">Certification</p>
                        <h3 className="text-xl font-bold text-gray-100">{cert.name}</h3>
                        <p className="text-gray-400 mt-1">{cert.issuer}</p>
                        <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
                    </motion.div>
                ))}
            </motion.div>
        </AnimatedSection>
    );
};

export default Education;

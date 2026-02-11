"use client"

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useTranslation } from '../context/LanguageContext';

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
    const t = useTranslation();
    const eduData = t.education.data;
    const certData = t.education.certifications;
    const totalItems = eduData.length + certData.length;

    return (
        <AnimatedSection id="education">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-12 font-serif">
                {t.education.heading}
            </h2>
            <motion.div
                className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {eduData.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg"
                    >
                        <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider mb-2">{t.education.eduLabel}</p>
                        <h3 className="text-xl font-bold text-gray-100">{edu.degree}</h3>
                        <p className="text-gray-400 mt-1">{edu.institution}</p>
                        <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
                    </motion.div>
                ))}

                {certData.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg ${index === certData.length - 1 && totalItems % 2 === 1 ? 'md:col-span-2 md:max-w-sm md:mx-auto' : ''}`}
                    >
                        <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider mb-2">{t.education.certLabel}</p>
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

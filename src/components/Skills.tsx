"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { PROGRAMMINGLANGUAGES, FRAMEWORKS, CORE_SKILLS, LANGUAGES, DATABASES, CLOUD, API } from '../constants';
import AnimatedSection from './AnimatedSection';

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const SkillPill: React.FC<{ name: string }> = ({ name }) => (
    <motion.div
        variants={itemVariants}
        className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 font-medium whitespace-nowrap"
    >
        {name}
    </motion.div>
);

const Skills: React.FC = () => {
    return (
        <AnimatedSection id="skills">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-12 font-serif">
                Technology & Skills
            </h2>

            <div className='mb-12'>
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">Core Skills</h3>
                <motion.div
                    className="flex flex-wrap justify-center gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {CORE_SKILLS.map((skill) => <SkillPill key={skill} name={skill} />)}
                </motion.div>
            </div>

            <div className='mb-12'>
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">Programming Languages</h3>
                <motion.div
                    className="flex flex-wrap justify-center gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {PROGRAMMINGLANGUAGES.map((tech) => <SkillPill key={tech} name={tech} />)}
                </motion.div>
            </div>

            <div className='mb-12'>
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">Frameworks & Libraries</h3>
                <motion.div
                    className="flex flex-wrap justify-center gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {FRAMEWORKS.map((tech) => <SkillPill key={tech} name={tech} />)}
                </motion.div>
            </div>

            <div className='mb-12'>
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">Web & API's</h3>
                <motion.div
                    className="flex flex-wrap justify-center gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {API.map((tech) => <SkillPill key={tech} name={tech} />)}
                </motion.div>
            </div>
            <div className="space-y-12" />

            <div className='mb-12'>
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">Databases</h3>
                <motion.div
                    className="flex flex-wrap justify-center gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {DATABASES.map((tech) => <SkillPill key={tech} name={tech} />)}
                </motion.div>
            </div>
                <div className='mb-12'>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">Cloud & DevOps</h3>
                    <motion.div
                        className="flex flex-wrap justify-center gap-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {CLOUD.map((tech) => <SkillPill key={tech} name={tech} />)}
                    </motion.div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">Languages</h3>
                    <motion.div
                        className="flex flex-wrap justify-center gap-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {LANGUAGES.map((lang) => <SkillPill key={lang} name={lang} />)}
                    </motion.div>
                </div>
        </AnimatedSection>
    );
};

export default Skills;

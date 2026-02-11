"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { PROGRAMMINGLANGUAGES, FRAMEWORKS, DATABASES, CLOUD, API } from '../constants';
import AnimatedSection from './AnimatedSection';
import { useTranslation } from '../context/LanguageContext';

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
    const t = useTranslation();

    return (
        <AnimatedSection id="skills">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-12 font-serif">
                {t.skills.heading}
            </h2>

            <div className='mb-12'>
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">{t.skills.coreSkills}</h3>
                <motion.div
                    className="flex flex-wrap justify-center gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {t.skills.coreSkillsList.map((skill) => <SkillPill key={skill} name={skill} />)}
                </motion.div>
            </div>

            <div className='mb-12'>
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">{t.skills.programmingLanguages}</h3>
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
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">{t.skills.frameworks}</h3>
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
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">{t.skills.webApi}</h3>
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
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">{t.skills.databases}</h3>
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
                    <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">{t.skills.cloudDevops}</h3>
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
                    <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">{t.skills.languages}</h3>
                    <motion.div
                        className="flex flex-wrap justify-center gap-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {t.skills.languagesList.map((lang) => <SkillPill key={lang} name={lang} />)}
                    </motion.div>
                </div>
        </AnimatedSection>
    );
};

export default Skills;

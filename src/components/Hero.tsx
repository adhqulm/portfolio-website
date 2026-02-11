"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../constants';
import { PhoneIcon, MailIcon, LocationIcon, GithubIcon} from './icons';
import { useTranslation } from '../context/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const { contact, social } = PROFILE_DATA;
  const t = useTranslation();

  return (
    <motion.section
        id="home"
        className="min-h-screen flex flex-col justify-center text-center -mt-[64px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      <motion.h1
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-100"
        // @ts-ignore
        variants={itemVariants}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {t.name}
        </span>
      </motion.h1>
      <motion.h2
        className="mt-4 text-xl md:text-2xl font-semibold text-cyan-300 tracking-wider"
        // @ts-ignore
        variants={itemVariants}
      >
        {t.profile.title}
      </motion.h2>

      <motion.div
        className="mt-8 flex justify-center items-center space-x-4 md:space-x-6 text-gray-400"
        // @ts-ignore
        variants={itemVariants}
      >
        <div className="flex items-center space-x-2">
            <MailIcon className="w-5 h-5" />
            <a href={`mailto:${contact.email}`} className="hover:text-cyan-400 transition-colors duration-300 text-sm">{contact.email}</a>
        </div>
        <div className="flex items-center space-x-2">
            <LocationIcon className="w-5 h-5" />
            <span className="text-sm">{t.profile.location}</span>
        </div>
      </motion.div>
      <motion.div
        className="mt-6 flex justify-center items-center space-x-6"
        // @ts-ignore
        variants={itemVariants}
      >
        <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <GithubIcon className="w-7 h-7" />
        </a>
         <a href={`tel:${contact.phone}`} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
            <img src="/flags/georgia.png" alt="GE" className="w-6 h-6 rounded-sm object-cover" />
            <span className="text-sm">{contact.phone}</span>
        </a>
        {contact.phone2 && (
          <a href={`tel:${contact.phone2}`} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
              <img src="/flags/russia.png" alt="RU" className="w-6 h-6 rounded-sm object-cover" />
              <span className="text-sm">{contact.phone2}</span>
          </a>
        )}
      </motion.div>
      <motion.div
        className="mt-8 flex justify-center"
        // @ts-ignore
        variants={itemVariants}
      >
        <a
          href="/kristina-ganina.pdf"
          download
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-colors duration-300 text-sm"
        >
          {t.hero.downloadCv}
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

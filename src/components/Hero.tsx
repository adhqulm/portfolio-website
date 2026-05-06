"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA, PROJECTS_DATA, EXPERIENCE_DATA } from '../constants';
import { MailIcon, LocationIcon, GithubIcon, LinkedInIcon } from './icons';
import { useLanguage, useTranslation } from '../context/LanguageContext';

const useTypingCycle = (titles: string[]) => {
  const [displayed, setDisplayed] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const delay = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex(i => (i + 1) % titles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, titleIndex, titles]);

  return displayed;
};

const useCountUp = (target: number, duration = 1200) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
};

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
  const { language } = useLanguage();
  const t = useTranslation();
  const cvHref = language === "ru" ? "/кристина-ганина.pdf" : "/kristina-ganina.pdf";

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  const yearsExp = new Date().getFullYear() - 2024;
  const projectCount = PROJECTS_DATA.length;
  const companyCount = EXPERIENCE_DATA.length;

  const animYears = useCountUp(yearsExp);
  const animProjects = useCountUp(projectCount);
  const animCompanies = useCountUp(companyCount);

  const typedTitle = useTypingCycle(t.profile.titles);

  const stats = [
    { value: animYears, suffix: "+", label: t.hero.statsYears, target: yearsExp },
    { value: animProjects, suffix: "+", label: t.hero.statsProjects, target: projectCount },
    { value: animCompanies, suffix: "", label: t.hero.statsCompanies, target: companyCount },
  ];

  const CHART_HEIGHT = 96;
  const maxTarget = Math.max(...stats.map(s => s.target));
  const tickStep = Math.ceil(maxTarget / 4);
  const ticks = Array.from({ length: Math.ceil(maxTarget / tickStep) + 1 }, (_, i) => i * tickStep);
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  return (
    <motion.section
        id="home"
        className="min-h-screen flex flex-col justify-center text-center pt-16 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      <motion.h1
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-100"
        // @ts-ignore
        variants={itemVariants}
      >
        <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500">
            {t.name}
        </span>
      </motion.h1>
      <motion.h2
        className="mt-4 text-xl md:text-2xl font-semibold text-cyan-300 tracking-wider"
        // @ts-ignore
        variants={itemVariants}
      >
        {typedTitle}
        <span className="animate-pulse">|</span>
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
        {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <LinkedInIcon className="w-7 h-7" />
            </a>
        )}
         <a href={`tel:${contact.phone}`} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2">
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
          href={cvHref}
          download
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-colors duration-300 text-sm"
        >
          {t.hero.downloadCv}
        </a>
      </motion.div>

      <motion.div
        className="mt-16 flex justify-center"
        // @ts-ignore
        variants={itemVariants}
      >
        <div className="flex items-start gap-2">
          {/* Y-axis tick labels */}
          <div className="relative shrink-0" style={{ height: CHART_HEIGHT }}>
            {ticks.map(tick => (
              <span
                key={tick}
                className="absolute right-1 text-[10px] text-gray-600 -translate-y-1/2"
                style={{ bottom: `${(tick / maxTarget) * CHART_HEIGHT}px` }}
              >
                {tick}
              </span>
            ))}
          </div>

          <div>
            {/* Chart area: Y-axis line + X-axis line + bars + gridlines */}
            <div
              className="relative flex items-end border-l border-b border-gray-600 px-4"
              style={{ height: CHART_HEIGHT }}
            >
              {/* Dashed horizontal gridlines */}
              {ticks.filter(t => t > 0).map(tick => (
                <div
                  key={tick}
                  className="absolute left-0 right-0 border-t border-dashed border-gray-700/50 pointer-events-none"
                  style={{ bottom: `${(tick / maxTarget) * CHART_HEIGHT}px` }}
                />
              ))}

              {/* Bars */}
              <div className="relative z-10 flex items-end gap-6">
                {stats.map(({ value, suffix, label, target }) => {
                  const heightPx = Math.max(8, Math.round((target / maxTarget) * CHART_HEIGHT));
                  const isHovered = hoveredBar === label;
                  return (
                    <div
                      key={label}
                      className="relative flex flex-col items-center justify-end"
                      style={{ height: CHART_HEIGHT }}
                      onMouseEnter={() => setHoveredBar(label)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {/* Tooltip */}
                      {isHovered && (
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl px-3 py-2 text-left whitespace-nowrap z-20">
                          <p className="text-[11px] text-gray-400 font-medium">{label}</p>
                          <p className="text-[12px] text-cyan-400 font-bold flex items-center gap-1.5 mt-0.5">
                            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
                            {value}{suffix}
                          </p>
                        </div>
                      )}
                      <span
                        className="absolute text-xs font-bold text-cyan-400"
                        style={{ bottom: heightPx + 4 }}
                      >
                        {value}{suffix}
                      </span>
                      <motion.div
                        className="w-12 rounded-t-sm bg-linear-to-t from-cyan-500 to-blue-500 transition-opacity duration-150"
                        style={{ opacity: hoveredBar && !isHovered ? 0.4 : 1 }}
                        initial={{ height: 0 }}
                        animate={{ height: heightPx }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* X-axis labels */}
            <div className="flex gap-6 mt-2 px-4">
              {stats.map(({ label }) => (
                <div key={label} className="w-12 flex justify-center">
                  <span className="text-[10px] text-gray-500 whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

"use client"

import React from 'react';
import AnimatedSection from './AnimatedSection';
import { useTranslation } from '../context/LanguageContext';

const About: React.FC = () => {
    const t = useTranslation();

    return (
        <>
        <AnimatedSection id="about">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-8 font-serif">
                {t.about.heading}
            </h2>
            <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 leading-relaxed">
                {t.about.summary}
            </p>
            <h2 className="text-3xl mt-24 font-bold text-center text-gray-100 mb-8 font-serif">
                {t.about.subheading}
            </h2>
            <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 leading-relaxed">
                {t.about.summary2}
            </p>
        </AnimatedSection>
        </>
    );
};

export default About;


"use client"

import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PROFILE_DATA } from '../constants';

const About: React.FC = () => {
    return (
        <>
        <AnimatedSection id="about">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-8 font-serif">
                Summary
            </h2>
            <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 leading-relaxed">
                {PROFILE_DATA.summary}
            </p>
            <h2 className="text-3xl mt-24 font-bold text-center text-gray-100 mb-8 font-serif">
                About me
            </h2>
            <p className="max-w-3xl mx-auto text-center text-lg text-gray-400 leading-relaxed">
                {PROFILE_DATA.summary2}
            </p>
        </AnimatedSection>
        </>
    );
};

export default About;

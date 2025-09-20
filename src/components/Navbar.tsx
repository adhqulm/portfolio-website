"use client"

import React, { useState, useEffect } from 'react';
// Fix: Import Variants from framer-motion to explicitly type animation variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MenuIcon, XIcon } from './icons';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (isOpen) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.querySelector(link.href));
            const scrollY = window.scrollY;

            let currentSection = '#home';
            for (const section of sections) {
                if (section) {
                    const sectionTop = (section as HTMLElement).offsetTop - 70;
                    if (scrollY >= sectionTop) {
                        currentSection = `#${section.id}`;
                    }
                }
            }
            
            if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.body.offsetHeight - 80) {
                 currentSection = '#contact';
            }

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);


    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
        exit: { opacity: 0, x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } }
    };
    
    const listItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
            >
                <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-5xl h-16 flex justify-between items-center">
                    <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-xl font-bold text-white font-serif">Kristina Ganina</a>
                    
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className={`text-sm font-medium transition-colors duration-300 ${activeSection === link.href ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} aria-label="Toggle menu">
                            <MenuIcon className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                    // @ts-ignore
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm md:hidden"
                    >
                        <div className="flex justify-end p-6">
                            <button onClick={toggleMenu} aria-label="Close menu">
                                <XIcon className="w-6 h-6 text-white" />
                            </button>
                        </div>
                        <motion.div 
                            className="flex flex-col items-center justify-center h-full space-y-8 -mt-16"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {navLinks.map(link => (
                                <motion.a 
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    variants={listItemVariants}
                                    className={`text-2xl font-semibold ${activeSection === link.href ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'}`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
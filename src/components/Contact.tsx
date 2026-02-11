"use client"

import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { useTranslation } from '../context/LanguageContext';

const FORMSPREE_ID = "xykdkdar";

const Contact = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const t = useTranslation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <AnimatedSection id="contact" className="!pb-8">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 font-serif bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500">{t.contact.heading}</h2>
                <p className="text-gray-400 mb-8">
                    {t.contact.description}
                </p>

                {status === "success" ? (
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 text-cyan-400">
                        {t.contact.success}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="text-left space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-400 mb-1">{t.contact.nameLabel}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                placeholder={t.contact.namePlaceholder}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">{t.contact.emailLabel}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                placeholder={t.contact.emailPlaceholder}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm text-gray-400 mb-1">{t.contact.messageLabel}</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                                placeholder={t.contact.messagePlaceholder}
                            />
                        </div>

                        {status === "error" && (
                            <p className="text-red-400 text-sm">{t.contact.error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "submitting" ? t.contact.sending : t.contact.send}
                        </button>
                    </form>
                )}

                <footer className="mt-16 border-t border-gray-800 pt-6">
                    <p className="text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} {t.name}. {t.contact.footer}
                    </p>
                </footer>
            </div>
        </AnimatedSection>
    );
};

export default Contact;

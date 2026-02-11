"use client"

import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const FORMSPREE_ID = "xykdkdar";

const Contact = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
                <h2 className="text-3xl font-bold mb-4 font-serif bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500">Get In Touch</h2>
                <p className="text-gray-400 mb-8">
                    I&apos;m open to new opportunities and collaborations. Feel free to reach out.
                </p>

                {status === "success" ? (
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 text-cyan-400">
                        Thanks for reaching out! I&apos;ll get back to you soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="text-left space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                                placeholder="What would you like to say?"
                            />
                        </div>

                        {status === "error" && (
                            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "submitting" ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                )}

                <footer className="mt-16 border-t border-gray-800 pt-6">
                    <p className="text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} Kristina Ganina. All Rights Reserved.
                    </p>
                </footer>
            </div>
        </AnimatedSection>
    );
};

export default Contact;

"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/** Cinematic reveal animation for the main site after loader exits */
const siteReveal = {
	hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
	},
};

/**
 * Client-side orchestrator that shows a loader on first visit,
 * then reveals all portfolio sections with a smooth transition.
 */
export default function PortfolioClient() {
	const [loading, setLoading] = useState(true);

	const handleLoadComplete = useCallback(() => {
		setLoading(false);
	}, []);

	return (
		<>
			{/* Page loader */}
			<AnimatePresence>{loading && <Loader onComplete={handleLoadComplete} />}</AnimatePresence>

			{/* Navbar lives OUTSIDE the animated wrapper so fixed positioning works */}
			{!loading && <Navbar />}

			{/* Main site — cinematic reveal after loader */}
			<motion.div
				variants={siteReveal}
				initial="hidden"
				animate={loading ? "hidden" : "visible"}
			>
				<main>
					<Hero />
					<About />
					<Education />
					<Experience />
					<Skills />
					<Projects />
					<Contact />
				</main>
				<Footer />
			</motion.div>
		</>
	);
}

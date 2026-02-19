"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { portfolioData } from "@/lib/data";

const { skills } = portfolioData;

export default function Skills() {
	return (
		<section id="skills" className="border-t border-white/5 bg-surface-raised/40 py-24 sm:py-32">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<AnimatedSection>
					<h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
						{skills.heading}
					</h2>
				</AnimatedSection>

				<div className="mt-14 grid gap-8 sm:grid-cols-2">
					{skills.categories.map((cat, ci) => (
						<AnimatedSection key={cat.title} delay={0.12 * (ci + 1)}>
							<div className="rounded-2xl border border-white/5 bg-surface-raised p-7 transition-all duration-300 hover:border-accent/15 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]">
								<h3 className="text-lg font-semibold text-white">
									{cat.title}
								</h3>
								<div className="mt-5 flex flex-wrap gap-2.5">
									{cat.skills.map((skill, si) => (
										<motion.span
											key={skill}
											initial={{ opacity: 0, scale: 0.85 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: false }}
											transition={{
												delay: 0.05 * si + 0.2,
												duration: 0.35,
												ease: "easeOut",
											}}
											className="rounded-full border border-white/5 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/60 transition-all duration-300 hover:border-accent/20 hover:bg-accent/10 hover:text-accent-light"
										>
											{skill}
										</motion.span>
									))}
								</div>
							</div>
						</AnimatedSection>
					))}
				</div>
			</div>
		</section>
	);
}

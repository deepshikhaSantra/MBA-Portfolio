"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { portfolioData } from "@/lib/data";

const { projects } = portfolioData;

export default function Projects() {
	return (
		<section id="projects" className="py-24 sm:py-32">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<AnimatedSection>
					<h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
						{projects.heading}
					</h2>
				</AnimatedSection>

				<div className="mt-14 grid gap-8 md:grid-cols-2">
					{projects.items.map((project, i) => (
						<AnimatedSection key={i} delay={0.13 * (i + 1)}>
							<motion.div
								whileHover={{ y: -4 }}
								transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
								className="group flex h-full flex-col rounded-2xl border border-white/5 bg-surface-raised p-7 transition-all duration-300 hover:border-accent/15 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]"
							>
								{/* Tags */}
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-full border border-accent/10 bg-accent/5 px-3 py-1 text-xs font-medium text-accent-light"
										>
											{tag}
										</span>
									))}
								</div>

								{/* Title */}
								<h3 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-accent-light">
									{project.title}
									<ArrowUpRight
										size={16}
										className="ml-1 inline-block opacity-0 transition-opacity group-hover:opacity-100"
									/>
								</h3>

								{/* Description */}
								<p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
									{project.description}
								</p>

								{/* Outcome */}
								<div className="mt-5 rounded-xl border border-white/5 bg-white/3 px-4 py-3">
									<p className="text-sm font-medium text-white/70">
										<span className="mr-1 text-accent-light">↗</span>
										{project.outcome}
									</p>
								</div>
							</motion.div>
						</AnimatedSection>
					))}
				</div>
			</div>
		</section>
	);
}

"use client";

import AnimatedSection from "./AnimatedSection";
import { portfolioData } from "@/lib/data";

const { about } = portfolioData;

export default function About() {
	return (
		<section id="about" className="py-24 sm:py-32">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<AnimatedSection>
					<h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
						{about.heading}
					</h2>
				</AnimatedSection>

				<div className="mt-12 grid gap-16 lg:grid-cols-5">
					{/* Text */}
					<div className="lg:col-span-3">
						{about.paragraphs.map((p, i) => (
							<AnimatedSection key={i} delay={0.1 * (i + 1)}>
								<p className="mt-5 text-base leading-relaxed text-white/50 first:mt-0">
									{p}
								</p>
							</AnimatedSection>
						))}
					</div>

					{/* Stats */}
					<div className="grid grid-cols-2 gap-5 self-start lg:col-span-2">
						{about.stats.map((stat, i) => (
							<AnimatedSection
								key={stat.label}
								delay={0.15 * (i + 1)}
								direction="right"
							>
								<div className="rounded-2xl border border-white/5 bg-surface-raised p-6 text-center transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]">
									<p className="text-3xl font-extrabold text-accent-light">
										{stat.value}
									</p>
									<p className="mt-1 text-sm text-white/40">{stat.label}</p>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

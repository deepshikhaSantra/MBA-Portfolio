"use client";

import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { portfolioData } from "@/lib/data";

const { education } = portfolioData;

export default function Education() {
	return (
		<section id="education" className="border-t border-white/5 bg-surface-raised/40 py-24 sm:py-32">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<AnimatedSection>
					<h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
						{education.heading}
					</h2>
				</AnimatedSection>

				<div className="mt-14 space-y-10">
					{education.items.map((item, i) => (
						<AnimatedSection key={i} delay={0.15 * (i + 1)}>
							<div className="group rounded-2xl border border-white/5 bg-surface-raised p-8 transition-all duration-300 hover:border-accent/15 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]">
								<div className="flex items-start gap-5">
									{/* Icon */}
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent group-hover:text-white">
										<GraduationCap size={22} />
									</div>

									<div className="flex-1">
										<div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
											<h3 className="text-lg font-semibold text-white">
												{item.degree}
											</h3>
											<span className="text-sm font-medium text-accent-light">
												{item.period}
											</span>
										</div>
										<p className="mt-1 text-sm font-medium text-white/40">
											{item.institution}
										</p>
										<p className="mt-3 text-sm leading-relaxed text-white/50">
											{item.description}
										</p>

										{/* Highlights */}
										<ul className="mt-4 flex flex-wrap gap-2">
											{item.highlights.map((h) => (
												<li
													key={h}
													className="rounded-full border border-accent/10 bg-accent/5 px-3 py-1 text-xs font-medium text-accent-light"
												>
													{h}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</AnimatedSection>
					))}
				</div>
			</div>
		</section>
	);
}

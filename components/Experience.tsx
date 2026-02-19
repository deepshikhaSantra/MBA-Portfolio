"use client";

import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { portfolioData } from "@/lib/data";

const { experience } = portfolioData;

export default function Experience() {
	return (
		<section id="experience" className="py-24 sm:py-32">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<AnimatedSection>
					<h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
						{experience.heading}
					</h2>
				</AnimatedSection>

				{/* Timeline */}
				<div className="relative mt-14">
					{/* Vertical line */}
					<div className="absolute top-0 left-6 hidden h-full w-px bg-white/5 md:left-1/2 md:block" />

					<div className="space-y-12">
						{experience.items.map((item, i) => {
							const isLeft = i % 2 === 0;
							return (
								<AnimatedSection
									key={i}
									delay={0.15 * (i + 1)}
									direction={isLeft ? "left" : "right"}
								>
									<div
										className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
											}`}
									>
										{/* Card */}
										<div className="w-full md:w-[calc(50%-2rem)]">
											<div className="group rounded-2xl border border-white/5 bg-surface-raised p-7 transition-all duration-300 hover:border-accent/15 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]">
												<div className="flex items-start gap-4">
													<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent group-hover:text-white">
														<Briefcase size={18} />
													</div>
													<div className="flex-1">
														<div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
															<h3 className="text-base font-semibold text-white">
																{item.role}
															</h3>
															<span className="text-xs font-medium text-accent-light">
																{item.period}
															</span>
														</div>
														<p className="mt-0.5 text-sm font-medium text-white/40">
															{item.company}
														</p>
														<p className="mt-3 text-sm leading-relaxed text-white/50">
															{item.description}
														</p>

														<ul className="mt-4 space-y-1.5">
															{item.achievements.map((a) => (
																<li
																	key={a}
																	className="flex items-start gap-2 text-sm text-white/50"
																>
																	<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
																	{a}
																</li>
															))}
														</ul>
													</div>
												</div>
											</div>
										</div>

										{/* Center dot (desktop) */}
										<div className="absolute top-8 left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-surface md:block" />
									</div>
								</AnimatedSection>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

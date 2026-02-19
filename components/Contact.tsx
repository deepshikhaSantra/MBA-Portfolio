"use client";

import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import MotionButton from "./MotionButton";
import { portfolioData } from "@/lib/data";

const { contact } = portfolioData;

const socialIcons: Record<string, React.ElementType> = {
	LinkedIn: Linkedin,
	GitHub: Github,
	Twitter: Twitter,
};

export default function Contact() {
	return (
		<section id="contact" className="border-t border-white/5 bg-surface-raised/40 py-24 sm:py-32">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<AnimatedSection>
					<h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
						{contact.heading}
					</h2>
					<p className="mx-auto mt-4 max-w-xl text-center text-base text-white/40">
						{contact.subtitle}
					</p>
				</AnimatedSection>

				<div className="mt-14 grid gap-10 md:grid-cols-2">
					{/* Info cards */}
					<AnimatedSection delay={0.15} direction="left">
						<div className="space-y-5">
							{/* Email */}
							<a
								href={`mailto:${contact.email}`}
								className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-surface-raised p-5 transition-all duration-300 hover:border-accent/15 hover:shadow-[0_0_25px_rgba(99,102,241,0.06)]"
							>
								<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent group-hover:text-white">
									<Mail size={20} />
								</div>
								<div>
									<p className="text-xs font-medium text-white/30 uppercase">
										Email
									</p>
									<p className="text-sm font-semibold text-white/80">
										{contact.email}
									</p>
								</div>
							</a>

							{/* Phone */}
							<a
								href={`tel:${contact.phone}`}
								className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-surface-raised p-5 transition-all duration-300 hover:border-accent/15 hover:shadow-[0_0_25px_rgba(99,102,241,0.06)]"
							>
								<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent group-hover:text-white">
									<Phone size={20} />
								</div>
								<div>
									<p className="text-xs font-medium text-white/30 uppercase">
										Phone
									</p>
									<p className="text-sm font-semibold text-white/80">
										{contact.phone}
									</p>
								</div>
							</a>

							{/* Location */}
							<div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-surface-raised p-5 transition-all duration-300 hover:border-accent/15 hover:shadow-[0_0_25px_rgba(99,102,241,0.06)]">
								<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent group-hover:text-white">
									<MapPin size={20} />
								</div>
								<div>
									<p className="text-xs font-medium text-white/30 uppercase">
										Location
									</p>
									<p className="text-sm font-semibold text-white/80">
										{contact.location}
									</p>
								</div>
							</div>

							{/* Socials */}
							<div className="flex gap-3 pt-2">
								{contact.socials.map((s) => {
									const Icon = socialIcons[s.platform] ?? Linkedin;
									return (
										<a
											key={s.platform}
											href={s.url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-surface-raised text-white/40 transition-all duration-300 hover:border-accent/20 hover:text-accent-light hover:shadow-[0_0_15px_rgba(99,102,241,0.1)]"
											aria-label={s.platform}
										>
											<Icon size={18} />
										</a>
									);
								})}
							</div>
						</div>
					</AnimatedSection>

					{/* CTA card */}
					<AnimatedSection delay={0.25} direction="right">
						<div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/5 bg-surface-raised p-10 text-center">
							<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent-light">
								<Mail size={28} />
							</div>
							<h3 className="mt-6 text-xl font-semibold text-white">
								Drop me a line
							</h3>
							<p className="mt-3 text-sm text-white/40">
								Whether it&apos;s a project idea, job opportunity, or just a
								hello — I&apos;d love to hear from you.
							</p>
							<div className="mt-8">
								<MotionButton
									href={`mailto:${contact.email}`}
									variant="primary"
								>
									Send Email
								</MotionButton>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</div>
		</section>
	);
}

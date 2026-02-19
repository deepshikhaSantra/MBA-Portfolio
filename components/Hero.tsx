"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MotionButton from "./MotionButton";
import { portfolioData } from "@/lib/data";

const { hero } = portfolioData;

const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.14, delayChildren: 0.1 },
	},
};

const textVariants = {
	hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
	},
};

const imageVariants = {
	hidden: { opacity: 0, scale: 0.85, x: 60, filter: "blur(10px)" },
	visible: {
		opacity: 1,
		scale: 1,
		x: 0,
		filter: "blur(0px)",
		transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1] as const },
	},
};

const ctaVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
	},
};

const scrollVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delay: 0.3, duration: 0.6 },
	},
};

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 pb-12"
		>
			<div className="pointer-events-none absolute inset-0" aria-hidden>
				<div className="absolute -top-32 -right-32 h-120 w-120 rounded-full bg-accent/4 blur-[120px]" />
				<div className="absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-violet-500/3 blur-[100px]" />
				<div
					className="absolute inset-0 opacity-[0.02]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
						backgroundSize: "60px 60px",
					}}
				/>
			</div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.25 }}
				className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20"
			>
				<div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
					<motion.span
						variants={textVariants}
						className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-light backdrop-blur-md"
					>
						<span className="h-1.5 w-1.5 rounded-full bg-accent-light animate-pulse" />
						{hero.greeting}
					</motion.span>

					{/* Name */}
					<motion.h1
						variants={textVariants}
						className="bg-linear-to-b from-white to-white/60 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]"
					>
						{hero.name}
					</motion.h1>

					{/* Professional title */}
					<motion.p
						variants={textVariants}
						className="mt-4 text-lg font-medium text-accent-light/80 sm:text-xl"
					>
						{hero.title}
					</motion.p>

					{/* Subtitle */}
					<motion.p
						variants={textVariants}
						className="mt-5 max-w-lg text-base leading-relaxed text-white/45 sm:text-[17px]"
					>
						{hero.subtitle}
					</motion.p>

					{/* Divider accent */}
					<motion.div
						variants={textVariants}
						className="my-8 h-px w-16 bg-linear-to-r from-accent/60 to-transparent lg:my-9"
					/>

					{/* CTAs */}
					<motion.div
						variants={ctaVariants}
						className="flex flex-wrap items-center gap-4"
					>
						<MotionButton href={hero.cta.href} variant="primary">
							{hero.cta.label}
						</MotionButton>
						<MotionButton href={hero.secondaryCta.href} variant="secondary">
							{hero.secondaryCta.label}
						</MotionButton>
					</motion.div>
				</div>

				{/* Right: Profile image */}
				<motion.div
					variants={imageVariants}
					className="order-1 flex justify-center lg:order-2"
				>
					<div className="relative">
						{/* Glow ring behind image */}
						<div className="absolute -inset-3 rounded-full bg-accent/[0.07] blur-2xl" />
						<div className="absolute -inset-1 rounded-full bg-linear-to-br from-accent/20 via-transparent to-violet-500/10" />

						{/* Image */}
						<div className="relative h-56 w-56 overflow-hidden rounded-full ring-1 ring-white/8 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
							<Image
								src={hero.profileImage}
								alt={hero.name}
								fill
								priority
								className="object-cover"
								sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
							/>
						</div>

						{/* Decorative accent dot */}
						<div className="absolute -right-2 -bottom-2 h-5 w-5 rounded-full border-2 border-surface bg-accent shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
					</div>
				</motion.div>
			</motion.div>

			<motion.div
				variants={scrollVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.a
					href="#about"
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
					className="flex h-10 w-10 items-center justify-center rounded-full border border-white/6 bg-white/3 text-white/20 backdrop-blur-md transition-colors hover:text-accent"
				>
					<ArrowDown size={18} />
				</motion.a>
			</motion.div>
		</section>
	);
}

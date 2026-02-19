"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionButtonProps {
	children: ReactNode;
	href?: string;
	variant?: "primary" | "secondary";
	className?: string;
	onClick?: () => void;
}

/**
 * Premium glassmorphism button with glow, scale-on-hover and tap feedback.
 */
export default function MotionButton({
	children,
	href,
	variant = "primary",
	className = "",
	onClick,
}: MotionButtonProps) {
	const base =
		"relative inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold tracking-wide backdrop-blur-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 overflow-hidden";

	const variants = {
		primary:
			"bg-accent/90 text-white hover:bg-accent hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] border border-white/10",
		secondary:
			"bg-white/5 text-white/80 hover:text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] border border-white/10 hover:border-accent/30",
	};

	const classes = `${base} ${variants[variant]} ${className}`;

	const motionProps = {
		whileHover: { scale: 1.04, y: -1 },
		whileTap: { scale: 0.97 },
		transition: { type: "spring" as const, stiffness: 400, damping: 17 },
	};

	if (href) {
		return (
			<motion.a href={href} className={classes} {...motionProps}>
				{/* Subtle inner highlight */}
				<span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
				{children}
			</motion.a>
		);
	}

	return (
		<motion.button onClick={onClick} className={classes} {...motionProps}>
			<span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
			{children}
		</motion.button>
	);
}

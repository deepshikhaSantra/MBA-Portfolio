"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolioData } from "@/lib/data";

const { nav } = portfolioData;

/* ── Animation variants ─────────────────────────────────── */

const containerExit = {
	opacity: 0,
	scale: 0.97,
	filter: "blur(8px)",
	transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const logoVariants = {
	hidden: { opacity: 0, scale: 0.6, filter: "blur(12px)" },
	visible: {
		opacity: 1,
		scale: 1,
		filter: "blur(0px)",
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
	},
};

const nameVariants = {
	hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			delay: 0.3,
			duration: 0.6,
			ease: [0.25, 0.4, 0.25, 1] as const,
		},
	},
};

const barContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delay: 0.55, duration: 0.4 },
	},
};

/**
 * Premium full-screen loader with logo reveal, progress bar,
 * and cinematic exit transition.
 */
export default function Loader({ onComplete }: { onComplete: () => void }) {
	const [visible, setVisible] = useState(true);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		// Simulate smooth progress
		const steps = [
			{ target: 30, delay: 100 },
			{ target: 60, delay: 400 },
			{ target: 85, delay: 800 },
			{ target: 100, delay: 1200 },
		];

		const timers: ReturnType<typeof setTimeout>[] = [];

		steps.forEach(({ target, delay }) => {
			timers.push(setTimeout(() => setProgress(target), delay));
		});

		// Trigger exit
		timers.push(
			setTimeout(() => {
				setVisible(false);
				setTimeout(onComplete, 650); // match exit animation
			}, 1800)
		);

		return () => timers.forEach(clearTimeout);
	}, [onComplete]);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					key="loader"
					initial={{ opacity: 1 }}
					exit={containerExit}
					className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-surface"
				>
					{/* Subtle background glow */}
					<div className="pointer-events-none absolute inset-0" aria-hidden>
						<div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/4 blur-[100px]" />
					</div>

					{/* Logo monogram */}
					<motion.div
						variants={logoVariants}
						initial="hidden"
						animate="visible"
						className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20"
					>
						<span className="text-2xl font-bold tracking-tight text-accent-light">
							{nav.logo}
						</span>
						{/* Pulse ring */}
						<motion.span
							className="absolute inset-0 rounded-2xl ring-1 ring-accent/30"
							animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					</motion.div>

					{/* Name */}
					<motion.p
						variants={nameVariants}
						initial="hidden"
						animate="visible"
						className="mt-6 text-lg font-semibold tracking-tight text-white/80"
					>
						{nav.logoFull}
					</motion.p>

					{/* Progress bar */}
					<motion.div
						variants={barContainerVariants}
						initial="hidden"
						animate="visible"
						className="mt-8 h-0.5 w-48 overflow-hidden rounded-full bg-white/6"
					>
						<motion.div
							className="h-full rounded-full bg-linear-to-r from-accent/80 to-accent-light"
							initial={{ width: "0%" }}
							animate={{ width: `${progress}%` }}
							transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const }}
						/>
					</motion.div>

					{/* Tagline */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.5 }}
						className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/20"
					>
						Strategy · Leadership · Innovation
					</motion.p>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

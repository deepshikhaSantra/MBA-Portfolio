"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
}

const directionOffset = {
	up: { x: 0, y: 40 },
	down: { x: 0, y: -40 },
	left: { x: 40, y: 0 },
	right: { x: -40, y: 0 },
};

export default function AnimatedSection({
	children,
	className = "",
	delay = 0,
	direction = "up",
}: AnimatedSectionProps) {
	const offset = directionOffset[direction];

	return (
		<motion.div
			initial={{ opacity: 0, x: offset.x, y: offset.y, filter: "blur(6px)" }}
			whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
			viewport={{ once: false, amount: 0.15, margin: "-60px" }}
			transition={{
				duration: 0.7,
				delay,
				ease: [0.25, 0.4, 0.25, 1],
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

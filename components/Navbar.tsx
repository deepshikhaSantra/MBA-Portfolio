"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/data";

const { nav } = portfolioData;

const navbarVariants = {
	hidden: { y: -100, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
	},
};

const linkHoverVariants = {
	rest: { width: 0 },
	hover: {
		width: "100%",
		transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] as const },
	},
};

const mobileMenuVariants = {
	hidden: { x: "100%" },
	visible: {
		x: 0,
		transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] as const },
	},
	exit: {
		x: "100%",
		transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] as const },
	},
};

const backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.3 } },
	exit: { opacity: 0, transition: { duration: 0.25 } },
};

const mobileLinkVariants = {
	hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		filter: "blur(0px)",
		transition: {
			delay: 0.08 + i * 0.07,
			duration: 0.4,
			ease: [0.25, 0.4, 0.25, 1] as const,
		},
	}),
	exit: {
		opacity: 0,
		x: 20,
		transition: { duration: 0.2 },
	},
};

const mobileCTAVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { delay: 0.5, duration: 0.4, ease: "easeOut" as const },
	},
	exit: { opacity: 0, y: 10, transition: { duration: 0.15 } },
};

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const ticking = useRef(false);

	useEffect(() => {
		const onScroll = () => {
			if (ticking.current) return;
			ticking.current = true;

			requestAnimationFrame(() => {
				setScrolled(window.scrollY > 50);

				const sections = nav.links.map((l) => l.href.replace("#", ""));
				let current = "";
				for (const id of sections) {
					const el = document.getElementById(id);
					if (el) {
						const rect = el.getBoundingClientRect();
						if (rect.top <= 140) current = id;
					}
				}
				setActiveSection(current);
				ticking.current = false;
			});
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	const closeMobile = useCallback(() => setMobileOpen(false), []);

	return (
		<motion.header
			variants={navbarVariants}
			initial="hidden"
			animate="visible"
			className={`fixed top-0 left-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-500 ${scrolled
				? "bg-surface/60 border-b border-white/6 shadow-[0_1px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
				: "bg-transparent"
				}`}
		>
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-8">
				{/* Logo */}
				<a href="#" className="group relative flex items-center gap-2.5">
					<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent-light ring-1 ring-accent/20 transition-all duration-300 group-hover:bg-accent/20 group-hover:ring-accent/40">
						{nav.logo}
					</span>
					<span className="hidden text-[15px] font-semibold tracking-tight text-white/90 sm:block">
						{nav.logoFull}
					</span>
				</a>

				{/* Desktop links */}
				<ul className="hidden items-center gap-1 md:flex">
					{nav.links.map((link) => {
						const isActive = `#${activeSection}` === link.href;
						return (
							<li key={link.href}>
								<motion.a
									href={link.href}
									initial="rest"
									whileHover="hover"
									animate="rest"
									className="group relative block px-3.5 py-2"
								>
									<span
										className={`text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${isActive
											? "text-accent-light"
											: "text-white/45 group-hover:text-white/90"
											}`}
									>
										{link.label}
									</span>

									{/* Active indicator — animated background pill */}
									{isActive && (
										<motion.span
											layoutId="active-pill"
											className="absolute inset-0 -z-10 rounded-lg bg-accent/8"
											transition={{
												type: "spring" as const,
												stiffness: 350,
												damping: 30,
											}}
										/>
									)}

									{/* Hover animated underline — for non-active links */}
									{!isActive && (
										<motion.span
											variants={linkHoverVariants}
											className="absolute bottom-1 left-1/2 h-px -translate-x-1/2 bg-linear-to-r from-transparent via-accent-light/60 to-transparent"
											style={{ originX: 0.5 }}
										/>
									)}
								</motion.a>
							</li>
						);
					})}
				</ul>

				{/* Desktop CTA + Mobile toggle */}
				<div className="flex items-center gap-3">
					{/* Desktop CTA button */}
					<motion.a
						href={nav.ctaButton.href}
						whileHover={{ scale: 1.03, y: -1 }}
						whileTap={{ scale: 0.97 }}
						transition={{
							type: "spring" as const,
							stiffness: 400,
							damping: 20,
						}}
						className="hidden items-center gap-1.5 rounded-lg border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent-light backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] md:flex"
					>
						{nav.ctaButton.label}
						<ArrowUpRight size={14} strokeWidth={2.5} />
					</motion.a>

					{/* Mobile hamburger (animated icon swap) */}
					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className="relative flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/5 hover:text-white md:hidden"
						aria-label="Toggle menu"
					>
						<AnimatePresence mode="wait">
							{mobileOpen ? (
								<motion.span
									key="close"
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<X size={22} />
								</motion.span>
							) : (
								<motion.span
									key="menu"
									initial={{ rotate: 90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<Menu size={22} />
								</motion.span>
							)}
						</AnimatePresence>
					</button>
				</div>
			</nav>

			{/* Mobile slide-in panel */}
			<AnimatePresence>
				{mobileOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							variants={backdropVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							onClick={closeMobile}
							className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
						/>

						{/* Panel */}
						<motion.div
							variants={mobileMenuVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="fixed top-0 right-0 z-50 flex h-dvh w-70 flex-col border-l border-white/6 bg-surface-raised/95 backdrop-blur-2xl md:hidden"
						>
							{/* Header */}
							<div className="flex items-center justify-between px-6 pt-4 pb-2">
								<span className="text-xs font-semibold uppercase tracking-widest text-white/30">
									Menu
								</span>
								<button
									onClick={closeMobile}
									className="rounded-lg p-2 text-white/50 transition hover:text-white"
									aria-label="Close menu"
								>
									<X size={20} />
								</button>
							</div>

							{/* Divider */}
							<div className="mx-6 h-px bg-white/6" />

							{/* Links */}
							<ul className="mt-4 flex flex-col gap-0.5 px-4">
								{nav.links.map((link, i) => {
									const isActive = `#${activeSection}` === link.href;
									return (
										<motion.li
											key={link.href}
											custom={i}
											variants={mobileLinkVariants}
											initial="hidden"
											animate="visible"
											exit="exit"
										>
											<a
												href={link.href}
												onClick={closeMobile}
												className={`flex items-center rounded-lg px-4 py-3 text-[15px] font-medium transition-colors duration-200 ${isActive
													? "bg-accent/10 text-accent-light"
													: "text-white/60 hover:bg-white/4 hover:text-white"
													}`}
											>
												{link.label}
												{isActive && (
													<span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent-light" />
												)}
											</a>
										</motion.li>
									);
								})}
							</ul>

							{/* Mobile CTA */}
							<motion.div
								variants={mobileCTAVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="mt-auto px-6 pb-8"
							>
								<a
									href={nav.ctaButton.href}
									onClick={closeMobile}
									className="flex items-center justify-center gap-2 rounded-xl border border-accent/25 bg-accent/10 py-3 text-sm font-semibold uppercase tracking-wider text-accent-light transition-all duration-300 hover:bg-accent/20"
								>
									{nav.ctaButton.label}
									<ArrowUpRight size={16} />
								</a>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</motion.header>
	);
}

"use client";

import { portfolioData } from "@/lib/data";

const { footer } = portfolioData;

export default function Footer() {
	return (
		<footer className="border-t border-white/5 bg-surface py-10">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center lg:px-8">
				<p className="text-sm text-white/40">{footer.text}</p>
			</div>
		</footer>
	);
}

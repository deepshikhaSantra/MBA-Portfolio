export const portfolioData = {
	/* Personal & Meta Data  */
	meta: {
		siteTitle: "Aman Jaiswal | MBA Portfolio",
		siteDescription:
			"Portfolio of Aman Jaiswal — MBA graduate, strategy consultant, and aspiring business leader.",
	},

	/* Navigation */
	nav: {
		logo: "AJ",
		logoFull: "Aman Jaiswal",
		links: [
			{ label: "About", href: "#about" },
			{ label: "Education", href: "#education" },
			{ label: "Experience", href: "#experience" },
			{ label: "Skills", href: "#skills" },
			{ label: "Projects", href: "#projects" },
			{ label: "Contact", href: "#contact" },
		],
		ctaButton: { label: "Connect", href: "#contact" },
	},

	/* Hero Section */
	hero: {
		greeting: "Hello, I'm",
		name: "Aman Jaiswal",
		title: "MBA Graduate & Strategy Consultant",
		subtitle:
			"Transforming business challenges into strategic opportunities through data-driven insights, leadership, and innovation.",
		profileImage: "/logo.jpg",
		cta: { label: "Get in Touch", href: "#contact" },
		secondaryCta: { label: "View Projects", href: "#projects" },
	},

	/* About Section */
	about: {
		heading: "About Me",
		paragraphs: [
			"I'm an MBA graduate from the Indian School of Business with a passion for solving complex business problems. My journey spans strategy consulting, product management, and entrepreneurship — all driven by a deep curiosity for how businesses create and capture value.",
			"With a background in engineering and post-graduate management education, I bridge the gap between technical execution and strategic vision. I thrive in high-ambiguity environments and enjoy leading cross-functional teams towards measurable outcomes.",
			"Outside of work, I'm an avid reader of behavioural economics, a weekend marathon runner, and a mentor to first-generation MBA aspirants.",
		],
		stats: [
			{ value: "3+", label: "Years Experience" },
			{ value: "12", label: "Projects Delivered" },
			{ value: "2", label: "Published Papers" },
			{ value: "98%", label: "Client Satisfaction" },
		],
	},

	/* Education Section */
	education: {
		heading: "Education",
		items: [
			{
				degree: "Master of Business Administration (MBA)",
				institution: "Indian School of Business, Hyderabad",
				period: "2024 – 2025",
				description:
					"Specialised in Strategy & Finance. Led the consulting club, organised marquee campus events, and graduated in the top 10% of the cohort.",
				highlights: [
					"Dean's List — Top 10%",
					"President, Strategy & Consulting Club",
					"Case Competition Winner — National Level",
				],
			},
			{
				degree: "Bachelor of Technology — Computer Science",
				institution: "Indian Institute of Technology, Delhi",
				period: "2018 – 2022",
				description:
					"Strong foundation in data structures, algorithms, and software engineering. Minor in Economics.",
				highlights: [
					"CGPA 8.9 / 10",
					"Research Assistant — Behavioural Economics Lab",
					"Technical Lead — Coding Society",
				],
			},
		],
	},

	/* Experience Section */
	experience: {
		heading: "Experience",
		items: [
			{
				role: "Summer Associate — Strategy Consulting",
				company: "McKinsey & Company",
				period: "May 2025 – Aug 2025",
				description:
					"Worked on a growth strategy engagement for a Fortune-500 FMCG company. Built financial models, conducted 30+ stakeholder interviews, and delivered C‑suite presentations.",
				achievements: [
					"Identified a $40M revenue opportunity in emerging markets",
					"Developed a go-to-market framework adopted firm-wide",
					"Received a pre-placement offer",
				],
			},
			{
				role: "Product Analyst",
				company: "Flipkart",
				period: "Jun 2022 – Mar 2024",
				description:
					"Owned the seller-onboarding funnel, running A/B tests and crafting data-driven strategies that improved conversion rates and reduced churn.",
				achievements: [
					"Boosted seller onboarding conversion by 22%",
					"Reduced seller churn by 15% through predictive analytics",
					"Managed a ₹1.2 Cr quarterly experiment budget",
				],
			},
			{
				role: "Software Engineering Intern",
				company: "Google — Bengaluru",
				period: "May 2021 – Jul 2021",
				description:
					"Developed internal tooling for the Google Ads team, improving operational efficiency for campaign managers.",
				achievements: [
					"Shipped a dashboard used by 200+ campaign managers",
					"Reduced report generation time by 60%",
					"Received a return-offer rating of 'Strongly Recommend'",
				],
			},
		],
	},

	/* Skills Section */
	skills: {
		heading: "Skills & Expertise",
		categories: [
			{
				title: "Strategy & Consulting",
				skills: [
					"Market Entry Strategy",
					"Competitive Analysis",
					"Business Model Innovation",
					"Due Diligence",
					"Growth Strategy",
				],
			},
			{
				title: "Analytics & Finance",
				skills: [
					"Financial Modelling",
					"Valuation (DCF / Comps)",
					"SQL & Python",
					"Tableau / Power BI",
					"Advanced Excel",
				],
			},
			{
				title: "Leadership & Soft Skills",
				skills: [
					"Cross-functional Leadership",
					"Stakeholder Management",
					"Public Speaking",
					"Negotiation",
					"Team Building",
				],
			},
			{
				title: "Technical",
				skills: [
					"Product Management",
					"A/B Testing",
					"Data Pipelines",
					"React & TypeScript",
					"Cloud (AWS / GCP)",
				],
			},
		],
	},

	/* Projects Section */
	projects: {
		heading: "Featured Projects",
		items: [
			{
				title: "Market Entry Strategy — SE Asia Expansion",
				tags: ["Strategy", "Market Research", "Financial Modelling"],
				description:
					"Developed a comprehensive go-to-market strategy for a mid-cap Indian SaaS company entering Southeast Asian markets, covering pricing, distribution, and regulatory analysis.",
				outcome: "Projected 3× revenue growth over 18 months.",
			},
			{
				title: "Predictive Churn Model for E-commerce Sellers",
				tags: ["Machine Learning", "Python", "Analytics"],
				description:
					"Built a gradient-boosted model predicting seller churn 60 days in advance with 89% accuracy, enabling proactive retention campaigns.",
				outcome: "Saved an estimated ₹4.5 Cr in annual seller revenue.",
			},
			{
				title: "Sustainable Supply Chain Audit",
				tags: ["Operations", "ESG", "Consulting"],
				description:
					"Led a team of 5 MBAs to audit the supply chain of a leading textile manufacturer, identifying ESG gaps and recommending actionable improvements.",
				outcome: "Reduced Scope-3 emissions estimate by 18%.",
			},
			{
				title: "FinTech Product Redesign — UX Case Study",
				tags: ["Product Management", "UX Research", "Figma"],
				description:
					"Re-imagined the onboarding flow of a digital lending app using design thinking, resulting in a significant uplift in user activation.",
				outcome: "Improved Day-1 activation rate from 34% to 52%.",
			},
		],
	},

	/* Contact Section */
	contact: {
		heading: "Let's Connect",
		subtitle:
			"I'm always open to discussing new opportunities, collaborations, or just having a great conversation about business and strategy.",
		email: "aman.jaiswal@email.com",
		phone: "+91 98765 43210",
		location: "Kolkata, India",
		socials: [
			{
				platform: "LinkedIn",
				url: "https://linkedin.com/in/amanjaiswal",
			},
			{
				platform: "GitHub",
				url: "https://github.com/amanjaiswal",
			},
			{
				platform: "Twitter",
				url: "https://twitter.com/amanjaiswal",
			},
		],
	},

	/* Footer */
	footer: {
		text: "© 2026 Aman Jaiswal. Crafted with purpose.",
	},
};

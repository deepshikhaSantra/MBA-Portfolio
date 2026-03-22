export const portfolioData = {
	/* Personal & Meta Data  */
	meta: {
		siteTitle: "Deepshikha Santra | Portfolio",
		siteDescription:
			"Portfolio of Deepshikha Santra — PGDM student, aspiring business leader and product management enthusiast.",
	},

	/* Navigation */
	nav: {
		logo: "DS",
		logoFull: "Deepshikha Santra",
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
		name: "Deepshikha Santra",
		title: "PGDM student | Aspiring Business Leader | Product Management Enthusiast",
		subtitle:
			"Driving product innovation through data-backed strategy and structured execution. Focused on building scalable, user-centric solutions that create measurable business impact.",
		profileImage: "/image.jpeg",
		cta: { label: "Get in Touch", href: "#contact" },
		secondaryCta: { label: "View Projects", href: "#projects" },
	},

	/* About Section */
	about: {
		heading: "About Me",
		paragraphs: [
			"PGDM candidate specializing in Product Management, with a strong foundation in analytics and business strategy. Proven leadership through academic ambassador roles, event management, and team coordination initiatives. Experience in customer-facing roles and political consulting (IPAC), building strong decision-making, communication, and problemsolving skills. Certified in KNIME Analytics, with growing expertise in Agile methodologies and Product Strategy. Driven to lead teams, execute with structure, and build user-centric, datainformed solutions.",
		],
		stats: [
			{ value: "2", label: "Strategic & Operational Experience" },
			{ value: "2", label: "Market-Focused Research & Innovation Strategy" },
			{ value: "3", label: "Achievements in Leadership Roles" },
			{ value: "5", label: "Leadership & Strategic Engagement" },
		
		],
	},

	/* Education Section */
	education: {
		heading: "Education",
		items: [
			{
				degree: "Post Graduate Diploma in Management (PGDM)",
				institution: "ISBR Business School, Bangalore | CGPA 7.8",
				period: "2025 – 2027",
				description:
					"Specialized in Product Management, integrating analytics with strategic execution. As Placement and Section Ambassador, led recruiter engagement, stakeholder coordination, and academic communication initiatives to strengthen institutional impact.sed in Strategy & Finance. Led the consulting club, organised marquee campus events, and graduated in the top 10% of the cohort.",
				highlights: [
					"Organiser in multiple events",
					"Participant in multiple technical events",
					"Placement Ambassador & Section Ambassador",
					"AI focused"
				],
			},
			{
				degree: "Bachelor of Computer Application",
				institution: "Institute of Engineering & Management, Kolkata | CGPA: 8.88",
				period: "2021 – 2024",
				description:
					"Built a strong foundation in Java and DBMS through hands-on projects, while leading teams in planning, architecture design, and execution. Contributed to key business decisions, UI/UX improvements, and product enhancements, resulting in projects with 83% higher appraisal outcomes. Actively organized hackathons and campus events, serving as chief conductor and coordinator, alongside participation in the college musical band..",
				highlights: [
					"Lead Coordinator",
					"Best Student Contribution - Director's Choice Award",
					"Project Analyst",
					"Magazine Organiser",
				],
			},
		],
	},

	/* Experience Section */
	experience: {
		heading: "Experience",
		items: [
			{
				role: "Customer Support Associate",
				company: "Amazon",
				period: "July 2024 – May 2025",
				description:
				"Operated within a specialized abuse-prevention team, managing high-volume, multi-channel customer interactions while ensuring strict adherence to internal policies. Handled sensitive and high-risk cases requiring strong judgment, structured problem-solving, and effective stakeholder communication, contributing to improved customer trust and satisfaction.",
				achievements: [
					"Managed calls, emails, and chats in a specialized abuse-prevention team.",
					"Ensured strict policy compliance and handled high-sensitivity customer cases.",
					"Strengthened stakeholder communication and crisis management skills.",
					"Improved customer satisfaction through structured problem resolution."
				],
			},
			{
				role: "Network and Data Analyst",
				company: "Indian Political Action Committee (IPAC)",
				period: "Jan 2023 - March 2023",
				description:
					"Supported stakeholder engagement and data-driven campaign operations by working across networking and analytics teams. Contributed to structured data analysis, coordination efforts, and field-level execution, enabling informed decision-making and efficient campaign management.",
				achievements: [
					"Worked in the Networking Team managing stakeholder outreach and coordination.",
					"Collaborated closely with the Data Analysis Team for voter data insights and structured reporting.",
					"Assisted in organizing field-level engagement initiatives and campaign data management.",
				],
			},
		],
	},

	/* Skills Section */
	skills: {
  		heading: "Skills & Expertise",
  		categories: [
    		{
      			title: "Product Strategy & Management",
      			skills: [
        					"Product Management",
        					"A/B Testing",
        					"Growth Strategy",
        					"Business Model Innovation",
        					"Competitive Analysis",
      					],
    		},
    		{
      			title: "Agile & Delivery",
      			skills: [
        					"Agile Methodologies",
        					"Scrum",
        					"Kanban",
        					"Product Lifecycle Management",
        					"Sprint Planning & Execution",
      					],
    		},
    		{
      			title: "Data & Analytical Thinking",
      			skills: [
        					"Advanced Excel",
        					"A/B Experimentation Analysis",
        					"Data-Driven Decision Making",
        					"DBMS",
        					"Metrics & KPI Design",
      					],
    		},
    		{
      			title: "Leadership & Communication",
      			skills: [
        					"Cross-functional Leadership",
        					"Stakeholder Management",
        					"Team Building",
        					"Public Speaking",
        					"Strategic Communication",
      					],
    		},
  		],
	},

	/* Projects Section */
	projects: {
  		heading: "Featured Projects",
  			items: [
    	{
      		title: "Local Market Analysis — Home-Cooked Food Subscription Platform",
      		tags: ["Product Strategy", "Market Research", "Consumer Insights"],
      		description:
        		"Conducted primary and secondary research to evaluate demand for a home-cooked food subscription service, analyzing customer preferences, pricing sensitivity, and trust factors influencing adoption.",
      		outcome:
        		"Identified key demand drivers and barriers, shaping a go-to-market approach focused on affordability, hygiene assurance, and localized targeting.",
    	},
    	{
      		title: "Agile Product Management Impact Study — B2B SaaS",
      		tags: ["Product Management", "Agile", "SaaS"],
       		description:
        		"Analyzed the impact of Agile methodologies (Scrum, Kanban) on product performance in B2B SaaS environments, focusing on delivery speed, stakeholder alignment, and iterative value creation.",
      		outcome:
        		"Established a strong correlation between Agile adoption and improved release velocity, product quality, and customer responsiveness.",
    	},
    	{
      		title: "Product Management Practices Analysis — Airbnb (PaaS Case Study)",
      		tags: ["Product Strategy", "Platform Business", "Case Study"],
      		description:
        		"Evaluated product management practices at Airbnb, examining how platform design, user experience optimization, and data-driven decisions influence service performance and scalability.",
      		outcome:
        		"Derived insights on platform-led growth, highlighting the role of experimentation, network effects, and trust mechanisms in driving user engagement.",
    	},
    	{
      		title: "Customer Experience & Service Performance — Platform Evaluation",
      		tags: ["User Experience", "Product Metrics", "Analysis"],
      		description:
        		"Conducted a structured analysis of service performance metrics and customer experience factors in digital platforms, with a focus on retention, usability, and feedback loops.",
      		outcome:
        		"Proposed actionable recommendations to enhance engagement, reduce churn, and improve overall product satisfaction.",
    	},
  		],
	},

	/* Contact Section */
	contact: {
		heading: "Let's Connect",
		subtitle:
			"I'm always open to discussing new opportunities, collaborations, or just having a great conversation about business and strategy.",
		email: "deepshikhasantra2003@gmail.com",
		phone: "+91 6295016833",
		location: "Bengaluru, India",
		socials: [
			{
				platform: "LinkedIn",
				url: "https://in.linkedin.com/in/deepshikha-santra",
			},
		],
	},
};

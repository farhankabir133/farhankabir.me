export type NavigationItem = {
  label: string;
  href: string;
};

export type SkillCard = {
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
};

export type CareerItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  tools: string;
  image: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export type TestimonialItem = {
  name: string;
  role: string;
  organization: string;
  quote: string;
  image: string;
};

export type InsightItem = {
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
};

export type PublicationItem = {
  title: string;
  summary: string;
  venue: string;
  tags: string[];
  image: string;
  href: string;
};

export const siteProfile = {
  name: "Farhan Kabir",
  role:
    "Software Engineer | Researcher | AI Enthusiast | Writer | Prompt Specialist",
  intro:
    "I craft digital experiences that blend beautiful design with powerful functionality. Let's build something amazing together.",
  tagline: "Building thoughtful digital tools.",
  aboutHeading: "Passionate Developer & Designer",
  aboutBody:
    "With over 3.5 years of experience in full-stack development and UI/UX design, I specialize in creating digital experiences that are both beautiful and functional.",
  aboutJourney:
    "My journey began with a curiosity about how things work, which led me to explore the intersection of technology and design. Today, I help businesses and startups bring their ideas to life through innovative web and mobile solutions.",
  aboutOutsideWork:
    "When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  resumeUrl: "https://farhankabir.me/Resume_final.pdf",
  primaryEmail: "farhankabir133@gmail.com",
  secondaryEmail: "hi@farhankabir.me",
  phone: "+880-1783165726",
  location: "Kazla, Rajshahi, Bangladesh",
  availability:
    "I'm currently accepting new client work and interesting project collaborations.",
};

export const navigationItems: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#work" },
  { label: "Highlights", href: "#highlights" },
  { label: "Research Papers", href: "#research-papers" },
  { label: "Publications", href: "#publications" },
  { label: "Medium", href: "https://medium.com/@farhankabir133" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://web.facebook.com/baba111b/" },
  { label: "GitHub", href: "https://github.com/farhankabir133" },
  { label: "Instagram", href: "https://www.instagram.com/_farhan_kabir/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/farhan-kabir-142634198/",
  },
  { label: "Medium", href: "https://medium.com/@farhankabir133" },
  { label: "X", href: "https://x.com/fkh_236" },
  { label: "Gravatar", href: "https://gravatar.com/fk133" },
  { label: "Gumroad", href: "https://fk133.gumroad.com/" },
];

export const skillCards: SkillCard[] = [
  {
    title: "Technical Skills",
    eyebrow: "Engineering depth",
    description:
      "Full-stack web apps, AI workflows, automation, and production systems that ship reliably.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "Next.js",
      "AWS",
      "Docker",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Creative Skills",
    eyebrow: "Design thinking",
    description:
      "Interfaces, brand systems, and product narratives that feel intentional and usable.",
    tags: [
      "UI/UX",
      "Figma",
      "Adobe Creative Suite",
      "Design Systems",
      "Prototyping",
      "Research",
      "Writing",
      "Prompting",
      "Mentorship",
    ],
  },
];

export const careerItems: CareerItem[] = [
  {
    role: "Lead Developer",
    company: "Auto Spark",
    period: "April 2024 - Present",
    description:
      "Developed responsive web applications, ensured compatibility across browsers and devices, and collaborated on back-end development tasks.",
  },
  {
    role: "Full Stack Developer (Remote)",
    company: "Hire My Tech",
    period: "2022 - 2023",
    description:
      "Built responsive web applications using React and modern JavaScript frameworks while partnering with design teams on user experience improvements.",
  },
  {
    role: "UI/UX Designer",
    company: "Design Studio",
    period: "2020 - 2021",
    description:
      "Created user-centered designs for web and mobile applications and conducted user research and usability testing.",
  },
  {
    role: "Junior Developer",
    company: "WebAgency",
    period: "2019 - 2020",
    description:
      "Developed websites and web applications while learning modern development practices and agile methodologies.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with advanced features.",
    tools: "React, Node.js, MongoDB, Redux",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    links: [
      { label: "Live Demo", href: "https://example.com/" },
      { label: "GitHub", href: "https://github.com/" },
    ],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure and intuitive mobile banking experience.",
    tools: "React Native, TypeScript, Firebase",
    image:
      "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    links: [{ label: "Live Demo", href: "https://example.com/" }],
  },
  {
    title: "Brand Identity Design",
    category: "Design",
    description: "Complete brand identity for a tech startup.",
    tools: "Adobe Creative Suite, Figma",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    links: [{ label: "View Details", href: "https://example.com/" }],
  },
  {
    title: "AI Dashboard",
    category: "Data Science",
    description: "Machine learning analytics dashboard.",
    tools: "Python, TensorFlow, D3.js",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    links: [
      { label: "Live Demo", href: "https://example.com/" },
      { label: "GitHub", href: "https://github.com/" },
    ],
  },
  {
    title: "SaaS Platform",
    category: "Web Development",
    description: "Multi-tenant SaaS application.",
    tools: "Next.js, PostgreSQL, Stripe",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    links: [{ label: "Live Demo", href: "https://example.com/" }],
  },
  {
    title: "UI/UX Case Study",
    category: "Design",
    description: "Complete redesign of a healthcare app.",
    tools: "Figma, Adobe XD, Principle",
    image:
      "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    links: [{ label: "View Details", href: "https://example.com/" }],
  },
  {
    title: "AltMail (Alter_Mail)",
    category: "Web Development",
    description:
      "Theme: Privacy Mail - Disposable email service for anonymous email generation.",
    tools: "React, TypeScript, Vite",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&h=900&q=80",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/farhankabir133/Alter_Mail",
      },
    ],
  },
  {
    title: "FK Hub (fkhub)",
    category: "Web Development",
    description:
      "Theme: AI Assistant - Next-generation AI assistant chatbot integrated with portfolio.",
    tools: "React, TypeScript, Supabase",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&h=900&q=80",
    links: [
      { label: "Live Demo", href: "https://farhankabir.com/" },
      {
        label: "GitHub",
        href: "https://github.com/farhankabir133/fkhub",
      },
    ],
  },
  {
    title: "farhankabir.com",
    category: "Web Development",
    description:
      "Theme: Personal AI Portfolio - Personal portfolio with integrated AI assistant and Web3 features.",
    tools: "React, TypeScript, Vite",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&h=900&q=80",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/farhankabir133/farhankabir.com",
      },
    ],
  },
  {
    title: "InteractIQ",
    category: "Web Development",
    description:
      "Theme: Social Automator - AI-powered social media automation assistant.",
    tools: "React, TypeScript, Google GenAI",
    image:
      "https://images.pexels.com/photos/35186747/pexels-photo-35186747.png?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    links: [
      { label: "GitHub", href: "https://github.com/farhankabir133/InteractIQ" },
    ],
  },
  {
    title: "Emotion Detection",
    category: "Web Development",
    description:
      "Theme: Affective AI - Emotion detection from textual and multimodal inputs.",
    tools: "React, TypeScript, Express",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&h=900&q=80",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/farhankabir133/Emotion-Detection",
      },
    ],
  },
  {
    title: "The Ink Home",
    category: "Web Development",
    description:
      "Theme: Literary Platform - Modern publication site for essays and stories.",
    tools: "React, TypeScript, GSAP",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&h=900&q=80",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/farhankabir133/The-Ink-Home",
      },
    ],
  },
  {
    title:
      "Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques",
    category: "Publication",
    description: "Published at ICCIT 2023.",
    tools: "NLP, ML, Social Media",
    image:
      "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&fit=crop&w=800&q=80",
    links: [
      {
        label: "Paper",
        href: "https://ieeexplore.ieee.org/document/10441612",
      },
    ],
  },
  {
    title:
      "Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques",
    category: "Publication",
    description: "Published at ECCE 2025.",
    tools: "NLP, ML, Emotion Detection",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&fit=crop&w=800&q=80",
    links: [
      {
        label: "Paper",
        href: "https://ieeexplore.ieee.org/document/11013284",
      },
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    organization: "TechCorp Inc.",
    quote:
      "Working with Farhan has been an absolute pleasure. Their attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    organization: "Product Studio",
    quote:
      "Farhan delivered exceptional results on our project. The quality of work and professionalism exceeded our expectations. Highly recommended!",
    image:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    organization: "HealthFirst",
    quote:
      "The collaboration was seamless and the final product was beyond what we imagined. Kabir brings both technical expertise and creative vision.",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
];

export const insights: InsightItem[] = [
  {
    title: "Stop Trying to Go Viral. Start Trying to Solve Something.",
    summary:
      "Most people online are chasing attention. The smartest ones are quietly becoming useful.",
    category: "personal-growth",
    date: "May 10, 2026",
    readTime: "1 min read",
    image:
      "https://cdn-images-1.medium.com/max/2600/1*EgDHsd6WR3zQggS1LCheHw.jpeg",
    href:
      "https://medium.com/illumination/stop-trying-to-go-viral-start-trying-to-solve-something-19ce01cfba54?source=rss-c2d3e5773afc------2",
  },
  {
    title: "The Psychological Cost of Being a People Pleaser",
    summary: "Being needed is not the same thing as being loved.",
    category: "psychology",
    date: "May 9, 2026",
    readTime: "1 min read",
    image:
      "https://cdn-images-1.medium.com/max/2170/0*BwMtPIjVuKJ8j1Zp",
    href:
      "https://medium.com/activated-thinker/the-psychological-cost-of-being-a-people-pleaser-dfdfe6dac5ab?source=rss-c2d3e5773afc------2",
  },
  {
    title: "The real reason you can't finish what you start",
    summary: "How to actually cross the finish line.",
    category: "artificial-intelligence",
    date: "May 8, 2026",
    readTime: "1 min read",
    image:
      "https://cdn-images-1.medium.com/max/1376/1*9t5bTsP7mlYRO0IJwhfX8g.jpeg",
    href:
      "https://medium.com/activated-thinker/the-real-reason-you-cant-finish-what-you-start-4a2b7f82d571?source=rss-c2d3e5773afc------2",
  },
  {
    title: "If You Still Use ChatGPT for Writing; Do This Instead;",
    summary: "Stop letting ChatGPT write your articles.",
    category: "writing",
    date: "May 8, 2026",
    readTime: "1 min read",
    image:
      "https://cdn-images-1.medium.com/max/1376/1*9S_QI26vr56tLLfMehGn9Q.jpeg",
    href:
      "https://medium.com/the-ink-home/if-you-still-use-chatgpt-for-writing-do-this-instead-688313c864b3?source=rss-c2d3e5773afc------2",
  },
  {
    title: "Why We Keep Attracting the Same Toxic People?",
    summary: "Why we keep choosing people who hurt us.",
    category: "relationships",
    date: "May 8, 2026",
    readTime: "1 min read",
    image:
      "https://cdn-images-1.medium.com/max/1376/1*EvPRJvQ9-g-JDGl4N84rVA.jpeg",
    href:
      "https://medium.com/activated-thinker/why-we-keep-attracting-the-same-toxic-people-4fe2fda2d679?source=rss-c2d3e5773afc------2",
  },
  {
    title: "The High Cost of Being Human: Why Your Unhappiness is a Sign of Growth",
    summary: "Why it is okay to be unsatisfied.",
    category: "philosophy",
    date: "May 7, 2026",
    readTime: "1 min read",
    image:
      "https://cdn-images-1.medium.com/max/1376/1*l9Db3DosFTRhZCwQ55ayBA.jpeg",
    href:
      "https://medium.com/infinite-impulse/the-high-cost-of-being-human-why-your-unhappiness-is-a-sign-of-growth-ab132f658fd3?source=rss-c2d3e5773afc------2",
  },
];

export const publications: PublicationItem[] = [
  {
    title:
      "Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques",
    summary: "Published at ICCIT 2023.",
    venue: "ICCIT 2023",
    tags: ["NLP", "ML", "Social Media"],
    image:
      "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&fit=crop&w=800&q=80",
    href: "https://ieeexplore.ieee.org/document/10441612",
  },
  {
    title:
      "Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques",
    summary: "Published at ECCE 2025.",
    venue: "ECCE 2025",
    tags: ["NLP", "ML", "Emotion Detection"],
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&fit=crop&w=800&q=80",
    href: "https://ieeexplore.ieee.org/document/11013284",
  },
];
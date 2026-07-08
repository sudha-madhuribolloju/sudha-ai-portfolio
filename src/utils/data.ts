export const profile = {
  name: 'Sudha Madhuri Vinnakota',
  role: 'AI Engineer',
  tagline: 'Building agentic AI systems, RAG pipelines and MCP-connected tools that turn LLMs into production software.',
  location: 'Hyderabad, Telangana, India',
  email: 'sudhamadhurivinnakota@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sudha-ai',
  github: 'https://github.com/sudha-madhuribolloju',
  resumeFile: '/Sudha_Madhuri_Vinnakota_Resume.pdf',
  yearsExperience: '3.6',
}

export const aboutSummary = `Senior AI Professional with 3.6 years of experience designing and shipping Generative AI applications in Python. I build LLM-based systems, Retrieval-Augmented Generation pipelines, and multi-agent workflows with LangChain, LangGraph and the Model Context Protocol (MCP) — connecting language models to real tools, data and business processes. Alongside the AI layer, I build and ship the REST APIs and cloud infrastructure around it: FastAPI services deployed on AWS through Docker and CI/CD. I care most about turning promising LLM demos into dependable, scalable software that solves real problems in production.`

export const aboutHighlights = [
  { label: 'Years in Generative AI', value: '3.6' },
  { label: 'AI protocol adopted early', value: 'MCP' },
  { label: 'Agent frameworks shipped', value: 'LangChain · LangGraph · CrewAI' },
  { label: 'Cloud platform', value: 'AWS' },
]

export type SkillCategory = {
  title: string
  icon: 'code' | 'sparkles' | 'workflow' | 'plug' | 'cloud' | 'container' | 'database' | 'terminal'
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'code',
    skills: ['Python', 'SQL'],
  },
  {
    title: 'Generative AI',
    icon: 'sparkles',
    skills: ['LLMs', 'Prompt Engineering', 'RAG', 'AI Agents', 'Agentic AI'],
  },
  {
    title: 'Frameworks',
    icon: 'workflow',
    skills: ['LangChain', 'LangGraph', 'CrewAI', 'FastAPI', 'Flask'],
  },
  {
    title: 'AI Protocols',
    icon: 'plug',
    skills: ['Model Context Protocol (MCP)', 'AI Tool Integration'],
  },
  {
    title: 'Cloud',
    icon: 'cloud',
    skills: ['AWS EC2', 'S3', 'IAM', 'VPC', 'RDS', 'CloudWatch'],
  },
  {
    title: 'DevOps & Containers',
    icon: 'container',
    skills: ['Docker', 'Docker Hub', 'Git', 'GitHub', 'CI/CD'],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'Supabase'],
  },
  {
    title: 'Development Tools',
    icon: 'terminal',
    skills: ['VS Code', 'PyCharm', 'Cursor', 'Jupyter Notebook', 'Postman'],
  },
]

export type ExperienceItem = {
  company: string
  role: string
  duration: string
  location?: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Datapro Information Technology',
    role: 'AI Engineer',
    duration: 'Feb 2022 — Dec 2025',
    points: [
      'Developed AI-powered applications using Python, LangChain and LLMs to automate business processes and improve productivity.',
      'Built and integrated MCP (Model Context Protocol) servers to let AI agents interact with external tools and services.',
      'Designed and implemented RAG pipelines by integrating vector databases and external knowledge sources to improve response accuracy.',
      'Created and managed REST APIs with FastAPI and Python to support scalable AI applications and third-party integrations.',
      'Developed multi-step AI workflows in LangChain, enabling agents to perform complex, multi-stage tasks.',
      'Deployed and maintained AI applications on AWS (EC2, S3, Lambda).',
      'Used Docker, Git and GitHub to containerize applications and support CI/CD deployment workflows.',
      'Designed workflow automations using n8n to connect systems and reduce manual effort.',
      'Optimized backend services, API response times and cloud resource utilization.',
      'Partnered with cross-functional teams to translate business requirements into production-ready AI solutions.',
    ],
  },
]

export type Project = {
  name: string
  description: string
  tech: string[]
  features: string[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    name: 'Multi-Agent AI Assistant',
    description:
      'An orchestrated team of specialised LLM agents that plan, delegate and execute multi-step tasks together instead of relying on a single monolithic prompt.',
    tech: ['LangGraph', 'CrewAI', 'Python', 'FastAPI'],
    features: [
      'Supervisor agent that plans and routes subtasks to specialist workers',
      'Shared memory and state passed between agents through LangGraph',
      'Tool-calling workers for search, retrieval and code execution',
      'Streaming responses over a FastAPI + WebSocket backend',
    ],
    github: 'https://github.com/sudha-madhuribolloju',
  },
  {
    name: 'MCP Server Integration Toolkit',
    description:
      'A set of Model Context Protocol servers that expose internal tools and data sources to AI agents through a standard, versioned interface.',
    tech: ['MCP', 'Python', 'Docker', 'AWS'],
    features: [
      'Custom MCP servers exposing REST APIs as callable agent tools',
      'Authenticated tool access with scoped permissions',
      'Container images published to Docker Hub for reuse across projects',
      'Deployed on AWS EC2 behind a CI/CD pipeline',
    ],
    github: 'https://github.com/sudha-madhuribolloju',
  },
  {
    name: 'RAG Knowledge Chatbot',
    description:
      'A retrieval-augmented chatbot that grounds LLM answers in a private knowledge base instead of relying purely on model memory.',
    tech: ['LangChain', 'RAG', 'PostgreSQL', 'Supabase'],
    features: [
      'Document ingestion and chunking pipeline with embeddings',
      'Vector similarity search over a Postgres/Supabase store',
      'Source-cited answers with confidence scoring',
      'Simple FastAPI endpoint for chat integrations',
    ],
    github: 'https://github.com/sudha-madhuribolloju',
  },
  {
    name: 'AI Workflow Automation Suite',
    description:
      'End-to-end automations that connect business systems and trigger LLM-powered steps without manual handoffs.',
    tech: ['n8n', 'LangChain', 'Python', 'REST APIs'],
    features: [
      'Event-driven workflows connecting CRMs, email and internal tools',
      'LLM steps for summarisation, classification and drafting',
      'Retry and error-handling logic for unattended runs',
      'Monitoring via AWS CloudWatch',
    ],
    github: 'https://github.com/sudha-madhuribolloju',
  },
  {
    name: 'AI Resume Builder',
    description:
      'A generative tool that turns a candidate\u2019s raw experience into a tailored, role-specific resume draft in seconds.',
    tech: ['LLMs', 'Prompt Engineering', 'Flask', 'React'],
    features: [
      'Prompt-engineered templates tuned per target role',
      'Section-by-section regeneration and editing',
      'Exports to PDF and DOCX',
      'Simple Flask API backing a lightweight front end',
    ],
    github: 'https://github.com/sudha-madhuribolloju',
  },
]

export type EducationItem = {
  degree: string
  institution: string
  affiliation?: string
  detail: string
}

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech) — Electrical and Electronics Engineering',
    institution: 'Godavari Institute of Engineering & Technology (GIET), Rajahmundry',
    affiliation: 'Affiliated to JNTU Kakinada',
    detail: 'Aggregate: 64%',
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: '',
    detail: 'Percentage: 80%',
  },
]

export type Certification = {
  title: string
  issuer: string
  status: 'placeholder'
}

export const certifications: Certification[] = [
  { title: 'Add your certification', issuer: 'e.g. AWS Certified AI Practitioner', status: 'placeholder' },
  { title: 'Add your certification', issuer: 'e.g. LangChain / LangGraph Certification', status: 'placeholder' },
  { title: 'Add your certification', issuer: 'e.g. Generative AI with LLMs', status: 'placeholder' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

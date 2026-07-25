import {
  FaCode, FaMobileAlt, FaPaintBrush, FaPenFancy, FaLightbulb, FaHandshake,
  FaRocket, FaShieldAlt, FaSeedling, FaSearch, FaProjectDiagram, FaPencilRuler,
  FaCogs, FaVial, FaCloudUploadAlt, FaArrowRight, FaQuoteLeft, FaGithub,
  FaLinkedin,  FaEnvelope, FaMapMarkerAlt, FaPhone, FaChevronRight,
  FaCheckCircle, FaUsers, FaClipboardList, FaLayerGroup, FaStar, FaHeart,
} from 'react-icons/fa'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    icon: FaCode,
    title: 'Web Development',
    description:
      'Responsive, scalable, and high-performance web applications built with modern frameworks and best practices. From static sites to complex web platforms, we bring your vision to life.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Application Development',
    description:
      'Cross-platform mobile applications with intuitive user experiences. We build apps that perform seamlessly across iOS and Android using cutting-edge technologies.',
  },
  {
    icon: FaPaintBrush,
    title: 'UI/UX Design',
    description:
      'User-focused interfaces and seamless digital experiences. We design with empathy, creating wireframes, prototypes, and visual designs that delight users and achieve business goals.',
  },
  {
    icon: FaPenFancy,
    title: 'Graphic Design',
    description:
      'Branding, social media content, promotional materials, and complete visual identity solutions. We craft visuals that communicate your message and leave a lasting impression.',
  },
]

export const whyChoose = [
  {
    icon: FaLightbulb,
    title: 'Student-Driven Innovation',
    description:
      'We bring fresh perspectives and creative approaches to every project. Our team stays ahead of industry trends and emerging technologies.',
  },
  {
    icon: FaRocket,
    title: 'Modern Development Practices',
    description:
      'We use the latest frameworks, tools, and methodologies to deliver efficient, maintainable, and future-proof solutions.',
  },
  {
    icon: FaUsers,
    title: 'User-Centered Design',
    description:
      'Every solution we build is designed with the end user in mind. We prioritize usability, accessibility, and meaningful experiences.',
  },
  {
    icon: FaHandshake,
    title: 'Collaborative Workflow',
    description:
      'We work closely with our clients throughout the development process, ensuring transparency, feedback integration, and shared vision.',
  },
  {
    icon: FaClipboardList,
    title: 'Affordable & Scalable',
    description:
      'As a student-led team, we offer competitive pricing without compromising quality. Our solutions are built to grow with your needs.',
  },
  {
    icon: FaSeedling,
    title: 'Continuous Improvement',
    description:
      'We are lifelong learners dedicated to improving our craft. Every project is an opportunity to refine our skills and deliver better results.',
  },
]

export const processSteps = [
  {
    icon: FaSearch,
    title: 'Discovery',
    description:
      'We begin by understanding your vision, goals, target audience, and project requirements through in-depth consultation and research.',
  },
  {
    icon: FaProjectDiagram,
    title: 'Planning',
    description:
      'We create a comprehensive project roadmap defining milestones, timelines, technologies, and deliverables to ensure a smooth development journey.',
  },
  {
    icon: FaPencilRuler,
    title: 'Design',
    description:
      'Our designers craft intuitive wireframes and stunning visual interfaces, ensuring every pixel serves a purpose and aligns with your brand.',
  },
  {
    icon: FaCogs,
    title: 'Development',
    description:
      'We write clean, maintainable code using modern frameworks and best practices, turning designs into fully functional digital products.',
  },
  {
    icon: FaVial,
    title: 'Testing',
    description:
      'Rigorous testing across devices, browsers, and scenarios ensures your product is reliable, performant, and bug-free before launch.',
  },
  {
    icon: FaCloudUploadAlt,
    title: 'Deployment & Support',
    description:
      'We deploy your project to production and provide ongoing maintenance, updates, and support to ensure long-term success.',
  },
]

export const coreValues = [
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description:
      'We challenge conventions and explore creative solutions to deliver unique digital experiences that stand out.',
    color: '#2563EB',
  },
  {
    icon: FaHandshake,
    title: 'Collaboration',
    description:
      'We believe in the power of teamwork. By combining diverse skills and perspectives, we achieve exceptional results.',
    color: '#7C3AED',
  },
  {
    icon: FaStar,
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards, delivering quality work that meets and exceeds expectations.',
    color: '#F59E0B',
  },
  {
    icon: FaShieldAlt,
    title: 'Integrity',
    description:
      'We operate with honesty, transparency, and accountability in every interaction and every project we undertake.',
    color: '#10B981',
  },
  {
    icon: FaSeedling,
    title: 'Growth',
    description:
      'We embrace continuous learning and personal development, turning every challenge into an opportunity to grow.',
    color: '#EC4899',
  },
]

export const projects = [
  
]

export const teamMembers = [
  {
    name: 'Bradley Soloria',
    role: 'Web Developer',
    bio: 'Developer with a passion for building scalable web applications and seamless user experiences.',
    image: '/bradleysoloria.JPG',
    github: 'https://github.com/airolo',
    linkedin: 'https://www.linkedin.com/in/bradleysoloria/',
   
  },
  {
    name: 'Ivan Ken Chua',
    role: 'UI/UX & Graphic Designer',
    bio: 'Creative designer crafting intuitive interfaces, brand identities, and compelling visual assets that communicate clearly.',
    image: '/ivankenchua.jpg',
    github: 'https://github.com/BanDapol',
    linkedin: 'https://www.linkedin.com/in/ivankenchua/',
   
  },
  {
    name: 'Leenard Asejo',
    role: 'Web/Mobile Developer',
    bio: 'Developer focused on building responsive web applications and cross-platform mobile experiences.',
    image: '/leenardasejo.png',
    github: 'https://github.com/khiliver',
    linkedin: 'https://www.linkedin.com/in/leenard-asejo/',
   
  },
  {
    name: 'Joshua Romano Rico',
    role: 'Web/Mobile Developer',
    bio: 'Developer specializing in creating performant web and mobile applications with clean, maintainable code.',
    image: '/joshuaromanorico.png',
    github: '#',
    linkedin: '#',
   
  },
]

export const faqs = [
  {
    question: 'What services does DatDev offer?',
    answer:
      'DatDev provides a comprehensive range of digital solutions including web development, mobile application development, UI/UX design, and graphic design. We tailor our services to meet the unique needs of each client.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on scope and complexity. A simple website may take 1-2 weeks, while more complex applications can take 2-4 months. We provide detailed timelines during the planning phase.',
  },
  {
    question: 'How much do your services cost?',
    answer:
      'As a student-led team, we offer competitive and affordable pricing. Each project is quoted individually based on requirements. Contact us for a free consultation and estimate.',
  },
  {
    question: 'How does the collaboration process work?',
    answer:
      'We follow a structured six-step process: Discovery, Planning, Design, Development, Testing, and Deployment. We maintain regular communication through weekly updates and feedback sessions.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes, we provide ongoing maintenance and support packages to ensure your digital product remains secure, up-to-date, and performs optimally after launch.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We work with modern technologies including React, Next.js, Node.js, React Native, Tailwind CSS, Firebase, and more. We choose the best tech stack based on your project requirements.',
  },
  {
    question: 'Can we meet the team before starting?',
    answer:
      'Absolutely! We encourage an initial consultation meeting (virtual or in-person) to discuss your project, meet the team, and ensure we are the right fit for your needs.',
  },
  {
    question: 'How do I get started with DatDev?',
    answer:
      'Simply reach out through our contact form or email us directly. We will schedule a free consultation to discuss your project, goals, and how we can help bring your vision to life.',
  },
]

export const socialLinks = {
  github: 'https://github.com/datdevph-tech',
  linkedin: '#',
  email: 'datdev.ph@gmail.com',
  phone: '+63 993 056 1934',
  location: 'Divine Word College of Legazpi, Legazpi City, Philippines',
}

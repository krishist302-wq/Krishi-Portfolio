/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Linkedin, 
  Mail, 
  MapPin, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  ChevronRight,
  Menu,
  X,
  Award,
  Zap,
  Briefcase,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

// --- Types ---
interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  context: string;
  description: string[];
  impact?: string;
}

interface SkillDetail {
  title: string;
  description: string;
}

// --- Data ---
const EXPERIENCES: Experience[] = [
  {
    id: 'urja',
    role: 'Social Media Executive (Internship)',
    company: 'Urja Special School',
    period: 'Aug 2024 – Feb 2025',
    context: 'A Mumbai-based special school that wanted to make parents more aware of events and student activities online.',
    description: [
      'Planned and produced 200+ videos and photos for classroom activities, events, and festivals.',
      'Created 50+ Instagram Reels and motion graphics in Canva to highlight student achievements.',
      'Managed posting schedule, captions, and comments across platforms.'
    ],
    impact: 'Reach scaled to 5,000+ monthly views and followers grew by 25% in 6 months.'
  },
  {
    id: 'barcode',
    role: 'Influencer Outreach (Internship)',
    company: 'Barcode Agency (Samsung campaign)',
    period: 'Jul 2025',
    context: 'Worked on a Samsung campaign focused on YouTube creators.',
    description: [
      'Built a list of 200+ creators through manual research based on niche, audience size, and engagement.',
      'Reached out via email/DM with personalized pitches aligned to campaign goals.',
      'Tracked responses and maintained a simple sheet for approvals and live links.'
    ],
    impact: 'Secured 20+ high-impact collaborations with content going live on YouTube.'
  },
  {
    id: 'spdigitech',
    role: 'Social Media Executive (Internship)',
    company: 'Sp DigiTech Agency',
    period: 'Dec 2024 – Apr 2025',
    context: 'Agency handling multiple SME and local business accounts.',
    description: [
      'Managed day-to-day social media for 15+ brands, including Hetwork and Render.',
      'Created and published 120+ posts and stories with a consistent brand look and messaging.',
      'Set up and optimized Meta ad campaigns (traffic/engagement) reaching 50,000+ users.'
    ],
    impact: 'Achieved up to 40% engagement boost per brand across campaigns.'
  },
  {
    id: 'iide',
    role: 'Content & SEO Trainee',
    company: 'IIDE – The Digital School',
    period: 'Feb 2024',
    context: 'Focusing on content research and distribution.',
    description: [
      'Researched topics, keywords, and formats for LinkedIn and blog content.',
      'Wrote 5 LinkedIn posts and 2 SEO blogs focusing on digital marketing topics.'
    ],
    impact: 'Generated 1,000+ views through SEO and social distribution.'
  }
];

const SKILL_DETAILS: SkillDetail[] = [
  {
    title: 'Performance Marketing',
    description: 'Meta Ads campaign setup, optimization, and reporting focused on improving CTR, CPC, and conversions.'
  },
  {
    title: 'Social Media Management',
    description: 'Content planning, posting, and community engagement across platforms, with a consistent brand voice and visuals.'
  },
  {
    title: 'SEO & Content Strategy',
    description: 'Basic keyword research plus SEO-friendly blogs and posts designed to improve discoverability and on-page structure.'
  },
  {
    title: 'Analytics',
    description: 'Reading social media insights, tracking CTR and engagement, and using Google Analytics basics to understand traffic and behavior.'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-display font-bold tracking-tighter text-white"
      >
        KT.
      </motion.div>
      
      <div className="hidden md:flex gap-8 items-center">
        {['Work', 'Skills', 'About', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -2 }}
            className="text-sm uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors"
          >
            {item}
          </motion.a>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-5 py-2 bg-white text-charcoal text-xs font-bold uppercase tracking-widest rounded-full"
        >
          Let's Talk
        </motion.button>
      </div>

      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-charcoal/95 backdrop-blur-xl p-8 flex flex-col gap-6 md:hidden border-b border-white/10"
          >
            {['Work', 'Skills', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold text-white"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden grid-bg pt-20">
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-[1px] bg-accent" />
          <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold">Digital Marketing Executive</span>
        </div>
        
        <h1 className="text-6xl md:text-[10vw] font-display font-bold leading-[0.9] tracking-tighter mb-8">
          KRISHI <br />
          <span className="text-stroke hover:text-white transition-all duration-500 cursor-default">THAKKAR</span>
        </h1>

        <div className="flex flex-col gap-8">
          <div className="max-w-md text-white/60 text-lg leading-relaxed space-y-2">
            <p>Driving measurable growth through performance marketing, strategic content, and data-driven insights.</p>
            <p>Based in Mumbai, scaling brands globally.</p>
          </div>
          
          <div className="flex gap-4">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2 group"
            >
              View Projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const MetadataSection = () => {
  return (
    <section className="py-12 px-6 md:px-20 border-t border-white/5 bg-charcoal/50">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Location</span>
          <span className="text-xs font-medium flex items-center gap-2">
            <MapPin className="w-3 h-3 text-accent" /> 
            Mumbai, India
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Availability</span>
          <span className="text-xs font-medium flex items-center gap-2">
            <Zap className="w-3 h-3 text-green-500" /> 
            Open for opportunities
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Looking for</span>
          <span className="text-xs font-medium flex items-center gap-2">
            <Briefcase className="w-3 h-3 text-accent" /> 
            Digital Marketing / Social Media Executive
          </span>
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
  const stats = [
    { label: 'Reach Generated', value: '50K+', icon: Users },
    { label: 'Engagement Boost', value: '40%', icon: TrendingUp },
    { label: 'Influencer Outreach', value: '200+', icon: Target },
    { label: 'Content Pieces', value: '250+', icon: BarChart3 },
  ];

  return (
    <section className="py-20 px-6 md:px-20 border-y border-white/5 bg-white/[0.02]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <stat.icon className="w-5 h-5 text-accent mb-4" />
            <span className="text-4xl md:text-6xl font-display font-bold mb-2">{stat.value}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-20 light-section">
      <div className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-4">Experience</h2>
        <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4">SELECTED WORK</h3>
        <p className="text-charcoal/60 text-lg font-bold uppercase tracking-wider">
          Data-driven campaigns for agencies and educational institutions.
        </p>
        <p className="text-charcoal/40 text-[10px] uppercase tracking-widest font-bold mt-2">
          Brands: Urja Special School, Sp DigiTech Agency, Barcode Agency, Samsung
        </p>
      </div>

      <div className="flex flex-col">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative py-12 border-b border-charcoal/10 flex flex-col md:flex-row md:items-start gap-8 hover:bg-charcoal/[0.02] transition-colors px-4 -mx-4"
          >
            <div className="md:w-1/4">
              <span className="text-xs font-mono text-charcoal/30 mb-2 block">{exp.period}</span>
              <h4 className="text-xl font-bold text-charcoal group-hover:text-accent transition-colors">{exp.company}</h4>
            </div>
            
            <div className="md:w-2/4">
              <h5 className="text-lg font-bold mb-2">{exp.role}</h5>
              <p className="text-sm text-charcoal/60 mb-4 italic">{exp.context}</p>
              <ul className="space-y-3">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-sm text-charcoal/70 flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/4 flex flex-col items-start md:items-end">
              <div className="text-[10px] uppercase tracking-widest text-charcoal/40 mb-2 font-bold">Key Result</div>
              <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-xl text-xs font-bold text-accent leading-tight text-left md:text-right">
                {exp.impact}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<number>(0);

  return (
    <section id="skills" className="py-32 px-6 md:px-20 bg-charcoal border-y border-white/5">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">SKILLS & STRATEGY</h3>
          <p className="text-white/50 max-w-md leading-relaxed mb-12">
            Click on a capability to see how I approach it and the value I bring to each project.
          </p>
          
          <div className="flex flex-col gap-4">
            {SKILL_DETAILS.map((skill, i) => (
              <button
                key={i}
                onClick={() => setActiveSkill(i)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  activeSkill === i 
                  ? 'bg-accent border-accent text-white' 
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-accent/50'
                }`}
              >
                <span className="text-lg font-bold tracking-tight">{skill.title}</span>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeSkill === i ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkill}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-12 glass rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <h4 className="text-3xl font-display font-bold mb-6 text-accent">{SKILL_DETAILS[activeSkill].title}</h4>
              <p className="text-xl text-white/80 leading-relaxed font-light italic">
                "{SKILL_DETAILS[activeSkill].description}"
              </p>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Strategic Approach</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const HowIWork = () => {
  const steps = [
    { title: 'Understand', desc: 'Understand the brand, audience, and current metrics.' },
    { title: 'Plan', desc: 'Plan content and ad structure that fits the goals and resources.' },
    { title: 'Optimize', desc: 'Launch, monitor, and optimize weekly based on performance data.' },
  ];

  return (
    <section className="py-32 px-6 md:px-20 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-12 text-center">How I Work</h2>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-6 group">
              <div className="mt-1">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-white/50 leading-relaxed text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-20 light-section">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 rounded-full bg-accent/10 mb-8"
          >
            <Award className="w-8 h-8 text-accent" />
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-10">
            PASSIONATE ABOUT <span className="text-accent">DIGITAL GROWTH</span>
          </h2>
          <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
            <p>
              I’m Krishi, a Mumbai-based digital marketer who loves turning raw ideas into high-performing campaigns.
            </p>
            <p>
              Most of my work has been with education brands and small businesses, where I handle everything from content planning and creatives to Meta ad execution and reporting.
            </p>
            <p>
              Outside of work, I experiment with new AI tools and trends to make content faster, sharper, and more engaging.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-6">
            <div className="p-6 bg-charcoal/5 rounded-2xl">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Education</h4>
              <p className="text-xs text-charcoal/50">BBA (Digital Business)<br/>KES Shroff College</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-4 bg-accent/20 rounded-[2rem] blur-2xl -z-10" />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
          >
            <img 
              src="https://i.ibb.co/r2PY1hGK/Untitled-design-30.png" 
              alt="Krishi Thakkar" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CertificationsSection = () => {
  const certs = [
    { name: 'Brand Analysis and Consumer Valuation', url: 'https://drive.google.com/file/d/19vMU6nVNUMqe_0UScTNLXHfN1N76go5v/view?usp=sharing' },
    { name: 'AI in Digital Marketing', url: 'https://drive.google.com/file/d/1sju7AvJZlQ9bNsJlaLbLv2lW54GP9RWV/view?usp=sharing' },
    { name: 'Digital Marketing Communication', url: 'https://drive.google.com/file/d/1H2-XEAwRbii9iCLwvAe-wklKSU2iTnQb/view?usp=sharing' },
    { name: 'Entrepreneurship and Innovation Management', url: 'https://drive.google.com/file/d/1RNMLgg2tmenGxhU67NyrRtwthVokeFNm/view?usp=sharing' },
  ];

  return (
    <section className="py-32 px-6 md:px-20 light-section border-t border-charcoal/5">
      <div className="max-w-4xl">
        <h2 className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-12">Certifications</h2>
        <div className="grid gap-6">
          {certs.map((cert, i) => (
            <a 
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-bold text-charcoal hover:text-accent flex items-center gap-4 group transition-colors"
            >
              <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
              {cert.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "krishist302@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-accent text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6 uppercase">LET'S SCALE <br/>TOGETHER</h2>
          <p className="text-white/80 text-lg max-w-md mb-8">
            Ready to take your brand's digital presence to the next level? Let's connect and discuss your goals.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-auto">
          <button 
            onClick={copyToClipboard}
            className="group flex items-center justify-between p-6 bg-white text-charcoal rounded-2xl hover:bg-charcoal hover:text-white transition-all duration-300 min-w-[280px]"
          >
            <div className="flex items-center gap-4">
              {copied ? <Check className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6" />}
              <span className="font-bold uppercase tracking-widest text-sm">{copied ? 'Email Copied!' : 'Copy my email'}</span>
            </div>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <a 
            href="https://www.linkedin.com/in/krishi-thakkar-ab16652a9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-6 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all"
          >
            <Linkedin className="w-6 h-6" />
            <span className="font-bold uppercase tracking-widest text-sm">Visit LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5">
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">© 2026 Krishi Thakkar</span>
      <div className="flex gap-8">
        <a 
          href="https://www.linkedin.com/in/krishi-thakkar-ab16652a9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white font-bold transition-colors"
        >
          LinkedIn
        </a>
        <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white font-bold transition-colors">Resume</a>
      </div>
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Mumbai, India</span>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MetadataSection />
        <ImpactSection />
        <WorkSection />
        <SkillsSection />
        <HowIWork />
        <AboutSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SplitHero from '@/components/split-hero';
import ThermodynamicGrid from '@/components/ui/interactive-thermodynamic-grid';
import DitheringShader from '@/components/ui/dithering-shader';
import MatrixCowsayAnimation from '@/components/matrix-cowsay-animation';
import { RevealWaveImage } from '@/components/ui/reveal-wave-image';
import TypingText from '@/components/typing-text';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Award, Code, MapPin, Calendar, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import MobileLockScreen from '@/components/mobile-lock-screen';

const VintagePortfolio: React.FC = () => {
  const [gridMode, setGridMode] = useState<'inside-sphere' | 'global'>('inside-sphere');
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  // Dynamic opacity based on grid mode
  const cardOpacity = gridMode === 'inside-sphere' ? 'bg-black/30' : 'bg-black/50';

  React.useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleGrid = () => {
    setGridMode(prev => prev === 'inside-sphere' ? 'global' : 'inside-sphere');
  };

  const skills = [
    'FastAPI', 'Celery', 'Git', 'Redis', 'PyTest', 'Github Actions', 'Pandas',
    'MongoDB', 'NumPy', 'PostgreSQL', 'spaCy', 'Scikit-learn', 'Tensorflow',
    'Jupyter', 'Docker', 'Websockets', 'ElasticSearch', 'Azure', 'GCP', 'AWS', 'AutoScaling'
  ];

  const languages = [
    { name: 'Python', level: 95 },
    { name: 'Shell (Bash/ZSH)', level: 75 },
    { name: 'YAML', level: 80 },
  ];

  const projects = [
    { name: 'Context Search', description: 'Intelligent Search service based on NER, using data indexed in Elastic Search.', link: 'https://github.com/Lord-V15/Context-Search' },
    { name: 'OCR Notes Companion', description: 'iOS app for taking quick notes using the camera and saving them as PDF with a tensorflow OCR,', link: 'https://github.com/Lord-V15/OCR-Companion-v2' },
    { name: 'Galaxy-Classification', description: 'deep learning nn to classify the images of galaxies into different types', link: 'https://github.com/Lord-V15/Galaxy-Classification' },
  ];

  const workExperience = [
    {
      title: 'Team Lead, Product',
      company: 'Novyte Materials',
      period: '12/2025 - Present',
      location: 'Canberra, Australia (Remote)',
      description: 'The computational backbone for autonomous materials science — from search to synthesis.',
      link: 'https://www.novyte.in',
      achievements: [
        'Leading development for Q, the AI-based material synthesis platform for manufacturing R&D',
        'Architecting the platform\'s system design choices to ensure a scalable future',
        'Managing the Software and AI teams to ensure synergy across collaboration',
      ],
    },
    {
      title: 'Senior Engineer - MLOps',
      company: 'Fractal Analytics (Client: Mondelez International)',
      period: '06/2024 - 06/2025',
      location: 'Bangalore, India',
      link: 'https://fractal.ai',
      achievements: [
        'Leading MLOps for handling 3 client (Mondelez) projects',
        'Tech Stack: GCP + Databricks + BigQuery + Spark + Python + Sci-Kit Learn + GitHub Actions',
        'Worked on drift detection pipelines and deployment workflows for various markets',
      ],
    },
    {
      title: 'MLOps Engineer',
      company: 'Polymerize.io',
      period: '11/2021 - 02/2024',
      location: 'Singapore',
      description: 'Accelerating research in computational material science in a seamless, scalable way using A.I.',
      link: 'https://polymerize.io',
      achievements: [
        'Converting AI research into production features and ensuring infrastructure scalability',
        'Reduced 50% of the team efforts by automating CI/CD & Mongo workflows',
        'Built AI 2.0, a fully automated MLOps pipeline for training, evaluating and monitoring models',
      ],
    },
  ];

  const education = [
    {
      degree: 'Master of Machine Learning & Computer Vision',
      institution: 'Australian National University',
      period: '07/2025 - Present',
      note: 'Class Representative - Programming for Scientists',
    },
    {
      degree: 'Bachelor\'s of Technology in Computer Science',
      institution: 'Shri Mata Vaishno Devi University',
      period: '2017 - 2021',
      note: 'Class President - 2018 to 2021',
    },
  ];

  const certificates = [
    'DeepLearning.AI: Advanced Deployment Scenarios with TensorFlow',
    'IBM: Data Visualization with Python',
    'Udemy: Automate the Boring Stuff with Python Programming',
    'Winner - Pokemon Webinar Challenge',
  ];

  return (
    <>
      {/* Mobile Lock Screen - visible only on small screens */}
      <MobileLockScreen />

      {/* Desktop Portfolio - hidden on mobile */}
      <div className="hidden md:block">
        {/* Grey background - fixed, only in global mode */}
        {gridMode === 'global' && (
          <div className="fixed inset-0 z-[-1] bg-[#0a0a0a]" />
        )}

        {/* Black background - fixed, only in inside-sphere mode */}
        {gridMode === 'inside-sphere' && (
          <>
            <div className="fixed inset-0 z-[-1] bg-black" />
            <MatrixCowsayAnimation />
          </>
        )}

      {/* Global Thermodynamic Grid - covers entire viewport */}
      <ThermodynamicGrid
        resolution={20}
        coolingFactor={0.97}
        className="fixed inset-0 z-0"
        clipMode={gridMode === 'inside-sphere' ? 'inside-circle' : 'none'}
        clipCenter={{ x: 75, y: 50 }}
        clipRadius={17.5}
      />

      {/* Split Hero Section */}
      <SplitHero gridMode={gridMode} onToggle={handleToggleGrid} />

      {/* Rest of Portfolio */}
      <div className="relative min-h-screen bg-transparent text-[#00ff41] overflow-x-hidden font-mono">

        {/* CRT Scanline Effect - z-10 but pointer-events-none */}
        <div className="pointer-events-none fixed inset-0 z-10 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)_1px,transparent_1px,transparent_2px)]" />

        {/* CRT Vignette - z-10 but pointer-events-none */}
        <div className="pointer-events-none fixed inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

        {/* Content layer - z-20 on top */}
        <div className="relative z-20">

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 text-2xl mb-2">
                <Code className="w-8 h-8 text-[#ff6b35]" />
                <span className="text-[#ff6b35]">&gt;</span>
                <span className="text-[#ffbe0b]">./skills --list-all</span>
              </div>
            </motion.div>

            <Card className={`${cardOpacity} backdrop-blur-sm border-4 border-[#00ff41] p-8 shadow-[0_0_30px_rgba(0,255,65,0.3)] pointer-events-none`}>
              <div className="mb-8">
                <div className="text-[#ff6b35] mb-4">[TECH_STACK]:</div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,255,65,0.5)" }}
                    >
                      <Badge className="bg-transparent border-2 border-[#00ff41] text-[#00ff41] px-4 py-2 text-sm hover:bg-[#00ff41] hover:text-black cursor-pointer pointer-events-auto">
                        [{skill}]
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="text-[#ff6b35]">[LANGUAGES]:</div>
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="text-sm">
                      <span className="text-[#00ff41]">{lang.name}</span>
                    </div>
                    <div className="h-4 bg-black border-2 border-[#00ff41] relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.8)]"
                      />
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Open Source Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 text-2xl mb-2">
                <Code className="w-8 h-8 text-[#ff6b35]" />
                <span className="text-[#ff6b35]">&gt;</span>
                <span className="text-[#ffbe0b]">git log --open-source</span>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.a
                href="https://github.com/DerwenAI/pytextrank"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,255,65,0.5)" }}
                className="block"
              >
                <Card className={`${cardOpacity} backdrop-blur-sm border-4 border-[#00ff41] p-6 h-full shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] transition-all cursor-pointer pointer-events-auto`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="text-[#ff6b35] text-sm mb-2"
                  >
                    <TypingText text="[CONTRIBUTION_1]" delay={0} speed={50} />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="text-xl font-bold text-[#ffbe0b] mb-3"
                  >
                    <TypingText text="spaCy, PyTextRank" delay={300} speed={40} />
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="text-[#00ff41]/80"
                  >
                    <TypingText text="Helped identify issues with existing code and fixed the pipeline compatibility for spaCy v3 release" delay={800} speed={25} />
                  </motion.p>
                </Card>
              </motion.a>

              <motion.a
                href="https://github.com/FastAPI/FastAPI"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.15 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,255,65,0.5)" }}
                className="block"
              >
                <Card className={`${cardOpacity} backdrop-blur-sm border-4 border-[#00ff41] p-6 h-full shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] transition-all cursor-pointer pointer-events-auto`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="text-[#ff6b35] text-sm mb-2"
                  >
                    <TypingText text="[CONTRIBUTION_2]" delay={0} speed={50} />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="text-xl font-bold text-[#ffbe0b] mb-3"
                  >
                    <TypingText text="FastAPI" delay={300} speed={40} />
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="text-[#00ff41]/80"
                  >
                    <TypingText text="Contributed in fixing a swagger docs bug. Community member for contributing to open issues" delay={600} speed={25} />
                  </motion.p>
                </Card>
              </motion.a>
            </div>
          </div>
        </section>


        {/* Work Experience Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 text-2xl mb-2">
                <Briefcase className="w-8 h-8 text-[#ff6b35]" />
                <span className="text-[#ff6b35]">&gt;</span>
                <span className="text-[#ffbe0b]">cat experience.log</span>
              </div>
            </motion.div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className={`${cardOpacity} backdrop-blur-sm border-4 border-[#00ff41] pointer-events-none p-8 shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] transition-all`}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.8 }}
                          className="text-[#ff6b35] text-sm mb-2"
                        >
                          <TypingText text={`[POSITION_${workExperience.length - index}]`} delay={0} speed={50} />
                        </motion.div>
                        <motion.h3
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.8 }}
                          className="text-2xl font-bold text-[#ffbe0b] mb-2"
                        >
                          <TypingText text={job.title} delay={500} speed={40} />
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.8 }}
                          className="text-xl text-[#00ff41]"
                        >
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#ffbe0b] transition-colors pointer-events-auto underline decoration-[#00ff41]/30 hover:decoration-[#ffbe0b]"
                          >
                            <TypingText text={job.company} delay={1000} speed={40} />
                          </a>
                        </motion.p>
                      </div>
                      <div className="text-[#00ff41]/80 text-sm md:text-right mt-2 md:mt-0">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.8 }}
                          className="flex items-center gap-2 mb-1"
                        >
                          <Calendar className="w-4 h-4 text-[#ff6b35]" />
                          <TypingText text={`[${job.period}]`} delay={1500} speed={35} />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.8 }}
                          className="flex items-center gap-2"
                        >
                          <MapPin className="w-4 h-4 text-[#ff6b35]" />
                          <TypingText text={`[${job.location}]`} delay={2000} speed={35} />
                        </motion.div>
                      </div>
                    </div>

                    {job.description && (
                      <div className="text-[#00ff41]/70 mb-4 italic border-l-4 border-[#ff6b35] pl-4">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.8 }}
                        >
                          <TypingText text={job.description} delay={2500} speed={25} />
                        </motion.div>
                      </div>
                    )}

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-[#ff6b35] text-sm mb-2"
                    >
                      <TypingText text="[ACHIEVEMENTS]:" delay={3500} speed={50} />
                    </motion.div>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.8 }}
                          className="text-[#00ff41]/80 flex items-start"
                        >
                          <span className="text-[#ff6b35] mr-2 mt-1">▸</span>
                          <TypingText text={achievement} delay={4000 + (i * 1000)} speed={20} />
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Education Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 text-2xl mb-2">
                <GraduationCap className="w-8 h-8 text-[#ff6b35]" />
                <span className="text-[#ff6b35]">&gt;</span>
                <span className="text-[#ffbe0b]">./education --query</span>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,255,65,0.5)" }}
                >
                  <Card className={`${cardOpacity} backdrop-blur-sm border-4 border-[#00ff41] pointer-events-none p-6 h-full shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all`}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-[#ff6b35] text-sm mb-2"
                    >
                      <TypingText text={`[DEGREE_${index + 1}]`} delay={0} speed={50} />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-xl font-bold text-[#ffbe0b] mb-2"
                    >
                      <TypingText text={edu.degree} delay={300} speed={35} />
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-lg text-[#00ff41] mb-2"
                    >
                      <TypingText text={edu.institution} delay={800} speed={30} />
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-[#00ff41]/70 mb-2"
                    >
                      <TypingText text={`[${edu.period}]`} delay={1200} speed={40} />
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-[#00ff41]/80 italic border-l-4 border-[#ff6b35] pl-3"
                    >
                      <TypingText text={edu.note} delay={1600} speed={25} />
                    </motion.p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 text-2xl mb-2">
                <Cpu className="w-8 h-8 text-[#ff6b35]" />
                <span className="text-[#ff6b35]">&gt;</span>
                <span className="text-[#ffbe0b]">cd /projects && ls</span>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,65,0.5)" }}
                  className="block"
                >
                  <Card className={`${cardOpacity} backdrop-blur-sm border-4 border-[#00ff41] p-6 h-full shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] transition-all cursor-pointer pointer-events-auto`}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-[#ff6b35] text-sm mb-2"
                    >
                      <TypingText text={`[PROJECT_${index + 1}]`} delay={0} speed={50} />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-xl font-bold text-[#ffbe0b] mb-3"
                    >
                      <TypingText text={project.name} delay={300} speed={40} />
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="text-[#00ff41]/80"
                    >
                      <TypingText text={`> ${project.description}`} delay={600} speed={25} />
                    </motion.p>
                  </Card>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 text-2xl mb-2">
                <Award className="w-8 h-8 text-[#ff6b35]" />
                <span className="text-[#ff6b35]">&gt;</span>
                <span className="text-[#ffbe0b]">cat certificates.txt</span>
              </div>
            </motion.div>

            <Card className={`${cardOpacity} backdrop-blur-sm border-4 border-[#00ff41] p-8 shadow-[0_0_20px_rgba(0,255,65,0.2)]`}>
              <div className="text-[#ff6b35] mb-4">[ACHIEVEMENTS_UNLOCKED]:</div>
              <ul className="space-y-4">
                {certificates.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-[#00ff41] flex items-start text-lg"
                  >
                    <span className="text-[#ff6b35] mr-3 text-xl">✓</span>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t-4 border-[#00ff41]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="text-[#ff6b35] text-sm mb-2">[SYSTEM_MESSAGE]:</div>
                <p className="text-xl text-[#00ff41] mb-4">I must not fear. Fear is the mind-killer</p>
              </div>

              <div className="flex justify-center gap-6 mb-6">
                <motion.a
                  href="mailto:vibhanshg@gmail.com"
                  whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 10px rgba(0,255,65,0.8))" }}
                  className="text-[#00ff41] hover:text-[#ffbe0b] transition-colors"
                >
                  <Mail className="w-8 h-8" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/vibhansh-gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 10px rgba(0,255,65,0.8))" }}
                  className="text-[#00ff41] hover:text-[#ffbe0b] transition-colors"
                >
                  <FaLinkedin className="w-8 h-8" />
                </motion.a>
                <motion.a
                  href="https://github.com/Lord-V15"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, filter: "drop-shadow(0 0 10px rgba(0,255,65,0.8))" }}
                  className="text-[#00ff41] hover:text-[#ffbe0b] transition-colors"
                >
                  <FaGithub className="w-8 h-8" />
                </motion.a>
              </div>

              <div className="text-[#00ff41]/60 text-sm font-mono">
                <div>[EOF] - End of File</div>
                <div className="mt-2 animate-pulse">&gt;_</div>
              </div>
            </motion.div>
          </div>
        </footer>
        </div>
      </div>
      </div>
    </>
  );
};

export default VintagePortfolio;

"use client"; // Required for Framer Motion animations

import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import { FiGithub } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal Finance Tracker App',
      description: 'A web application for people to add their incomes, budgets, daily transactions and goals.',
      tags: ['Express.js', 'MongoDB', 'JWT', 'JavaScript', 'Vue.js'],
      githubLink: 'https://github.com/sandunlak/Personal-Finance-Tracker-App',
      demoLink: 'https://cool-bavarois-339bf8.netlify.app/'
    },
    {
      id: 2,
      title: 'BIDMASTER Online Auction System',
      description: 'A web application for people to sell their products through the bidding process.',
      tags: [' MongoDB, Express, ReactJS, NodeJS, CSS, React-Bootstrap, JavaScript'],
      githubLink: 'https://github.com/sandunlak/BidMaster_Uni_project',
      demoLink: '#'
    },
    {
      id: 3,
      title: 'Health Mate Online Fitness Mobile App ',
      description: 'A Mobile app for university students and busy peoples to maintain their physical and mental health. ',
      tags: ['Kotlin'],
      githubLink: 'https://github.com/sandunlak/HealthMateApp',
      demoLink: '#'
    },
  ];

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Projects</h2>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={styles.projectCard}
            >
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.projectLinks}>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <FiGithub /> View Code
                </a>
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
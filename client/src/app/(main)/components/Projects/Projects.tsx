"use client"; // Required for Framer Motion animations

import { motion } from 'framer-motion';
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product listings, cart functionality, and secure checkout.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies.',
      tags: ['Next.js', 'CSS Modules', 'Framer Motion'],
      link: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks with drag-and-drop functionality.',
      tags: ['React', 'Firebase', 'Material UI'],
      link: '#',
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
              <a href={project.link} className={styles.projectLink}>
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
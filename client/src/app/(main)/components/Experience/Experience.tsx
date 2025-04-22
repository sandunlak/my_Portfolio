/*"use client"; // Required for Framer Motion animations

import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Developed and maintained responsive web applications using React and Next.js. Collaborated with designers to implement UI/UX improvements.',
  },
  {
    id: 2,
    role: 'Junior Web Developer',
    company: 'Digital Creations',
    period: '2019 - 2021',
    description: 'Built and optimized web pages for performance and accessibility. Assisted in the development of internal tools and applications.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Experience</h2>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={styles.timelineItem}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>{exp.role}</h3>
                <div className={styles.timelineMeta}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}*/
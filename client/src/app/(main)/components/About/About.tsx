"use client"; // Add this directive since we're using motion

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.aboutImage}
          >
            <div className={styles.imageWrapper}>
              {/* Replace with your image */}
              <div className={styles.imagePlaceholder}></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.aboutText}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a passionate frontend developer with expertise in creating modern,
              responsive web applications. With a strong foundation in JavaScript and
              React, I bring ideas to life with clean, efficient code.
            </p>
            
            <div className={styles.skills}>
              <h4>My Skills</h4>
              <ul className={styles.skillsList}>
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML/CSS', 'Node.js', 'Git'].map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
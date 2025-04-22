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
            I am a Software Engineering undergraduate with a focus on full-stack development, skilled in both Java and JavaScript 
            frameworks.
            </p>
            
            <div className={styles.skills}>
              <h4>My Skills</h4>
              <ul className={styles.skillsList}>
                {['JavaScript', ' JAVA' , 'Python' , 'Kotlin' ,'C' , 'C++' , 'HTML' ,'CSS','SQL' , 'MySQL','MongoDB','ReactJS','NodeJS','NextJS','Express','Vue.js','GitHub','Eclipse','Postman','Figma' ].map((skill) => (
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
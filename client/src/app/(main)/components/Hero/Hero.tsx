"use client"; // Add this directive since we're using motion

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={`section ${styles.hero}`}>
      <div className="container">
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroText}
          >
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.highlight}>Your Name</span>
            </h1>
            <h2 className={styles.heroSubtitle}>Frontend Developer</h2>
            <p className={styles.heroDescription}>
              I build exceptional digital experiences with modern web technologies.
            </p>
            <div className={styles.heroButtons}>
              <a href="#contact" className={`btn btn-primary ${styles.heroBtn}`}>
                Contact Me
              </a>
              <a href="#projects" className={styles.heroBtnSecondary}>
                View My Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroImage}
          >
            {/* Replace with your image */}
            <div className={styles.imagePlaceholder}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
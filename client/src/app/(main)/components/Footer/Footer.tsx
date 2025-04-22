import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <h3>Sandun Hettiarachchi</h3>
            <p>modern web experiences.</p>
          </div>

          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSocial}>
            <h4>Connect With Me</h4>
            <div className={styles.socialIcons}>
              <a href="https://github.com/sandunlak" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="linkedin.com/in/sandun-hettiarachchi" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Sandun Hettiarachchi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
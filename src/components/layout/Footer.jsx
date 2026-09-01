import styles from "./Footer.module.css";
import logo from "/link.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder}></div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.brand}>
            <img src={logo} alt="ektu link" className={styles.logo} />
            <span>ektu link</span>
          </div>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} ektu link. Professional URL
            management.
          </p>
        </div>
        <nav className={styles.links}>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#github">Github</a>
          <a href="#status">System Status</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

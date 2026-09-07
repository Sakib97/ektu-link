import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiLink, FiBarChart2, FiShield } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";
import logo from "/eL2.png";

import { useLocation, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import { signInWithProvider } from "../functions/authFunc";

const SignIn = () => {

  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSignIn = async (provider) => {
    setLoading(true);
    setErrorMsg(null);
    try {
      await signInWithProvider(provider);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.leftContent}>
          <div className={styles.brand}>
            <img src={logo} alt="ektu link" className={styles.logo} />
            <span>ektu link</span>
          </div>
          <h1 className={styles.heroText}>
            Manage all your links in one place.
          </h1>
          <p className={styles.heroSub}>
            Shorten, brand, and track every URL with enterprise-grade analytics
            and security.
          </p>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <FiLink className={styles.featureIcon} />
              <div>
                <strong>Custom short links</strong>
                <span>Branded domains &amp; slugs</span>
              </div>
            </div>
            <div className={styles.featureItem}>
              <FiBarChart2 className={styles.featureIcon} />
              <div>
                <strong>Real-time analytics</strong>
                <span>Clicks, locations &amp; devices</span>
              </div>
            </div>
            <div className={styles.featureItem}>
              <FiShield className={styles.featureIcon} />
              <div>
                <strong>Enterprise security</strong>
                <span>Encryption &amp; access controls</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Welcome back</h2>
          <p className={styles.cardSub}>Sign in to your account to continue</p>

          <div className={styles.buttons}>
            <button className={styles.googleBtn} onClick={() => handleSignIn("google")}>
              <FcGoogle size={22} />
              Continue with Google
            </button>
            <button className={styles.facebookBtn} onClick={() => handleSignIn("facebook")}>
              <FaFacebook size={20} />
              Continue with Facebook
            </button>
          </div>

          <p className={styles.terms}>
            By continuing, you agree to our{" "}
            <a href="#terms">Terms of Service</a> and{" "}
            <a href="#privacy">Privacy Policy</a>.
          </p>

          {/* <div className={styles.divider}>
            <span>New here?</span>
          </div>
          <Link to="#get-started" className={styles.signupLink}>
            Create a free account &rarr;
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

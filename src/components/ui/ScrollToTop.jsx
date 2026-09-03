import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = ({ containerRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef?.current;
    const target = el || window;

    const handleScroll = () => {
      const scrollY = el ? el.scrollTop : window.scrollY;
      setVisible(scrollY > 200);
    };
    target.addEventListener("scroll", handleScroll);
    return () => target.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  const scrollToTop = () => {
    const el = containerRef?.current;
    if (el) {
      el.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "44px",
        height: "44px",
        borderRadius: "10px",
        border: "1px solid rgba(139, 26, 26, 0.15)",
        background: "#8b1a1a",
        color: "#fff",
        fontSize: "1.15rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 14px rgba(139, 26, 26, 0.35)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        zIndex: 9999,
      }}
    >
      <FiArrowUp />
    </button>
  );
};

export default ScrollToTop;

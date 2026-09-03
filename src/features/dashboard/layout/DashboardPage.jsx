import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FiLink,
  FiBarChart2,
  FiFileText,
  FiPieChart,
  FiSettings,
  FiLogOut,
  FiSearch,
  FiBell,
  FiHelpCircle,
  FiPlus,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { PiLinkSimpleBold } from "react-icons/pi";
import styles from "./DashboardPage.module.css";
import logo from "/link.png";

const navItems = [
  { to: "/dashboard/links", icon: <FiLink />, label: "Links" },
  { to: "/dashboard/analytics", icon: <FiBarChart2 />, label: "Analytics" },
  {
    to: "/dashboard/billing",
    icon: <FiFileText />,
    label: "Billing & Invoices",
  },
  { to: "/dashboard/usage", icon: <FiPieChart />, label: "Usage" },
];

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className={styles.wrapper}>
      {sidebarOpen && <div className={styles.overlay} onClick={closeSidebar} />}

      <aside
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.sidebarTop}>
          <div className={styles.brand}>
            <div className={styles.avatar}>e</div>
            <div>
              <div className={styles.brandName}>ektu link</div>
              <div className={styles.brandSub}>Personal Dashboard</div>
            </div>
          </div>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className={styles.sidebarBottom}>
          <div className={styles.planCard}>
            <span className={styles.planLabel}>Pro Plan</span>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: "75%" }} />
            </div>
            <span className={styles.planUsage}>7,500 / 10,000 clicks</span>
            <button className={styles.upgradeBtn}>Upgrade Plan</button>
          </div>
          <NavLink
            to="/dashboard/settings"
            onClick={closeSidebar}
            className={styles.bottomLink}
          >
            <FiSettings /> Settings
          </NavLink>
          <button className={styles.bottomLink} onClick={() => navigate("/")}>
            <FiLogOut /> Logout
          </button>
        </div>
      </aside>

      <div className={styles.main}>
        <header className={styles.topbar}>
          
          <button
            className={styles.menuBtn}
            onClick={() => setSidebarOpen(true)}
          >
            <CgMenuLeftAlt size={28} />
          </button>

          <NavLink to="/" className={styles.homeLink}>
            Home
          </NavLink>

          <div className={styles.searchBox}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search links..."
              className={styles.searchInput}
            />
          </div>

          <div className={styles.topbarRight}>
            <button className={styles.iconBtn}>
              <FiBell />
            </button>
            <button className={styles.iconBtn}>
              <FiHelpCircle />
            </button>
            <button className={styles.createBtn}>
              <PiLinkSimpleBold /> Shorten Link
            </button>
          </div>
        </header>

         <div className={styles.searchBoxMobile}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search links..."
              className={styles.searchInput}
            />
          </div>

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

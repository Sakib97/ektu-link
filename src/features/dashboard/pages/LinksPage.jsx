import {
  FiTrendingUp,
  FiLink,
  FiActivity,
  FiFilter,
  FiBarChart2,
  FiCalendar,
  FiArrowRight,
  FiImage,
  FiFileText,
  FiFile,
} from "react-icons/fi";
import styles from "./LinksPage.module.css";

const stats = [
  {
    label: "Total Clicks (30d)",
    value: "124,592",
    sub: "+14% vs last month",
    subColor: "#2e7d32",
    icon: <FiTrendingUp />,
    iconColor: "#e74c3c",
  },
  {
    label: "Active Links",
    value: "342",
    sub: "4 created this week",
    subColor: "#555",
    icon: <FiLink />,
    iconColor: "#3498db",
  },
  {
    label: "Current Usage",
    value: "75%",
    sub: "7,500 / 10,000",
    subColor: "#555",
    icon: <FiActivity />,
    iconColor: "#555",
    progress: 75,
  },
];

const recentLinks = [
  {
    icon: <FiImage />,
    iconBg: "#fce4e4",
    iconColor: "#c0392b",
    title: "Summer Sale 2024 Campaign",
    url: "https://ecommerce-store.com/promotions/summer-sale-2...",
    short: "ektu.link/summer24",
    alias: true,
    clicks: "45.2k",
    date: "Oct 12",
  },
  {
    icon: <FiFileText />,
    iconBg: "#e8eaf6",
    iconColor: "#3f51b5",
    title: "Q3 Investor Report",
    url: "https://corporate.com/investors/reports/2024/q3-earn...",
    short: "ektu.link/q3-report",
    alias: true,
    clicks: "1.2k",
    date: "Oct 10",
  },
  {
    icon: <FiFile />,
    iconBg: "#f0f0f0",
    iconColor: "#666",
    title: "No Alias Assigned",
    titleItalic: true,
    url: "https://docs.google.com/spreadsheets/d/1BxiMVs0X...",
    short: "ektu.link/x7y9z2",
    alias: false,
    clicks: "84",
    date: "Oct 08",
  },
  {
    icon: <FiFile />,
    iconBg: "#f0f0f0",
    iconColor: "#666",
    title: "No Alias Assigned",
    titleItalic: true,
    url: "https://docs.google.com/spreadsheets/d/1BxiMVs0X...",
    short: "ektu.link/x7y9z2",
    alias: false,
    clicks: "84",
    date: "Oct 08",
  },
  {
    icon: <FiFile />,
    iconBg: "#f0f0f0",
    iconColor: "#666",
    title: "No Alias Assigned",
    titleItalic: true,
    url: "https://docs.google.com/spreadsheets/d/1BxiMVs0X...",
    short: "ektu.link/x7y9z2",
    alias: false,
    clicks: "84",
    date: "Oct 08",
  },
  {
    icon: <FiFile />,
    iconBg: "#f0f0f0",
    iconColor: "#666",
    title: "No Alias Assigned",
    titleItalic: true,
    url: "https://docs.google.com/spreadsheets/d/1BxiMVs0X...",
    short: "ektu.link/x7y9z2",
    alias: false,
    clicks: "84",
    date: "Oct 08",
  },
];

const LinksPage = () => {
  return (
    <div>
      <div className={styles.statsGrid}>
        {stats.map((s) => (
          <div key={s.label} className={styles.statCard}>
            <div className={styles.statTop}>
              <span className={styles.statLabel}>{s.label}</span>
              <span
                className={styles.statIcon}
                style={{ color: s.iconColor }}
              >
                {s.icon}
              </span>
            </div>
            <div className={styles.statValue}>{s.value}</div>
            {s.progress != null && (
              <div className={styles.statProgress}>
                <div
                  className={styles.statProgressFill}
                  style={{ width: `${s.progress}%` }}
                />
              </div>
            )}
            <div className={styles.statSub} style={{ color: s.subColor }}>
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Recent Links</h2>
        <button className={styles.filterBtn}>
          <FiFilter /> Filter
        </button>
      </div>

      <div className={styles.linksList}>
        {recentLinks.map((link) => (
          <div key={link.short} className={styles.linkCard}>
            <div
              className={styles.linkIcon}
              style={{ background: link.iconBg, color: link.iconColor }}
            >
              {link.icon}
            </div>
            <div className={styles.linkInfo}>
              <div
                className={styles.linkTitle}
                style={link.titleItalic ? { fontStyle: "italic" } : {}}
              >
                {link.title}
              </div>
              <div className={styles.linkUrl}>{link.url}</div>
              <div className={styles.linkMeta}>
                <span className={styles.shortUrl}>{link.short}</span>
                {link.alias && (
                  <span className={styles.aliasBadge}>Custom Alias</span>
                )}
              </div>
            </div>
            <div className={styles.linkStats}>
              <span className={styles.clickCount}>
                <FiBarChart2 /> {link.clicks}
              </span>
              <span className={styles.linkDate}>
                <FiCalendar /> {link.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.viewAll}>
        View All Links <FiArrowRight />
      </button>
    </div>
  );
};

export default LinksPage;

// src/app/components/Stats/Stats.jsx
import styles from './Stats.module.scss';

export default function Stats() {
  const stats = [
    { value: '430K+', label: 'Art Works' },
    { value: '159K+', label: 'Creators' },
    { value: '87K+', label: 'Collections' },
  ];

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
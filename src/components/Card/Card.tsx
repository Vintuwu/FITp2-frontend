// Importa el archivo CSS del módulo como siempre.
import styles from './Card.module.css';

interface CardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  author?: string;
  date?: string;
  tags?: string[];
  imageUrl?: string;
  link?: string;
  isAlt?: boolean;
}

export const Card = ({
  title,
  subtitle,
  description,
  author,
  date,
  tags = [],
  imageUrl,
  link = "#",
  isAlt,
}: CardProps) => {
  return (
    <div className={`${styles.card} ${isAlt ? styles.alt : ''}`}>
      <div className={styles.meta}>
        {imageUrl && (
          <div
            className={styles.photo}
            style={{ backgroundImage: `url(http://localhost:1337${imageUrl})` }}
          ></div>
        )}
        <ul className={`${styles.ul} ${styles.details}`}>
          {author && (
            <li className={styles.author}>
              <a href={link} className={styles.a}>{author}</a>
            </li>
          )}
          {date && (
            <li className={styles.date}>{date}</li>
          )}
          {tags.length > 0 && (
            <li className={styles.tags}>
              <ul className={styles.ul}>
                {tags.map((tag, index) => (
                  <li key={index}>
                    <a href="#" className={styles.a}>{tag}</a>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.description}>
        {title && <h1 className={styles.h1}>{title}</h1>}
        {subtitle && <h2 className={styles.h2}>{subtitle}</h2>}
        {description && <p className={styles.p}>{description}</p>}
        <p className={`${styles.p} ${styles['read-more']}`}>
          <a href={link} className={styles.a}>Ver más</a>
        </p>
      </div>
    </div>
  );
};

import Title from "../Title/Title";
import styles from "./Sections.module.css";
const Section = ({
  title,
  highlightWord,
  children,
  className,
  style,
  viewAll,
  contentStyle,
  contentClass,
}) => {
  return (
    <div className={`${styles.Section} ${className}`} style={style}>
      <Title title={title} highlightWord={highlightWord} viewAll={viewAll} />
      <div className={`${styles.Content} ${contentClass}`} style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Section;

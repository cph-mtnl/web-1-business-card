import styles from "./TheHeader.module.css";
import HTag from "./example/HTag";

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <HTag hType="h2" hMessage="Business Card" />
    </header>
  );
}

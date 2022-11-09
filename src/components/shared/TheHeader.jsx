import styles from "./TheHeader.module.css";

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <h1>Business card</h1>
      <button className={styles.button}>Create new</button>
    </header>
  );
}
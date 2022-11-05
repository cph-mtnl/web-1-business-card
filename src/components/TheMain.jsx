import styles from "./TheMain.module.css";
import BusinessCard from "./BusinessCard";

export default function TheMain() {
  return (
    <main className={styles.main}>
      <BusinessCard
        name="Laura Smith"
        job="Frontend Devoloper"
        website="laurasmith.website"
      />
      <BusinessCard
        name="Laura Nielsen"
        job="Frontend Devoloper"
        website="laurasmith.website"
      />
      <BusinessCard
        name="Laura JohnJohn"
        job="Frontend Devoloper"
        website="laurasmith.website"
      />
      <BusinessCard
        name="Laura Something"
        job="Frontend Devoloper"
        website="laurasmith.website"
      />
    </main>
  );
}

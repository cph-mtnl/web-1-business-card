import styles from "./BusinessCard.module.css";

/*
 props: {
  name: "laura smith",
  job: "frontend devloper",
  website: "somewebsite.com"
 }
*/

const BusinessCard = ({name, job, website}) => {
  return (
   <div className={styles.card}>
    <p>{name}</p>
    <p>{job}</p>
    <p>{website}</p>
   </div>
  );
}

export default BusinessCard;
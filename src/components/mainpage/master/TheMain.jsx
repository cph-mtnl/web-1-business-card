import styles from "./TheMain.module.css";
import BusinessCard from "./BusinessCard.jsx";
import BusinessDetails from "../details/BusinessDetails.jsx";

export default function TheMain() {
  const businessDetails = {
    name: "Mathias Nielsen",
    job: "Adjunkt",
    website: "mathiasnielsen.io",
    email: "mtnl@cphbusiness.dk",
    about:
      'Hey! I\'m a new Adjunkt here at CPH Business. I have since my graduation in 2018, worked 2,5 years as a consultant, where i have been far and wide, and gained lots of experience, both in frontend and backend, so I have a pretty solid knowledge to the stack. Just before i joined CPH Business, I was a year with "Udviklings- og Forenklingsstyrelsen", as a frontend developer.',
    interests:
      "My spare time is pretty stereotypical with family, friends, tv-shows and gaming (currently Dota 2 and Apex Legends), but enough about me!",
  };

  return (
    <main className={styles.main}>
      <div className={styles.split}>
        <div className={styles.cardLayout}>
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
        </div>
      </div>
      <div className={styles.split}>
        <BusinessDetails details={businessDetails} />
      </div>
    </main>
  );
}

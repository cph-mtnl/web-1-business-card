import Modal from "react-modal";
import { useState } from "react";
import styles from "./CreateBusinessCard.module.css";
import MyButton from "../atoms/MyButton";

export default function CreateBusinessCard({ showModal, closeModal }) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [website, setWebsite] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updateJob = (event) => {
    setJob(event.target.value);
  };

  const updateWebsite = (event) => {
    setWebsite(event.target.value);
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Create new business card"
      className={styles.modal}
    >
      <div className={`${styles.defaultFlex} ${styles.container}`}>
        <h1>Create a new business contact</h1>
        <div className={styles.defaultFlex}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={updateName}
          />
          <input
            type="text"
            placeholder="Job title"
            name="job"
            value={job}
            onChange={updateJob}
          />
          <input
            type="text"
            placeholder="Website"
            name="name"
            value={website}
            onChange={updateWebsite}
          />
        </div>
        <MyButton text="Create" />
      </div>
    </Modal>
  );
}

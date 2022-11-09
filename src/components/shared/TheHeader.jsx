import { useState } from "react";
import styles from "./TheHeader.module.css";
import CreateBusinessCard from "./CreateBusinessCard";

export default function TheHeader() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className={styles.header}>
      <h1>Business card</h1>
      <button onClick={handleClick} className={styles.button}>
        Create new
      </button>
      <CreateBusinessCard showModal={showModal} closeModal={closeModal} />
    </header>
  );
}

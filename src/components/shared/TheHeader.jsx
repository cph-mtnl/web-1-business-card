import { useState } from "react";
import styles from "./TheHeader.module.css";
import Modal from "react-modal";

export default function TheHeader() {
  let [showModal, setShowModal] = useState(false);

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
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Create new business card"
      >
        <h1>Temporary</h1>
      </Modal>
    </header>
  );
}

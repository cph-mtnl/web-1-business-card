import Modal from "react-modal";
import { useState } from "react";

export default function CreateBusinessCard({ showModal, closeModal }) {
  const [name, setName] = useState("");

  const updateName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Create new business card"
    >
      <h1>Temporary</h1>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={updateName}
      />
    </Modal>
  );
}

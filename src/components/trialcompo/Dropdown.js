import React, { useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";

Modal.setAppElement("#root"); // Set the root element for accessibility

const MyDropdownModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="link" id="dropdown-basic">
          Small button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={openModal}>Open Modal</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>Modal Title</h2>
        <p>Modal content goes here...</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </>
  );
};

export default MyDropdownModal;

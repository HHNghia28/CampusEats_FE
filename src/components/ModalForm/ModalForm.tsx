"use client";
import { title } from "process";
import { Children, ReactNode, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// for show toast message
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  title: string;
  handleSubmit: () => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  children: ReactNode;
}

function ModalForm(props: IProps) {
  // for show hide modal
  const { title, handleSubmit, showModal, setShowModal, children } = props;

  const handleCloseForm = () => {
    setShowModal(false);
  };

  const handleSubmitForm = () => {
    handleSubmit();
  };
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => handleCloseForm()}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSubmitForm()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;

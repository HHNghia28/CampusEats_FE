"use client";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// for show toast message
import { toast } from "react-toastify";

interface IProps {
  size?: "sm" | "lg" | "xl";
  title: string;
  content: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

function ModalBase(props: IProps) {
  // for show hide modal
  const {
    size = "sm",
    title = "Modal title",
    content = "Modal content",
    showModal,
    setShowModal,
  } = props;

  //   const handleSubmitForm = () => {
  //     fetch("http://localhost:8000/blogs", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json, text/plain, */*",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ title, author, content }),
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         if (res) {
  //           toast.success("Add new blog successfully!");
  //           setShowModal(false);
  //           mutate("http://localhost:8000/blogs");
  //         } else {
  //           toast.success("Add new blog failed!");
  //         }
  //       });
  //   };

  const handleCloseForm = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => handleCloseForm()}
        backdrop="static"
        keyboard={false}
        size={size}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseForm()}>
            Cancel
          </Button>
          <Button variant="primary">OK</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBase;

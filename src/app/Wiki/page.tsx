"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import ButtonBase from "@/components/Buttons/Button";
import ModalBase from "@/components/Modal/Modal";
import ModalForm from "@/components/ModalForm/ModalForm";
import { toast } from "react-toastify";

const Wiki = () => {
  const [showModalSm, setShowModalSm] = useState<boolean>(false);
  const [showModalLg, setShowModalLg] = useState<boolean>(false);
  const [showModalXl, setShowModalXl] = useState<boolean>(false);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);

  const router = useRouter();

  const handleClickButton = () => {
    console.log("Clicked me!");
  };

  const handleSubmit = () => {
    console.log("Submitted form!");
  };

  const showToastSuccess = () => {
    toast.success("Success message!");
  };

  const showToastError = () => {
    toast.error("Error message!");
  };
  const showToastDanger = () => {
    toast.warning("Danger message!");
  };

  return (
    <div className="mt-5 flex">
      <h1>Wiki page</h1>
      <section className="">
        <h3>1. Button</h3>
        <div>
          <ButtonBase
            type="button"
            title="success color"
            variant="success"
            size="md"
          />
          <ButtonBase
            type="button"
            title="info color"
            variant="info"
            size="md"
          />
          <ButtonBase
            type="button"
            title="warning color"
            variant="warning"
            size="md"
          />
          <ButtonBase
            type="button"
            title="danger color"
            variant="danger"
            size="md"
          />
          <ButtonBase
            type="button"
            title="dark color"
            variant="dark"
            size="md"
          />
          <ButtonBase
            type="button"
            title="light color"
            variant="light"
            size="md"
          />
        </div>
        <div className="mt-3">
          <ButtonBase
            type="button"
            title="main color"
            variant="main-color"
            size="md"
          />
          <ButtonBase
            type="button"
            title="primary color"
            variant="primary-color"
            size="md"
          />
          <ButtonBase
            type="button"
            title="secondary color"
            variant="secondary-color"
            size="md"
          />
        </div>
        <div className="mt-3">
          <ButtonBase
            type="button"
            title="size sm main "
            variant="main"
            size="sm"
          />
          <ButtonBase
            type="button"
            title="size md main "
            variant="main"
            size="md"
          />
          <ButtonBase
            type="button"
            title="size lg main "
            variant="main"
            size="lg"
          />
        </div>
        <div className="mt-3">
          <ButtonBase
            type="button"
            title="btn onclick"
            variant="main"
            size="md"
            onClick={handleClickButton}
          />
          <ButtonBase
            type="button"
            title="btn custom styles"
            variant="main"
            size="md"
            styles={{ fontSize: "22px", borderRadius: "10px" }}
          />
          <ButtonBase
            type="button"
            title="+ btn with icon"
            variant="main"
            size="md"
            icon=""
          />
        </div>
      </section>
      <section className="mt-3">
        <h3>2. Form</h3>
        <Form>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Email" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
      </section>
      <section className="mt-3">
        <h3>3. Select</h3>
        <Form.Select size="sm" className="">
          <option>Open this select menu size sm</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select className="mt-3">
          <option>Open this select menu size md</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select size="lg" className="mt-3">
          <option>Open this select menu size lg</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </section>
      <section className="mt-3">
        <h3>3. Notify button</h3>
        <ButtonBase
          title="Show toast success"
          variant="success"
          onClick={showToastSuccess}
        />
        <ButtonBase
          title="Show toast error"
          variant="danger"
          onClick={showToastError}
        />
        <ButtonBase
          title="Show toast warning"
          variant="warning"
          onClick={showToastDanger}
        />
      </section>
      <section className="mt-3">
        <h3>4. Modal</h3>
        {/* Must add callback function for to set show hide modal */}
        <ButtonBase
          title="Show modal sm"
          variant="success"
          onClick={() => setShowModalSm(true)}
        />
        <ButtonBase
          title="Show modal lg"
          variant="success"
          onClick={() => setShowModalLg(true)}
        />
        <ButtonBase
          title="Show modal xl"
          variant="success"
          onClick={() => setShowModalXl(true)}
        />
        <ButtonBase
          title="Show modal form"
          variant="success"
          onClick={() => setShowModalForm(true)}
        />
        <ModalBase
          title="Modal title"
          content="Modal size sm"
          showModal={showModalSm}
          setShowModal={setShowModalSm}
        />
        <ModalBase
          size="lg"
          title="Modal title"
          content="Modal size lg"
          showModal={showModalLg}
          setShowModal={setShowModalLg}
        />
        <ModalBase
          size="xl"
          title="Modal title"
          content="Modal size xl"
          showModal={showModalXl}
          setShowModal={setShowModalXl}
        />
        <ModalForm
          title="Model form"
          handleSubmit={handleSubmit}
          showModal={showModalForm}
          setShowModal={setShowModalForm}
        >
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title!" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Enter Author!" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </ModalForm>
      </section>
      <section className="mt-3">
        <h3>5. Table</h3>
        <Table striped bordered hover className="rounded-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Wiki;

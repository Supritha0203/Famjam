import React, { useState } from "react";
import Lottie from "react-lottie";
import animation from "./../Files/family.json";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const defaultOptions = {
  loop: true,
  autoplay: true,
  // here is where we will declare lottie animation
  // "animation" is what we imported before
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function Popup(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ alignItems: "center" }}>
        <Modal.Title>Hello Fam!!</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ alignItems: "center" }}>
        <Lottie options={defaultOptions} height={200} width={300} />
        Want a look back at your memories??
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
          Let's dive in!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;

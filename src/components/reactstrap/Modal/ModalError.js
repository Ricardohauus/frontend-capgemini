import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Progress } from "reactstrap";

const ModalLoading = props => {
  const { modalToggle, label } = props;

  const toggle = () => (modalToggle = !modalToggle);

  return (
    <div>
      <Modal isOpen={modalToggle} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle}>Erro</ModalHeader>
        <ModalBody>
          <br />

          <br />
        </ModalBody>
        <Button color="primary" onClick={toggle}>
          OK
        </Button>
        <ModalFooter />
      </Modal>
    </div>
  );
};

export default ModalLoading;

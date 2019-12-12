import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Progress } from "reactstrap";

const ModalLoading = props => {
  const { modalCarregar } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modalCarregar} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle}>Carregando</ModalHeader>
        <ModalBody>
          <br />
          <Progress animated color="success" value="100" />
          <br />
        </ModalBody>
        <ModalFooter />
      </Modal>
    </div>
  );
};

export default ModalLoading;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modals=(props)=> {


  return (
    <>

      <Modal show={props.ShowModals} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.textArea}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals
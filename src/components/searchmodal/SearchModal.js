import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './SearchModal.css';
export default function SearchModal(props) {

  
    return (
      <>
        <Modal show={props.show} onHide={props.onhide}>
          <Modal.Body>Modal</Modal.Body>
        </Modal>
      </>
    );
}

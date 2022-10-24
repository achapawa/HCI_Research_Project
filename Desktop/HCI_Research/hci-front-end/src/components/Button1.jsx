import React, { useState } from 'react'
import {Modal,Button} from "react-bootstrap"


function Button1(props) {
 
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
  return (
    <>
      <button className={props.buttonStyle} onClick={handleShow}>
        {props.name}
      </button>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Button1;
import React,{useState,useEffect} from 'react';
import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import { EditItem } from '../actions/Actions'

const EditCard = ({oldTodo,EditItem}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [text,setText]= useState('');
  useEffect(()=>{
      setText(oldTodo.text);
  },[show]);

  const handleSubmit=(e)=>{
      e.preventDefault();
      const newTask={...oldTodo,text:text};
      EditItem(newTask);
      handleClose();
  }

    return (
       <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type='text'value={text} 
        onChange={(e)=>setText(e.target.value)}  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
       </div> 
      );
}
 
export default connect(null,{EditItem}) (EditCard);
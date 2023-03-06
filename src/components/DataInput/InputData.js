import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./InputData.css";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import Modal from '../Modal/Modal'
import Modaler from '../Modal/Modal'
const InputData = () => {
  const [formData, setFormData] = useState({});
  const [Data, setData] = useState([]);
  const [IsValid,setIsValid]=useState(false)
  const [IsValider,setIsValider]=useState(false)
  const EmailHandler = e => {
    setFormData({ ...formData, Email: e.target.value.trim() });
  };
  const nameHandler = e => {
    setFormData({ ...formData, Name: e.target.value});
  };
  const submitHandler = () => {
    if(formData.Email==='' || formData.Name===''){
      return setIsValid(true);
    }else{
      const emailExists = Data.some((item) => item.Email === formData.Email || item.Name=== formData.User);
      if (emailExists) {
        setIsValider(true);
      } else {
        setData([...Data, formData]);
        setFormData({ Email: "", Name: "" });
      }
    }
  };
  return (
    <div>
      <div className="inputContent">
        <div className="input">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={formData.Email}
              onChange={EmailHandler}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Name">
            <Form.Control
              type="text"
              placeholder="text"
              value={formData.Name}
              onChange={nameHandler}
            />
          </FloatingLabel>
          <Button
            variant="outline-info"
            style={{ margin: "10px" }}
            onClick={submitHandler}
          >
            Add Data
          </Button>
        </div>
      </div>
      <div className="Table">
        <Table striped bordered hover  responsive className="w-100 p-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
            </tr>
          </thead>
          {Data.map((element, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index}</td>
                  <td>{element.Email}</td>
                  <td>{element.Name}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
      <Modal close={()=>{return setIsValid(false)}} title="Alert" textArea="Please fill all the fileds" ShowModals={IsValid} />
      <Modaler close={()=>{return setIsValider(false)}} title="Alert" textArea="Already Exist Please Use Another one" ShowModals={IsValider}/>
    
    </div>
  );
};

export default InputData;

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';




function Users(props) {
    const [cuname , updatecuname] = useState("");
    const [cuid , updatecuid] = useState("");
    const [showA, setShowA] = useState(false);
    const [header,uheader] = useState("ERROR");
    const [message,umessage] = useState("ERROR");
    const [bg,ubg] = useState("danger");
    const toggleShowA = () => setShowA(!showA);

     function validate(){
        for(let i=0;i<props.udata.length;i++){
            if(cuname === props.udata[i].name){
                uheader("ERROR!!!");
                umessage("Username already exists");
                setShowA(true);
                ubg("danger");
                return;
            }
            if(cuid === props.udata[i].uid){
                uheader("ERROR!!!");
                umessage("This Upi id is already present");
                setShowA(true);
                ubg("danger");
                return;
            }
        }

        if(cuname === "" ){
            uheader("ERROR!!!");
                umessage("Username cannot be blank");
                setShowA(true);
                ubg("danger");
                return;
        }
        if(cuid === "" || cuid !== cuid.toLowerCase() || !cuid.includes("@" ) || (cuid.split("@").length - 1)!==1){
            uheader("ERROR!!!");
                umessage("Invalid Upi id");
                setShowA(true);
                ubg("danger");
                return;
        }

        props.updateudata([...props.udata , {name:`${cuname}` , uid:`${cuid}`}]);
        ubg("success");
        uheader("Success!!!");
        umessage("User added successfully!!");
        setShowA(true);
    }
    return (
      <div className="users">
      <Table striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th>#</th>
          <th>UserName</th>
          <th>Upi-id</th>
          {/* <th>Username</th> */}
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}
        {props.udata.map((item,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.uid}</td>
            {/* <td>@mdo</td> */}
          </tr>
        ))}
      </tbody>
      </Table>
        
      <div className='addusers'>
        <h1>Add User</h1>
            <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                defaultValue={cuname}
                onChange={ (event) => {updatecuname( event.target.value );}}
                />
                
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                <Form.Control
                placeholder="Upi-id"
                aria-label="Upi-id"
                aria-describedby="basic-addon2"
                defaultValue={cuid}
                onChange={ (event) => {updatecuid( event.target.value );}}
                />
            </InputGroup>
            </>
            <Toast show={showA} onClose={toggleShowA} bg={bg}className='mb-3'>
            <Toast.Header >
                <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
                />
                <strong className="me-auto">{header}</strong>
                {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
            </Toast>
            <Button variant="outline-secondary" className='m-2' onClick={validate}>Add User</Button>
      </div>
      </div>
    );

  }
  
  export default Users;
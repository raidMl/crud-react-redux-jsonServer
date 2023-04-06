import React from 'react';
import { useState,useEffect  } from 'react';
import { useDispatch,useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAddUserMutation } from '../redux/apiSlice';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

 
const AddUser = () => {
    const[addUser]=useAddUserMutation();


        const [user, setUser] = useState({
            name:"",
            email:"",
            degre:"",
            role:"",
            id:"",
            image:"",
            faculty:""
          
    
         });
         const handleSubmit=(e)=>{
            e.preventDefault();
            addUser(user)
        }
         console.log(user)
         
         
        
         const dispatch=useDispatch()
   
         
      return (
        <Form  onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"50px auto"}}>
           <Row><Col>
          <Form.Group className="mb-3" >
          <Form.Label>role</Form.Label>
          <Form.Select 
          // value={selectedOption} onChange={handleChange} 
          onSelect={(e)=>setUser({...user ,role:e.target.value})}
    
          size="" style={{width:"300px",margin:"0 auto"}}  >
          {/* <option disabled>choose role </option> */}
          <option value="student">student</option>
          <option value="agent">agent</option>
          <option value="teacher">teacher</option>
              </Form.Select>
            </Form.Group></Col> 
    
    
            <Col> <Form.Group className="mb-3" >
          <Form.Label>faculty</Form.Label>
          <Form.Select 
          // value={selectedOption} onChange={handleChange} 
          onChange={(e)=>setUser({...user ,faculty:e.target.value})}
    
          size="" style={{width:"300px",margin:"0 auto"}}   >
          {/* <option disabled>choose role </option> */}
          <option value="sciences">faculté des sciences</option>
          <option value="gestion">faculté de gestion</option>
          <option value="medcine"> faculté de medcine</option>
          <option value="biologie">faculté debiologie</option>
    
              </Form.Select>
            </Form.Group></Col> </Row>
          
          
          <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>user-name</Form.Label>
            <Form.Control   type="text" placeholder="Enter your name"  style={{border:"1px solid #00000040","width":"350px"}}
            onChange={(e)=>setUser({...user ,name:e.target.value })}
            /></Form.Group>
           
            <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control  type="email" placeholder="Enter email"  style={{border:"1px solid #00000040","width":"350px"}}
                    onChange={(e)=>setUser({...user ,email:e.target.value})}
    
            />
         </Form.Group>
         <Form.Group className="mb-3" >
            <Form.Label>id</Form.Label>
            <Form.Control  type="text" placeholder="enter car code"  style={{border:"1px solid #00000040","width":"350px"}}
                    onChange={(e)=>setUser({...user ,id:e.target.value})}
    
            />
         </Form.Group>
    
         <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>degre</Form.Label>
            <Form.Control type="text" placeholder="degre" style={{border:"1px solid #00000040","width":"350px"}} 
                    onChange={(e)=>setUser({...user, degre:e.target.value})}
            />
          </Form.Group>
    
    
        
    
    
    
          <Button  type='submit' variant="success">submit</Button> </Form>)
}

export default AddUser;

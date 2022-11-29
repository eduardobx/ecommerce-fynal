import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const Login = () => {
   
const {register, handleSubmit}=useForm();
 const submit=()=>{
  //  axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login",data)
  //  .then(res => console.log(res))
 }

  return (
    <div  className='conteiner-form'>  
    <Form  onSubmit={handleSubmit(submit)} className='form-login'>
      <h1 className='title-login'>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {... register("email")} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {... register("password")}  />
      </Form.Group>
      <Button variant="primary" type="submit" className='form-buton'>
        Submit
      </Button>
    </Form> 
    </div>
  );
};

export default Login;
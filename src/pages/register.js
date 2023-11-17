import React, { useState } from 'react'
import { Base } from '../components/Base'
import { Button, Card, CardBody, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../assets/logo.png'
import { toast } from 'react-toastify';
import { registerUser } from '../services/user.service';

export const Register = () => {
  let[data, setData] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    gender:'',
    about:''
  });

  const handleChange=(event, property)=>{
    setData({
      ...data,
    [property] : event.target.value
    })
  }

  // Clear Data
  const clearData=()=>{
    setData({
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
      gender:'',
      about:''
    })
  }

  const[errorData, setErrorData] = useState({
    isError:false,
    errorData:null
  });


  const submitForm = (event)=>{
      event.preventDefault();
      console.log(data);

      // Validate clint side
      if(data.name == undefined || data.name.trim()==''){
        toast.error("Name is required!")
        return;
      }

      if(data.email == undefined || data.email.trim()==''){
        toast.error("Email is required!")
        return;
      }

      if(data.password == undefined || data.password.trim()==''){
        toast.error("Password is required!")
        return;
      }

      if(data.confirmPassword == undefined || data.confirmPassword.trim()==''){
        toast.error("Confirm Password is required!")
        return;
      }

      if(data.gender == undefined || data.gender.trim()==''){
        toast.error("Select Gender !")
        return;
      }

      if(data.password != data.confirmPassword){
        toast.error("Password and Confirm Password not matched")
        return;
      }

      // All Right:
      registerUser(data)
      .then(userData=>{
        console.log(userData);
        toast.success("User Register Successfully !! "+userData.name);
        clearData();
      })
      .catch(error=>{
        console.log(error);
        toast.error("Erroe in Creating User ! Try again")
      })
      
  }

  function registerForm() {
    return (
      <Container>
        {/* {JSON.stringify(data)} */}
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <Card className='my-2 border-0 shadow p-5' style={
             {
              position:'relative',
              top:-70
             }
            } >
              <CardBody>
                <Container className='text-center'>
                  <img src={logo} height={70} width={70}></img>
                </Container>
                <h3 className='mb-3 text-center text-uppercase'>Store Signup here</h3>
                <Form onSubmit={submitForm}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" 
                    onChange={(event)=> handleChange(event,'name')}
                    value={data.name}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                     onChange={(event)=> handleChange(event,'email')}
                     value={data.email}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Enter new Password </Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"
                    onChange={(event)=> handleChange(event,'password')}
                    value={data.password}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Re Enter Password </Form.Label>
                    <Form.Control type="password" placeholder="Re Enter Password"
                    onChange={(event)=> handleChange(event,'confirmPassword')}
                    value={data.confirmPassword}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                  <Form.Label>Select Gender </Form.Label>
                   <div>
                   <Form.Check
                     inline
                     name='gender'
                      type={'radio'}
                      label='Male'
                      id={'gender'}
                      value={'male'}
                      checked={data.gender==='male'}
                      onChange={(event)=> handleChange(event,'gender')}
                     
                    />
                     <Form.Check
                     inline
                     name='gender'
                      type={'radio'}
                      label='Female'
                      id={'gender'}
                      value={'female'}
                      checked={data.gender==='female'}
                      onChange={(event)=> handleChange(event,'gender')}
                      
                    />
                   </div>
                  </Form.Group>
                  <Form.Group className='mb-2'>
                    <Form.Label>Write something about yourself</Form.Label>
                    <Form.Control as={`textarea`} rows={6} placeholder='Write here'
                    onChange={(event)=> handleChange(event,'about')}
                    value={data.about}
                    />
                  </Form.Group>
                
                <Container>
                  <p className='text-center'>Already Register!<a href=''> Login</a></p>
                </Container>
                <Container className='text-center'>
                  <Button type='submit' className='text-uppercase' variant='success'>Register</Button>
                  <Button className='ms-2 text-uppercase' variant='danger' onClick={clearData}>Reset</Button>
                </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
  return (
    <Base title='Electronic / Signup' description='Fill the form correcrly to register with us!!. By register with us you can use services that I provide.'>
      {registerForm()}
    </Base>
  )
}

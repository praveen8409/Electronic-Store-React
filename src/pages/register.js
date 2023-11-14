import React, { useState } from 'react'
import { Base } from '../components/Base'
import { Button, Card, CardBody, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../assets/logo.png'

export const Register = () => {
 
  function registerForm() {
    return (
      <Container>
       
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <Card className='my-2 border-0 shadow p-5'>
              <CardBody>
                <Container className='text-center'>
                  <img src={logo} height={70} width={70}></img>
                </Container>
                <h3 className='mb-3 text-center text-uppercase'>Store Signup here</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter your Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Enter new Password </Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Re Enter Password </Form.Label>
                    <Form.Control type="password" placeholder="Re Enter Password" />
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
                    />
                     <Form.Check
                     inline
                     name='gender'
                      type={'radio'}
                      label='Female'
                      id={'gender'}
                    />
                   </div>
                  </Form.Group>
                  <Form.Group className='mb-2'>
                    <Form.Label>Write something about yourself</Form.Label>
                    <Form.Control as={`textarea`} rows={6} placeholder='Write here'/>
                  </Form.Group>
                </Form>
                <Container>
                  <p className='text-center'>Already Register!<a href=''> Login</a></p>
                </Container>
                <Container className='text-center'>
                  <Button className='text-uppercase' variant='success'>Register</Button>
                  <Button className='ms-2 text-uppercase' variant='danger'>Reset</Button>
                </Container>
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

import React from 'react'
import { Base } from '../components/Base'
import { Button, Card, CardBody, Col, Container, Form, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Login = () => {

  function loginForm() {
      return(
        <Container>
          <Row >
            <Col sm={{ span: 8, offset: 2 }}>
              <Card className='my-2 border-0 shadow p-5' style={
             {
              position:'relative',
              top:-70
             }
            } >
                <CardBody>
                  
                <h3 className='mb-3 text-center text-uppercase'>Store Login here</h3>
                  <Form>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Enter Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Enter Your Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" 
                    />
                  </Form.Group>
                  <Container className='text-center'>
                  <Button className='ms-2 text-uppercase' variant='success'>Login</Button>

                  <Button className='ms-2 text-uppercase' variant='danger'>Reset</Button>

                  </Container>
                  </Form>
                  <Container className='text-center mt-3'>
                    {/* <p>Forgot Password ! <a href='/forgot'>Click here</a></p>  */}
                    <p>If not registerd ! <NavLink to={'/register'}>Click Here</NavLink></p>
                  </Container>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      )
  }


  return (
    <Base title='Electronic Store / Login' description='Login here...'>
    {  loginForm()}
    </Base>
  )
}
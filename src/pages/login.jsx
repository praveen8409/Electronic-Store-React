import React, { useContext, useState } from 'react'
import { Base } from '../components/Base'
import { Button, Card, CardBody, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../services/user.service'
import { UserContext } from '../context/user.context'

export const Login = () => {
  const redirect = useNavigate();
  const userContext = useContext(UserContext);

  let [data, setData] = useState({
    email: '',
    password: ''
  });

  let [error, setError] = useState({
    errorData: null,
    isError: false
  });

  let [loading, setLoading] = useState(false);

  const handleChange = (event, property) => {
    setData({
      ...data,
      [property]: event.target.value
    });
  }


  // Clear Data
  const clearData=()=>{
    setData({
      email:'',
      password:''
    });
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);

    if (data.email === undefined || data.email.trim() === '') {
      toast.error("Email is required!")
      return;
    }
    if (data.password === undefined || data.password.trim() === '') {
      toast.error("Password is required!")
      return;
    }

    // call login api
    setLoading(true);
    loginUser(data)
      .then((userData) => {
        console.log(userData);
        toast.success("User Login Successfully !!");
        setError({
          errorData: null,
          isError: false
        });

        userContext.setIsLogin(true);
        userContext.setUserData(userData);
        redirect('/users/home');

      }).catch((error) => {
        console.log(error);
        toast.error(error.response.data.message)
        setError({
          errorData: error,
          isError: true
        });
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function loginForm() {
    return (
      <Container>
        <Row >
          <Col sm={{ span: 8, offset: 2 }}>
            <Card className='my-2 border-0 shadow p-5' style={
              {
                position: 'relative',
                top: -70
              }
            } >
              <CardBody>
              {/* <Container>{JSON.stringify(userContext)}</Container> */}
                <h3 className='mb-3 text-center text-uppercase'>Store Login here</h3>
                <Form noValidate onSubmit={submitForm}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Enter Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email"
                      onChange={(event) => handleChange(event, 'email')}
                      value={data.email}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Enter Your Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"
                      onChange={(event) => handleChange(event, 'password')}
                      value={data.password}
                    />
                  </Form.Group>
                  <Container className='text-center'>
                    <Button type='submit'
                      className='ms-2 text-uppercase'
                      variant='success'
                      disabled={loading}
                    >
                      <Spinner
                        animation='border'
                        size='sm'
                        className='me-2'
                        hidden={!loading}
                      />
                      <span hidden={!loading}>Wait...</span>
                      <span hidden={loading}> Login</span>

                    </Button>

                    <Button onClick={clearData} className='ms-2 text-uppercase' variant='danger'>Reset</Button>

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
      {loginForm()}
    </Base>
  )
}
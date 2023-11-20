import React, { useContext } from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { isLoggedIn } from '../../auth/helper.auth';

export const Dashboard = () => {

  const userContext = useContext(UserContext);

  const dashboardViews = () => {
    return (
      <>
        <div>
          <div>User dashboard</div>
          <Outlet></Outlet>
        </div>
      </>
    );
  }


  const notLoggedInView = () =>{
    return(
      <Container>
        <Row>
          <Col md={
            {
              span:8,
              offset:2
            }
          }>
          <Card className='border-0 shadow mt-3'>
            <CardBody className='text-center'>
              <h3>You are not LoggedOn !!!</h3>
              <p>Please do login to view the page. </p>
              <Button variant='success' as={NavLink} to={"/login"}>LogIn</Button>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    // (userContext.isLogin) ? (dashboardViews()) : (notLoggedInView())
    (isLoggedIn()) ? (dashboardViews()) : (<Navigate to={'/login'}/>)

  )
}

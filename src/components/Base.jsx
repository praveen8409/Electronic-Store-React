import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Footer } from './Footer'
import { NavLink } from 'react-router-dom'

export const Base = ({title = "Page Title", description = "Page Descriptions", buttonEnabled = false, buttonText = 'Shop Now', buttonType = 'primary', buttonLink ='/', children}) => {
    let styleContainer = {
      height:"250px"
    }
  return (
    <div>
        <Container style={styleContainer} className='bg-dark p-5 text-white text-center d-flex justify-content-center' fluid>
       <div>
       <h3 className='text-center'>{title}</h3>
        <p className='text-center'>{description}</p>
        {buttonEnabled &&<Button as={NavLink} to={buttonLink} variant={buttonType}>{buttonText}</Button> }
       </div>
        </Container>
        {children}

        <Footer/>
    </div>
  )
}

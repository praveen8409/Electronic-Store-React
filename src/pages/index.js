import React from 'react';
import { Base } from '../components/Base';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';


export const Index = () => {
  function showSuccessToast(){
    // toast.success("Success Toast");
    toast.error("Error Occured");
  
  }
  return (

    <Base title='Shop what you need' description='Welcome to Trending Store, We provide best items as you need.' buttonEnabled={true} buttonType='primary'>
      <h1>Working on Home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium deleniti perspiciatis voluptates? Illum odit eos fugiat, sapiente deserunt suscipit tenetur maxime ad ipsam explicabo minima, architecto vitae, sequi nam aut.</p>
      <Button variant='success' onClick={showSuccessToast}>Toasty Example</Button>
    </Base>
  );
}

import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

}
from 'mdb-react-ui-kit';
import Logo from '../imgs/logo.png'
import 'bootstrap/dist/css/bootstrap.css';


function Login() {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
            <div className="hover-zoom">
              <img src={Logo}
                style={{width: '100px',height:'100px'}} alt="logo" />
              
            </div>

              <h2 className="fw-bold mb-2 mt-3">Log In</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Username' id='formControlLg' type='username' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn rounded className='login mb-4' size='lg' 
              style={{backgroundColor: '#892CDC'}} >LOG IN</MDBBtn>
              <p className='text-center mt-3'>I don’t have an account ? <a href="/register" class="link-warning">Register here</a></p>
              


            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;
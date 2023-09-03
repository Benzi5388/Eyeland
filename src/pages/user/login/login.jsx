import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccc' }}>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column' >
                <h2 className="fw-bold mb-4 text-center">Sign In</h2>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Password' id='formControlLg' type='password' size="lg"/>
                <p className="text-end">
                  <Link to="/forgotpassword">Forgot Password</Link>
                </p>
                <MDBBtn size='lg'>
                  Sign In
                </MDBBtn>
                <hr className="my-4" />
                <p className="text-center">
                  New here? <Link to="/register">Register</Link>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default SignIn;

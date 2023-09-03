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

function Register() {
  return (
    <MDBContainer fluid style={{ backgroundColor: '#ccc'}}>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column' >
              <h2 className="fw-bold mb-4 text-center">Register</h2>
              <MDBInput wrapperClass='mb-4 w-100' placeholder ='Name' id='formControlLg' type='name' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' placeholder='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' placeholder='Phone no' id='formControlLg' type='phone' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' placeholder='Password' id='formControlLg' type='password' size="lg"/>
              <MDBBtn size='lg'>
                Submit
              </MDBBtn>
              <hr className="my-4" />
              <p className="text-center">
                Already registered? <Link to="/signin">Sign in</Link>
              </p>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Register;
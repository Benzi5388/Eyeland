import React, { useState } from 'react';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBIcon,MDBCheckbox}from 'mdb-react-ui-kit';
import { Link, useNavigate} from 'react-router-dom';
import API from '../../../Axios/api';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(formValue.email && formValue.password) {
        const response = await API.post('/signin', { formValue });
        if (response) {
          console.log(response.data);
          toast.success("LoggedIn successfully")
          navigate("/")
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccc' }}>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column' >
              <form onSubmit={handleSubmit } className="text-center">
                <h2 className="fw-bold mb-4 text-center">Sign In</h2>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Email address' type='email' size="lg" name='email' onChange={handleChange} value={formValue.email} required/>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Password' type='password' size="lg" onChange={handleChange} name= 'password' required/>
                <p className="text-end">
                  <Link to="/forgotpassword">Forgot Password</Link>
                </p>
                <button className="btn btn-primary btn-lg text-center" >Submit</button>
                </form>
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

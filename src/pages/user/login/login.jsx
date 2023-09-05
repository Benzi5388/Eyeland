import React, { useState } from 'react';
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput}from 'mdb-react-ui-kit';
import { Link, useNavigate} from 'react-router-dom';
import API from '../../../Axios/api';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../../Redux/authSlice';
import Lottie from "lottie-react";
import loader from '../../../assets/loader.json'
import '../../../pages/user/home/homePage.css'
import '../register/register.css'
import './login.css'

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('handleSubmit function called');
    try {
      if(formValue.email && formValue.password) {
        const response = await API.post('/signin', { formValue });
        console.log(response.data);
        if (response) {
          console.log(response.data.user.isVerified);
          if (response.data.user.isVerified===true) {
            dispatch(userData({token : response.data.token, user: response.data.user.name}));
            toast.success(response.data.message)
            navigate('/');
          } else {
            toast.success(response.data.message)
            console.log('Navigating to OTP page...');
            navigate('/verifyotp');
          }
        }
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error(err.response.data.message);
      } 
    }finally {
      setIsLoading(false); // Set isLoading to false when done
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <>
     {isLoading && (
      <div className="loader-container">
        <Lottie animationData={loader} />
      </div>
    )}
    <div style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccc' }}>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column' >
              <img src='/eyelandlog.jpg' alt="Company Logo" className="mb-4 logo-center"/>
              <form onSubmit={handleSubmit } className="text-center">
                <h2 className="fw-bold mb-4 text-center">Sign In</h2>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Email address' type='email' size="lg" name='email' onChange={handleChange} value={formValue.email} required/>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Password' type='password' size="lg" onChange={handleChange} name= 'password' required/>
                <p className="text-end">
                  <Link to="/forgotpassword" className="forgot-password">Forgot Password</Link>
                </p>
                <button className="btn btn-dark btn-lg text-center" >Submit</button>
                </form>
                <hr className="my-4" />
                <p className="text-center">
                  New here? <Link to="/register" className="forgot-password">Register</Link>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </>
  );
}

export default SignIn;

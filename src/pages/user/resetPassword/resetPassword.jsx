import React, { useState } from 'react';
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBIcon}from 'mdb-react-ui-kit';
import { Link, useNavigate} from 'react-router-dom';
import API from '../../../Axios/api';
import { toast } from 'react-toastify';
import Lottie from "lottie-react";
import loader from '../../../assets/loader.json'
import '../../../pages/user/home/homePage.css'
import '../register/register.css'

function ResetPassword() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    otp: '',
    password: '',
    confirmpassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if(formValue.otp && formValue.password && formValue.confirmpassword) {
        const response = await API.post('/resetpassword', { formValue });
        if (response) {
          toast.success(response.data.message)
          navigate("/signin")
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
    <>{isLoading && (
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
                <h2 className="fw-bold mb-4 text-center">Reset Password</h2>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Otp' type='text' size="lg" name='otp' onChange={handleChange} value={formValue.otp} required/>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Password' type='password' size="lg" onChange={handleChange} name= 'password' value={formValue.password} required/>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Confirm Password' type='password' size="lg" onChange={handleChange} name= 'confirmpassword' value={formValue.confirmpassword} required/>
                <button className="btn btn-dark btn-lg text-center" >Submit</button>
                </form>
                <hr className="my-4" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </>
  );
}

export default ResetPassword;

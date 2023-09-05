import React, { useState } from 'react';
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBIcon}from 'mdb-react-ui-kit';
import { Link, useNavigate} from 'react-router-dom';
import API from '../../../Axios/api';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Lottie from "lottie-react";
import loader from '../../../assets/loader.json'
import '../../../pages/user/home/homePage.css'
import '../register/register.css'

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    email: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if(formValue.email) {
        const response = await API.post('/forgotpassword', { formValue });
        if (response) {
          console.log(response.data);
          toast.success(response.data.message)
          navigate("/resetpassword")
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccc' }}>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column' >
              <img src='/eyelandlog.jpg' alt="Company Logo" className="mb-4 logo-center"/>
              <form onSubmit={handleSubmit } className="text-center">
                <h2 className="fw-bold mb-4 text-center">Forgot Password</h2>
                <p className="text-center">Please enter your Email Address</p>
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Email address' type='email' size="lg" name='email' onChange={handleChange} value={formValue.email} required/>
                <button className="btn btn-dark btn-lg text-center" >Submit</button>
                </form>
                <hr className="my-4" />
                <p className="text-center">
                  New here? <Link to="/register" style={{color:"#666"}}>Register</Link>
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

export default ForgotPassword;

import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../../Axios/api';
import Lottie from "lottie-react";
import loader from '../../../assets/loader.json'
import '../../../pages/user/home/homePage.css'
import '../register/register.css'

function VerifyOtp() {
  const [formValue, setFormValue] = useState({ otp: '' })
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);
    try {
      const response = await API.post('/verifyotp', { formValue });
      if (response) {
        console.log(response.data);
        toast.success(response.data.message)
        navigate("/signin")
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error(err.response.data.message);
      }
    } finally {
      setIsLoading(false); // Set isLoading to false when done
    }
  }
  return (
    <>{isLoading && (
      <div className="loader-container">
        <Lottie animationData={loader} />
      </div>
    )}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccc' }}>
        <MDBContainer fluid>
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
              <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                <MDBCardBody className='p-5 w-100 d-flex flex-column' >
                  <img src='/eyelandlog.jpg' alt="Company Logo" className="mb-4 logo-center" />
                  <form onSubmit={handleSubmit} className="text-center">
                    <h2 className="fw-bold mb-4 text-center">OTP Verification</h2>
                    <h5 className="fw-bold mb-4 text-center">Please enter the otp sent to your<br /> e-mail.</h5>
                    <MDBInput wrapperClass='mb-4 w-100' placeholder='OTP' id='formControlLg' type='number' size="lg" name='otp' value={formValue.otp} required onChange={handleChange} />
                    <button className="btn btn-dark btn-lg text-center">Submit</button>
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

export default VerifyOtp;

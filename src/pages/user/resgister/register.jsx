import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput} from 'mdb-react-ui-kit';
import { Link ,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import API from '../../../Axios/api';
import { userData } from '../../../Redux/authSlice';
import { toast } from 'react-toastify';


function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(formValue.username && formValue.email && formValue.phone && formValue.password) {
        dispatch(userData(formValue));
        const response = await API.post('/signup', { formValue });
        if (response) {
          console.log(response.data);
          toast.success("Otp sent successfully")
          navigate("/verifyotp")
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
    <MDBContainer fluid style={{ backgroundColor: '#ccc' }}>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-4 text-center">Register</h2>
              <form onSubmit={handleSubmit } className="text-center">
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Name' type='string' size="lg" value={formValue.username} name='username' onChange={handleChange} required />
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Email address' type='email' size="lg" value={formValue.email} name='email' onChange={handleChange} required />
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Phone no' type='number' size="lg" value={formValue.phone} name='phone' onChange={handleChange} required />
                <MDBInput wrapperClass='mb-4 w-100' placeholder='Password' type='password' size="lg" value={formValue.password} name='password' onChange={handleChange} required />
                <button className="btn btn-primary btn-lg text-center" >Submit</button>
              </form>
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

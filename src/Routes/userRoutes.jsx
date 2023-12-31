import React , {useEffect} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from '../pages/user/home/homePage.jsx';
import Register from '../pages/user/register/register.jsx';
import SignIn from '../pages/user/login/login.jsx';
import VerifyOtp from '../pages/user/verifyOtp/verifyOtp.jsx';
import PageNotFound from '../pages/404/notFound.jsx';
import ForgotPassword from '../pages/user/forgotPassword/forgotPassword.jsx';
import ResetPassword from '../pages/user/resetPassword/resetPassword.jsx';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const UserRoutes = () => {
    const token = useSelector((state) => state.token);
    const navigate = useNavigate();
    console.log(token)

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/verifyotp' element={<VerifyOtp />} />
                <Route path='/forgotpassword' element={<ForgotPassword />} />
                <Route path='/resetpassword' element={<ResetPassword />} />
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </>
    )
}

export default UserRoutes

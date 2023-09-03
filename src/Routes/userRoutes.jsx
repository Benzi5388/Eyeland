import React from 'react';
import { Routes, Route} from "react-router-dom";
import HomePage from '../pages/user/home/homePage.jsx';
import Register from '../pages/user/resgister/register.jsx';
import SignIn from '../pages/user/login/login.jsx';

const UserRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/signin' element={<SignIn/>}/>
            </Routes>
        </>
    )
}

export default UserRoutes

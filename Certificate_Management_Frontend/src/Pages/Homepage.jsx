import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';

function Homepage() {
    
    return (
        <div>
            <h1>Homepage</h1>
            <link to="/">Go to Homepage</link>
            {' | '}
            <link to="/login">Go to Login</link>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Homepage;
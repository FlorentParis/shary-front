import Login from './Login'
import Register from './Register'
import { Routes, Route } from 'react-router';


export default function Auth() {
    return (
        <div className='page-auth'>
            <div>
                <h1>Vivez des évènements uniques !</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean ultriches semper velit sed maximus. Donec accumsan quam nisi, sit amet ornare metus viverra.</p>
            </div>
            <div className='form-container'>
                <Routes>
                    <Route path="login" element={<Login /> } />
                    <Route path="register" element={<Register />} />
                </Routes>
            </div>
        </div>
    )
}
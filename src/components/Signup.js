import React, { useState } from 'react';
import axios from 'axios';
import { SIGNUP_URL } from '../constants/api';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post(SIGNUP_URL, {
                username,
                email,
                password,
                birthday,
            }, {
                withCredentials: true // 쿠키를 함께 전송
            });
            console.log('User created:', response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <img src="/example.jpg" alt="Logo" style={{ maxWidth: '480px' }} /><br/>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default Signup;

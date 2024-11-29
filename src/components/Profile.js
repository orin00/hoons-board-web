import React, { useState } from 'react';
import axios from 'axios';
import { PROFILE_URL } from '../constants/api';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [userData, setUserData] = useState(null);

    const handleGetProfile = async () => {
        try {
            const response = await axios.get(PROFILE_URL, {
                params: { email },
            });
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data', error);
        }
    };

    return (
        <div>
            <h2>Get User Profile</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button onClick={handleGetProfile}>Get Profile</button>
            {userData && (
                <div>
                    <h3>Profile Information</h3>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <p>Birthday: {userData.birthday}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;

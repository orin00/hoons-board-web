import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Signup from './components/Signup';

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>Welcome to the React App</h1>
                
                {/* 내비게이션 링크 */}
                <nav>
                    <Link to="/signup">Sign Up</Link> | 
                    <Link to="/profile">Profile</Link>
                </nav>
                
                {/* URL 경로에 맞는 컴포넌트를 렌더링 */}
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

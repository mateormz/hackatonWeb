import React from 'react'
import './Home.css';
import amazonLogo from './amazon.png';

const Home = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </nav>
                <img src={amazonLogo} alt="Amazon Logo" className="decoration-line"/>
            </header>
        </div>
    )
}

export default Home;
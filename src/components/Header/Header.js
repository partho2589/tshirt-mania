import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>This is header. </h1>
            <nav>
                <Link to = "/home"> Home </Link>
                <Link to = "/OrderReview"> OrderReview </Link>
            </nav>
        </div>
    );
};

export default Header;
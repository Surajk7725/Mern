import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}>Cafe</Link>
                <Link to="/Icard" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}>ID card</Link>
                <Link to="/Login" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}>Login</Link>
                <Link to="/Mobile" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}>Mobile</Link>
                <Link to="/Laptop" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}>Laptop</Link>
                <Link to="/Fashion" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}>Fashion</Link>
                <Link to="/SignUp" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}>SignUp</Link>
                <Link to="/Profile" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}>Profile</Link>
            </ul>
        </nav>
    )
}

export default Nav
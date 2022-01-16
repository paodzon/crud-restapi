import React from 'react';
import Button from '../Button/Button';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className='nav__logo'>
                LOGO
            </div>
            <div className='nav__right'>
                <Button name='Sign IN' style='btn-primary'/>
            </div>
        </nav>
    )
}

export default Navbar

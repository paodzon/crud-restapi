import React,{useState} from 'react';
import Button from '../Button/Button';
import LoginForm from '../Form/LoginForm';
import SignUpForm from '../Form/SignUpForm';
import Modal from '../Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';
import './Navbar.css';

const Navbar = () => {

    const [login, setLogin] =useState(false);
    const [signup, setSignUp] =useState(false);
    const user = useSelector((state) => state?.auth.userDetails);
    const dispatch =useDispatch();

    return (
        <nav>
            <div className='nav__logo'>
                LOGO
            </div>
            <div className='nav__right'>
                {(user.userId) ? <Button name="Logout" style='btn-primary' onClickBtn={() => dispatch(logout())}/> : 
                <div className='nav__nouser'>
                    <Button name='Sign UP' style='btn-primary' onClickBtn={() =>setSignUp(true)}/>
                    <Button name='Login' style='btn-primary' onClickBtn={() => setLogin(true)}/>
                </div>
                }
            </div>
            <Modal isOpen={login} onClose={() => setLogin(false)} title='Login'>
                <LoginForm/>
            </Modal>

            <Modal isOpen={signup} onClose={() => setSignUp(false)} title='Sign Up'>
                <SignUpForm onClose={() => setSignUp(false)}/>
            </Modal>
        </nav>
    )
}

export default Navbar

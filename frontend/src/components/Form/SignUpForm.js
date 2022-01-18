import React, {useState} from 'react';

import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { signUp } from '../../actions/authActions';
import './Form.css';

const SignUpForm = ({onClose}) => {

    const [name,setName] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] =useState(''); 


    const dispatch = useDispatch();

    const onSubmitForm = (e) =>{
        e.preventDefault();
        if(confirmPass === password){
            dispatch(signUp({name:name, email:email, password:password}))
            onClose()
        }
        
    }

    return (
        <div className='form'>
            <form onSubmit={(e) =>onSubmitForm(e)} className='form__input'> 
            <input type='text' placeholder='Enter your name' value={name}  onChange={(e) => setName(e.target.value)}/>
            <input type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder='Enter your password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
            <input type='password' placeholder='Confirm your password' value={confirmPass} onChange={(e) =>setConfirmPass(e.target.value)}/>
            <Button type='submit' name="Submit" style='btn-dark'/>

          
            
            </form>
            
        </div>
    )
}

export default SignUpForm

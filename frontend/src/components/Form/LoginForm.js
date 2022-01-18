import React, {useState} from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authActions';
import './Form.css';

const LoginForm = () => {


    const [email,setEmail] =useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const onSubmitForm = (e) =>{
        e.preventDefault();
        dispatch(login({email:email, password: password}))
    }

    return (
        <div className='form'>
            <form onSubmit={(e) => onSubmitForm(e)} className='form__input'> 
            <input type='text' placeholder='Enter your username' value={email}  onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder='Enter a content' value={password} onChange={(e) =>setPassword(e.target.value)}/>
    
            <Button type='submit' name="Submit" style='btn-dark'/>      
            </form>
            
        </div>
    )
}

export default LoginForm

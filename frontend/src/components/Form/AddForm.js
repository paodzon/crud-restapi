import React, {useState} from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addForm } from '../../actions';
import './Form.css';

const AddForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const onSubmitForm = (e) =>{
        e.preventDefault();
        dispatch(addForm({title:title, content:content}));
        console.log({title:title, content:content})
    }

    return (
        <div className='form'>
            <form onSubmit={(e) =>onSubmitForm(e)} className='form__input'> 
            <input type='text' placeholder='Enter a title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type='text' placeholder='Enter a content' value={content} onChange={(e) =>setContent(e.target.value)}/>
         
            <Button type='submit' name="Submit" style='btn-dark'/>

          
            
            </form>
            
        </div>
    )
}

export default AddForm

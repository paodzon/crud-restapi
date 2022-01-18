import React, {useState, useEffect} from 'react';
import Button from '../Button/Button';
import { useSelector, useDispatch} from 'react-redux'; 
import { editForm } from '../../actions/formActions';
import './Form.css';

const EditForm = ({onClose}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const data = useSelector((state) => state?.form.selectedForm);
    const dispatch = useDispatch();

    useEffect(() =>{
        if(data){
            setTitle(data.title);
            setContent(data.content);
        }
    },[data])

     const onSubmitForm = (e) =>{
        e.preventDefault();
        dispatch(editForm({_id:data._id,title:title, content:content}))
        onClose()
    }

    

    return (
        <div className='form'>
            <form onSubmit={(e) =>onSubmitForm(e)} className='form__input'> 
            <input type='text' placeholder="Enter a title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type='text' placeholder="Enter content" value={content} onChange={(e) =>setContent(e.target.value)}/>
            <Button type='submit' name="Submit" style='btn-dark'/>
            </form>
            
        </div>
    )
}

export default EditForm

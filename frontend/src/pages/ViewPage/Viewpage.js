import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { getForm, clearForm } from '../../actions/formActions';
import './Viewpage.css';

const Viewpage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const form = useSelector((state) =>state?.form.selectedForm)

    useEffect(() =>{
        dispatch(getForm(id))

        return () =>{
            dispatch(clearForm())
        }
    },[dispatch])


    const renderContent = () =>{
        if(!form){
            return (<div>LOADING</div>)
        }else{

            return(<div className='viewpage__container'>
            <h2>Title: {form.title}</h2>
            <h2>Content: {form.content}</h2>
            <h2>Created By: {form.creator?.name}</h2>
            <h5>Created At: {form.createdAt}</h5><h5>Updated At: {form.updatedAt}</h5>
            <Button name='Go Back' style='btn-primary' onClickBtn={() =>navigate('/')}/>
        </div>)
        }
    }
    return (
        <div className='viewpage'>
            {renderContent()}
        </div>
    )
}

export default Viewpage

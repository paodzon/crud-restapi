import React,{useEffect} from 'react';
import Button from '../Button/Button';
import './Pagination.css';
import { useSelector, useDispatch } from 'react-redux';
import { getForms } from '../../actions';
const Pagination = (props) => {
    const {pageCount, pageCounter} = props;
    const dispatch = useDispatch();
    const perPage = useSelector((state) => state?.form.perPage);
    const totalItems = useSelector((state) => state?.form.totalItems);
    const currentItems = useSelector((state) =>state?.form.formList.length)
    const totalPage = Math.ceil(totalItems/perPage);

    useEffect(() =>{
        dispatch(getForms(pageCount))
    },[currentItems])

    return (
        <div className='pagination'>

            <div className='pagination__actions'>
                {(pageCount>1 ?<Button name='Previous' style='btn-primary' onClickBtn={() =>pageCounter('prev')}/>:'')}
                Page {pageCount} of {totalPage}
                {(pageCount < totalPage ? <Button name="Next" style='btn-primary' onClickBtn={() =>pageCounter('next')}/>: '')}
                
            </div>
        </div>
    )
}

export default Pagination

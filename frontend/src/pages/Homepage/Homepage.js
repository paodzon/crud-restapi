import React, {useState,useEffect} from 'react';
import Table from '../../components/Table/Table';
import Modal from '../../components/Modal/Modal';
import './Homepage.css';
import AddForm from '../../components/Form/AddForm';
import Button from '../../components/Button/Button';
import EditForm from '../../components/Form/EditForm';
import { useDispatch } from 'react-redux';
import { getForms } from '../../actions';
const Homepage = () => {

    const [addModal, setAddModal] =useState(false);
    const [editModal, setEditModal] =useState(false);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getForms());
    },[])

    return (
        <div className='homepage'>
            <div className='homepage__header'>
            <div className='homepage__title'>
                <h1>Table List</h1>
            </div>
            <Button name='Add' style='btn-primary' onClickBtn={() =>setAddModal(true)}/>
            </div>
            
            <Table openModal={() =>setEditModal(true)}/>
            <Modal isOpen={addModal} onClose={() =>setAddModal(false)} title='Add Form'>
                <AddForm/>
            </Modal>
            <Modal isOpen={editModal} onClose={() =>setEditModal(false)} title='Edit Form'>
                <EditForm/>
            </Modal>
        </div>
    )
}

export default Homepage

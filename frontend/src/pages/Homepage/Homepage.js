import React, {useState} from 'react';
import Table from '../../components/Table/Table';
import Modal from '../../components/Modal/Modal';
import './Homepage.css';
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';

const Homepage = () => {

    const [addModal, setAddModal] =useState(false);
    const [editModal, setEditModal] =useState(false);

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
                <Form/>
            </Modal>
            <Modal isOpen={editModal} onClose={() =>setEditModal(false)} title='Edit Form'>
                <Form/>
            </Modal>
        </div>
    )
}

export default Homepage

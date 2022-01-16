import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../Button/Button';
import './Modal.css'

const Modal = ({children, isOpen, onClose, title}) => {

    if(!isOpen) return null;

    return ReactDOM.createPortal(
        <div className='modal__overlay'>
            <div className='modal'>
            <div className='modal__header'>
            <div className='modal__title'><h2>{title}</h2></div>
            <div className='modal__close' onClick={onClose}>x</div>
            </div>
            <div className='modal__body'>
            {children}
            </div>

            
            
            </div>
            
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;
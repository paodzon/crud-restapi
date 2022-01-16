import React from 'react';
import './Button.css';

const Button = (props) => {

    const {name, onClickBtn, style, type} = props;

    return (
        <button type={type} className={`btn ${style}`} onClick={onClickBtn}>
            {name}
        </button>   
    )
}

export default Button

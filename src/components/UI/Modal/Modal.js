import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './modal.module.css';

const Modal = (props) => {

    return (
        <>
        <div className={classes.Modal} style={{display: props.showModal? 'block':'none'}}>                        
            {props.children}
        </div>
        <Backdrop show={props.showModal} click={props.hideModal}></Backdrop>
        </>
    );
}

export default Modal;
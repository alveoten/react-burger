import React from 'react';
import classes from './backdrop.module.css';

const Backdrop = (props) => {

    return props.show? <div className={classes.Backdrop} onClick={props.click}></div>: null;
}

export default Backdrop;
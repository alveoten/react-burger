import React from 'react';
import classes from './ordersummary.module.css';

const OrderSummary = (props) => {

    const summary = Object.keys(props.summary).map(e => <li key={e}>{e}: {props.summary[e]}</li>);

    return (
        <>
            <h3>The order</h3>
            <p>the burger:</p>
            <ul>
                {summary}
            </ul>
            <p>continue to checkout?</p>
        </>
    );
}

export default OrderSummary;
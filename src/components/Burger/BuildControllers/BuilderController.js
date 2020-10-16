import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import classes from './buildcontrollers.module.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuilderController = (props) => {

    return (
        <div className={classes.buildcontrol}>
            <div>
                Cost: {props.price.toFixed(2)}
            </div>
            {controls.map(
                e => <BuildControl disabled={props.disabledInfo[e.type]} key={e.label} label={e.label} add={() => props.add(e.type)} remove={() => props.remove(e.type)}></BuildControl>
            )}
            <button onClick={() => props.showModal(true)} disabled={props.total_ingr===0} className={classes.OrderButton}>checkout</button>
        </div>
    );
}


export default BuilderController;
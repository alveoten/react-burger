import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './burger.module.css'

const Burger = (props) => {

    let transformedIngridients = [];

    let counter = 0;
    for (let i in props.ingredients) {
        for (let j = 0; j < props.ingredients[i]; j++) {
            transformedIngridients.push(<BurgerIngredient type={i} key={(i + counter++)}></BurgerIngredient>);
            counter++;
        }
    }

    if( !counter ) {
        transformedIngridients = <p>please enter ingredients</p>;
    } 

    return (
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngridients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default Burger;
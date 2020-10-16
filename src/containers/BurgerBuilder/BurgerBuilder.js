import React, { Component } from 'react';
import BuilderController from '../../components/Burger/BuildControllers/BuilderController';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';


const INGRIDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
    burger: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        total_price: 0.7,
        showModal: false
    }

    addIngredient = (type) => {
        let ingredients = { ...this.state.ingredients };
        ingredients[type]++;
        let price = this.state.total_price + INGRIDIENT_PRICE[type];
        this.setState({ ingredients, total_price: price });
    }

    removeIngredient = (type) => {
        let ingredients = { ...this.state.ingredients };
        let price = this.state.total_price;
        if (ingredients[type] > 0) {
            ingredients[type]--;
            price -= INGRIDIENT_PRICE[type];
        }
        this.setState({ ingredients, total_price: price });
    }

    showModal = (show) => {
        this.setState({showModal: show});
    }


    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        let total_ingr = 0;
        for (let i in disabledInfo) {
            total_ingr += disabledInfo[i];
            disabledInfo[i] = disabledInfo[i] <= 0;            
        }

        return (
            <>
                <Burger ingredients={this.state.ingredients}>
                </Burger>
                <BuilderController showModal={this.showModal} price={this.state.total_price} total_ingr={total_ingr} disabledInfo={disabledInfo} add={this.addIngredient} remove={this.removeIngredient}></BuilderController>
                <Modal showModal={this.state.showModal} hideModal={() => this.showModal(false)}><OrderSummary summary={this.state.ingredients}></OrderSummary></Modal>
            </>
        );
    }
}

export default BurgerBuilder;
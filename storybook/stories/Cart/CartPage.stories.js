import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import CartPage from './CartPage';


const cartPage = storiesOf('Cart Page', module);

let items = [
    {
        id: 4,
        name: "Guac and Chips",
        price: "4.00",
        quantity: 1,
        inStock: true
    },
    {
        id: 2,
        name: "Coke",
        price: "3.00",
        quantity: 1,
        inStock: false
    },
];

cartPage.add('cart page', () => (<CenterView>
    <CartPage items={items}></CartPage>
</CenterView>));


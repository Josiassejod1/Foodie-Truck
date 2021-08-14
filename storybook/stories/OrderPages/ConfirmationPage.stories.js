import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {View} from 'react-native';
import ConfirmationPage from './ConfirmationPage';
import CheckoutPage from './CheckoutPage';


const orderStories = storiesOf('Order Pages', module);
const order = {
    id: '134131',
    total: '24.00',
    items: [
        {
            name:"Guac and Chips",
            price: "3.45",
            inStore: true,
        },
        {
            name:"Lemonade",
            price: "5.00",
            inStore: true,
        }
    ],
    grandTotal: '34.00',
    subTotal: '23.00',
    pickupLocation: '10 Green St, South Amber, DC, 23404'
}
orderStories.add('confirmation page', () => (<View>
    <ConfirmationPage order={order}/>
</View>));

orderStories.add('checkout page', () => (<View>
    <CheckoutPage order={order}/>
</View>));
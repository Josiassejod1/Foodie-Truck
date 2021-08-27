import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import NavBar from './Navbar';
import MenuTabView from './MenuTabView';
import OutofStockSwitch from '../Button/OutofStockSwitch';


const navStory = storiesOf('Navbar Component', module);
let Items = [
    {
        id: 1,
        name: "Lemonade",
        price: 3.15,
        type: 'appetizer'
    },
    {
        id: 2,
        name: "Coca Cola",
        price: 3.54,
        type: 'drinks'
    },
    {
        id: 3,
        name: "Taco",
        price: 10.00,
        type: 'main'
    },
    {
        id: 4,
        name: "Plaintains",
        price: 6.00,
        type: 'sides'
    },
    {
        id: 5,
        name: "Chicken",
        price: 23.00,
        type: 'main'
    },
];


navStory.add('nav bar', () => ( <NavBar isVendor={false}/>));
navStory.add('tab view (consumer)', () => (<MenuTabView items={Items}/>));
navStory.add('tab view (admin)', () => (<MenuTabView items={Items} isAdmin={true}/>));
navStory.add('out of stock switch', () => (<OutofStockSwitch />));


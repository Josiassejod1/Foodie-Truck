import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {View} from 'react-native';
import Item from './Item';
import MenuList from './MenuList';


const itemStories = storiesOf('Item Component', module);

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


itemStories.add('item component', () => (<View>
    <Item name="Guac and Chips" price="3.45" inStock={true}></Item>
    <Item name="Lemonade" price="5.45" inStock={false}></Item>
    <Item name="Fries" price="3.45" inStock={true}></Item>
</View>));

itemStories.add('alternate text', () => (<View>
    <Item name="Guac and Chips" price="3.45" inStock={false} alternate={true}></Item>
    <Item name="Lemonade" price="5.45" inStock={false} alternate={true}></Item>
    <Item name="Fries" price="3.45" inStock={false} alternate={true}></Item>
</View>));

itemStories.add('menu Item (consumer)', () => (
    <MenuList items={Items} isAdmin={false} type="all" />
));

itemStories.add('menu Item (admin)', () => (
    <MenuList items={Items} isAdmin={true} />
));

itemStories.add('menu Item (filter)', () => (
    <MenuList items={Items} isAdmin={true} type="main"/>
));





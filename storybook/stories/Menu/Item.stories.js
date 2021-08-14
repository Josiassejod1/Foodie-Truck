import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {View} from 'react-native';
import Item from './Item';


const itemStories = storiesOf('Item Component', module);

itemStories.add('item component', () => (<View>
    <Item name="Guac and Chips" price="3.45" inStock={true}></Item>
    <Item name="Lemonade" price="5.45" inStock={false}></Item>
    <Item name="Fries" price="3.45" inStock={true}></Item>
</View>));


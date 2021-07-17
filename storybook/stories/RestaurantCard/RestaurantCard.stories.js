import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import RestaurantCard from './RestaurantCard';


const RestaurantCardStory = storiesOf('Restaurant Card', module);

RestaurantCardStory.add('restaurant card', () => (<CenterView>
    <RestaurantCard 
    src="https://picsum.photos/200/300"
    title="Jacobs"
    category="Italian"
    miles="2.4 Miles"
    time="26 Minutes"
    />
</CenterView>));


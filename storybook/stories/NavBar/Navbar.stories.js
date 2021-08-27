import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import NavBar from './Navbar';
import MenuTabView from './MenuTabView';
import OutofStockSwitch from '../Button/OutofStockSwitch';


const navStory = storiesOf('Navbar Component', module);

navStory.add('nav bar', () => ( <NavBar isVendor={false}/>));
navStory.add('tab view', () => (<MenuTabView />));
navStory.add('out of stock switch', () => (<OutofStockSwitch />));


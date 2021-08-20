import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import NavBar from './Navbar';


const navStory = storiesOf('Navbar Component', module);

navStory.add('nav bar', () => ( <NavBar isVendor={false}/>));


import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import Tab from './Tab';


const TabStories = storiesOf('Tab Component', module);

TabStories.add('tab component', () => (<CenterView>
    <Tab max={5} quantity={1}></Tab>
</CenterView>));


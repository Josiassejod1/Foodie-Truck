import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import CardWidget from '../CardWidget/CardWidget';


const generic = storiesOf('Card Widget', module);
generic.add('card widget', () => (<CenterView>
    <CardWidget last="2222"  cardholder="John Doe" exp="3/25" icon="discover"/>
</CenterView>));
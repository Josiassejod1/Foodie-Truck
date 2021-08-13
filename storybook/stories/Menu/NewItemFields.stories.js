import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import NewItemFields from './NewItemFields';



const newItemStory = storiesOf('New Item Field', module);

newItemStory.add('new item field', () => (
<CenterView>
<NewItemFields></NewItemFields>
</CenterView>
));
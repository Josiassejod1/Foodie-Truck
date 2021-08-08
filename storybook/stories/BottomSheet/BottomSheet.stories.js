import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'react-native';
import CenterView from '../CenterView';
import CustomBottomSheet from '../BottomSheet/BottomSheet/';


const generic = storiesOf('Bottom Sheet', module);
generic.add('bottom  sheet', () => (
    <CustomBottomSheet>
        <Text>Awesome Sauce</Text>
    </CustomBottomSheet>));
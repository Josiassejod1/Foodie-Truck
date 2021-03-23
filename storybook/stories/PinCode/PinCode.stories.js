import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import PinCodeView from '../PinCode/PinCode';


const pinCode = storiesOf('Pin Code View', module);
pinCode.add('Pin Code View', () => (<CenterView>
    <PinCodeView />
</CenterView>));
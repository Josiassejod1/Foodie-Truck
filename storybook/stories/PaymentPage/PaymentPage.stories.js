import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import ImagePill from '../ImagePill/ImagePill';
import PaymentPage from './PaymentPage';


const paymentStories = storiesOf('Payment Page', module);
paymentStories.add('payment page', () => (<CenterView>
    <PaymentPage width={101} height={97} src="https://picsum.photos/200/300" />
</CenterView>));


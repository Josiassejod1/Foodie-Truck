import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../CenterView/';
import SignIn from './SignIn';


const signUpStories = storiesOf('Auth', module);
const styles = {
    children: {
        left: 0,
        flex: 1,
        top: 300,
        justifyContent: 'flex-start',
    },
    button: {
        paddingBottom: 15,
        alignItems: 'center',
    }
}
signUpStories.add('sign in', () => (<CenterView>
    <SignIn styles={styles} />
</CenterView>));
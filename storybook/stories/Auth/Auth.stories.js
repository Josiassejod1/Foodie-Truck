import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import SignIn from './SignIn';
import SignUp from './SignUp';


const signUpStories = storiesOf('Auth', module);
const styles = {
    children: {
        left: 0,
        flex: 1,
        top: 300,
        alignItems: 'center'
    },
    children2: {
        left: 0,
        flex: 1,
        top: 275,
        alignItems: 'center'
    },
    button: {
        paddingBottom: 15,
        alignItems: 'center',
    }
}
signUpStories.add('sign in', () => (<CenterView>
    <SignIn styles={styles} />
</CenterView>));

signUpStories.add('sign up', () => (<CenterView>
    <SignUp styles={styles} />
</CenterView>));
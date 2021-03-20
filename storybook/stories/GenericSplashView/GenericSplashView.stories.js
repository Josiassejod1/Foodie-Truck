import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import GenericSplashView from '../GenericSplashView/GenericSplashView';
import PublisherBtn from '../PublisherBtn/PublisherBtn';


const genericSplash = storiesOf('Generic Splash', module);
const styles = {
    children: {
        left: 0,
        flex: 1,
        top: 500,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
}

genericSplash.add('generic splash screen', () => (<GenericSplashView subtitle="Find the best food trucks around" style={styles.children} >
    <PublisherBtn title="Publish" />
</GenericSplashView>));
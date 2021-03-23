import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import GenericBtn from '../Button/GenericBtn';


const generic = storiesOf('Generic Button', module);
generic.add('generic btn', () => (<CenterView>
    <GenericBtn width={350} height={40} borderRadius={5} paddingTop={6} color="red">
        Click Me !
    </GenericBtn>
</CenterView>));
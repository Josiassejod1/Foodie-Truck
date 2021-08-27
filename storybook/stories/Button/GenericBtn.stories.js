import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import GenericBtn from '../Button/GenericBtn';
import GoogleIcon from '../../../src/assets/images/google.svg';
import TrashBtn from './TrashBtn';
import OutofStockSwitch from './OutofStockSwitch';
import AddToCart from './AddToCartBtn';
import GenericSplashView from '../GenericSplashView/GenericSplashView';


const generic = storiesOf('Generic Button', module);
generic.add('generic btn', () => (<CenterView>
    <GenericBtn width={350} height={40} borderRadius={5} paddingTop={6} color="red">
        Click Me !
    </GenericBtn>
</CenterView>));

generic.add('icon btn', () => (<CenterView>
    <GenericBtn 
    icon={<GoogleIcon />}
    width={350} 
    height={40} 
    borderRadius={5} 
    paddingTop={6} 
    color="red">
        Click Me !
    </GenericBtn>
</CenterView>));

generic.add('switch', () => (
    <CenterView>
        <OutofStockSwitch />
    </CenterView>
));

generic.add('trash', () => (
    <CenterView>
      <TrashBtn></TrashBtn>
    </CenterView>
));

generic.add('Add To Cart', () => (
    <CenterView>
        <AddToCart></AddToCart>
    </CenterView>
));
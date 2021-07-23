
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import StyledTextInput from '../StyledTextInput/StyledTextInput';


const styledTextInput = storiesOf('Styled Text Input', module);
styledTextInput.add('email input text', () => (<CenterView>
   <StyledTextInput placeholder="Email" placeholderTextColor="#AFAFAF" keyboardType="email-address" />
</CenterView>));

styledTextInput.add('password input text', () => (<CenterView>
    <StyledTextInput placeholder="Password" placeholderTextColor="#AFAFAF" secureTextEntry={true} keyboardType="default" />
 </CenterView>));


import React from 'react';
import {View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardWidget from '../CardWidget/CardWidget';
import StyledText from '../StyledText/StyledText';
import PublisherBtn from '../PublisherBtn/PublisherBtn';
import { useFonts, Poppins } from 'expo-font';
import BackButton from '../../../src/assets/images/back.svg';

export default function PaymentPage(props) {
    let [fontsLoaded] = useFonts({
        "Poppins-Bold": require('../../../fonts/Poppins-Bold.ttf'),
    });
    const style = {
        grandTotal: {
            fontWeight: '700',
            fontSize: 16,
            fontFamily: 'Poppins-Bold',
        },
        total: {
            color: '#3E3E3E'
        }
    }
  return (
    <View >
        <TouchableOpacity style={{paddingBottom: 32}}>
            <BackButton></BackButton>
        </TouchableOpacity>
        <StyledText size="bold">Payment</StyledText>
        <View justifyContent="flex-end" flexDirection='row'>
        <TouchableOpacity style={{width: 150, height: 100}} justifyContent="flex-end" flexDirection='row'>
           <Text  style={{paddingTop: 10}}>
            + Add New Card
           </Text>
        </TouchableOpacity>
        </View>
        <View alignItems="center">
        <CardWidget last="2222"  cardholder="John Doe" exp="3/25" icon="discover"/>
        </View>
        <View flexDirection="row" justifyContent="space-between" style={{paddingTop: 90}}>
            <Text style={style.total}>
                Order
            </Text>
            <Text style={style.total}>
                $100
            </Text>
        </View>
        <View flexDirection="row" justifyContent="space-between">
            <Text style={style.total}>
                Delivery
            </Text>
            <Text style={style.total}>
                $100
            </Text>
        </View>
        <View flexDirection="row" justifyContent="space-between">
            <Text style={style.grandTotal}>
                Summary
            </Text>
            <Text style={style.grandTotal}>
                $100
            </Text>
        </View>
        <View style={{paddingTop: 40}}>
            <PublisherBtn backgroundColor="#C90000" borderRadius={10} title="Publish" selected={false} />
        </View>
    </View>
  );
}
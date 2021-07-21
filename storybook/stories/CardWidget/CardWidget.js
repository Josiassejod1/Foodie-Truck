

import React from 'react';
import {View, Text, Image} from 'react-native';
import StyledText from '../StyledText/StyledText';

export default function CardWidget(props) {
    const style = {
        card: {
            backgroundColor: 'black',
            borderRadius: 12,
            height: 179,
            width: 278,
            paddingLeft: 28,
            paddingRight: 28
        },
        text: {
            color: 'white',
        },
        placeholder: {
            color: 'darkgray',
            fontSize: 10
        },
        last4: {
            color: 'white',
            fontSize: 15,
        },
        icon: {
            width: 48,
            height: 18,
        },
        iconPlacement: {
          paddingTop: 30
        }
      }

      const payments = {
        'visa': require('../../../src/assets/images/payments/visa.png'),
        'mastercard': require('../../../src/assets/images/payments/mastercard.png'),
        'amex': require('../../../src/assets/images/payments/americanexpress.png'),
        'discover': require('../../../src/assets/images/payments/discover.png'),
      }

     let paymentIcon = payments?.[props.icon] || 'visa.png';

  return (
    <View style={style.card}>
        <View style={style.iconPlacement}>
        <Image
            stye={style.icon}
            source={paymentIcon}
        />
        </View>
        <View justifyContent='space-between' flexDirection='row'>
        <Text style={style.last4}>
            ***
        </Text>
        <Text style={style.last4}>
            ***
        </Text>
        <Text style={style.last4}>
            ***
        </Text>
        <Text style={style.last4}>
            {props.last}
        </Text>
        </View>
        <View flexDirection='row' justifyContent='space-between' style={{paddingTop: 18}}>
        <Text style={style.placeholder}>
            Card Holder
        </Text>
        <Text style={style.placeholder}>
            Expires
        </Text>
        </View>
        <View flexDirection='row' justifyContent='space-between' style={{paddingTop: 5}}>
        <Text style={style.text}>
            {props.cardholder}
        </Text>
        <Text style={style.text}>
            {props.exp}
        </Text>
        </View>
    </View>
  );
}
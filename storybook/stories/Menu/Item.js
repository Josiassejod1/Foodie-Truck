import React, {useState} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useFonts, Poppins } from 'expo-font';

export default function Item(props) {
    let [fontsLoaded] = useFonts({
        "Poppins": require('../../../fonts/Poppins.ttf'),
    });

    const style = {
        text: {
            fontFamily: 'Poppins-Light',
            fontSize: 16,
            color: '#424347',
            fontWeight: 'normal',
            padding: 8,
        },
        inStock: {
            color: '#C90000',
            fontFamily: 'Poppins-Light',
            fontWeight: 'normal',
        },
        price: {
            fontFamily: 'Poppins-Light',
            color: 'black',
            fontSize: 14,
            paddingRight: 20,
            fontWeight: 'normal',
        },
        row: {
            paddingBottom: 9,
            flexDirection: 'row',
            justifyContent: 'space-start'
        }
    }


    return(
        <View style={style.container}>
            <View style={style.row}>
                <Text style={style.item}>{props.name}</Text>
            </View>
            <View style={style.row}>
                <Text style={style.price}>$ {props.price}</Text>  
               {
                   props.inStock ?  <Text style={style.inStock}>In stock </Text> :  <Text style={style.inStock}>Out of stock</Text>
               }
            </View>
        </View>
    );
}
import React, {useState} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useFonts, Poppins } from 'expo-font';

export default function Item(props) {
    let [fontsLoaded] = useFonts({
        "Poppins": require('../../../fonts/Poppins.ttf'),
        "Avenir": require('../../../fonts/Avenir.otf'),
    });

    const alternate = props.alternate ?? false

    const style = {
        text: {
            fontFamily: alternate ? 'Avenir' : 'Poppins-Light',
            fontSize: alternate ? 18 : 16,
            color: alternate ? 'black' : '#424347',
            fontWeight: alternate ? '800' : 'normal',
            padding: 8,
        },
        inStock: {
            color: '#C90000',
            fontFamily: 'Poppins-Light',
            fontWeight: 'normal',
        },
        price: {
            fontFamily: alternate ? 'Avenir' : 'Poppins-Light',
            color: alternate ? '#B8BBC6' : 'black',
            fontSize: 14,
            paddingRight: 20,
            fontWeight: 'normal',
        },
        row: {
            paddingBottom: 9,
            flexDirection: 'row',
            justifyContent: 'flex-start'
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
                   (!props.inStock && alternate) ?  <Text></Text> : props.inStock ? <Text style={style.inStock}>In stock </Text> :  <Text style={style.inStock}>Out of stock</Text>
               }
            </View>
        </View>
    );
}
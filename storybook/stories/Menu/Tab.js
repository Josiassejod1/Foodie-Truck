import React, {useState} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useFonts, Poppins } from 'expo-font';

export default function Tab(props) {
    const [max, setMax] = useState(props.max);
    const [min, setMin] = useState(0);
    let count = min;
    const [quantity, setQuantity] = useState(props.quantity);

    function incrementQuantity(){
       if (quantity != max) {
         count = 1 + quantity
        setQuantity(count)
       }
    }

    function decreaseQuantity(){
        if (quantity != min) {
            count = quantity - 1
            setQuantity(count)
        }
    }

    let [fontsLoaded] = useFonts({
        "Poppins": require('../../../fonts/Poppins.ttf'),
    });

    const style = {
        container: {
            width: 96,
            borderRadius: 2,
            backgroundColor: "#0A3364",
            height: 32,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        text: {
            fontFamily: 'Poppins',
            fontSize: 14,
            color: 'white',
            fontWeight: 'bold',
            padding: 8,
        }
    }


    return(
        <View style={style.container}>
            <TouchableOpacity onPress={() => decreaseQuantity()}>
                <Text style={style.text}>
                    -
                </Text>
            </TouchableOpacity>
            <Text style={style.text}>
                {quantity}
            </Text>
            <TouchableOpacity onPress={() => incrementQuantity()}>
                <Text style={style.text}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    );
}
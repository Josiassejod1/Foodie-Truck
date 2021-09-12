import React, { useState} from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function RadioButton(props) {
    const [selected, setSelected] = useState(props.selected || false)
  return (
      <View flexDirection="row" alignItems="center">
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <View style={[{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }, props.style]}>
        {
          selected ?
            <View style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: 'white',
            }}/>
            : null
        }
      </View>
      </TouchableOpacity>
        <View style={{paddingLeft: 23}}>
            <Text style={{color: 'white', fontFamily: "Avenir", fontWeight: "800"}}>{props.text || ""}</Text>
        </View>
      
      </View>
  );
}
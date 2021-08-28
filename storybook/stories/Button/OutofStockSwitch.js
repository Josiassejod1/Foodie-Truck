import React, { useState}  from 'react';
import { View, Switch } from 'react-native';
import StyledText from '../StyledText/StyledText';
import TrashBtn from './TrashBtn';


export default function OutofStockSwitch() {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(!isEnabled);    
    return(
       <View>
        { isEnabled && <View style={{paddingBottom: 7}}><StyledText size="sm" color="#C90000" >Sold out</StyledText></View>}
        <Switch
            trackColor={{ false: "gray", true: "#0A3364" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
       </View>
    );
} 
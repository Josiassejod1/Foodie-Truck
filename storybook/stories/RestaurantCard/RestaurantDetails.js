
import React from "react";
import { TouchableOpacity } from "react-native";

export default function RestaurantDetails() {
    let name = props.name;
    let time = props.time;
    let pickupLocation = props.pickupLocation;
    let category = props.category;
    let time = props.time;
    return(
        <View>
        <View>
        <StyledText size="header" color="black" >
            {name}
        </StyledText>
        </View>
        <StyledText  size="sm" color="black">
        {category}
        </StyledText>
        <StyledText size="sm">  
            {time}
        </StyledText>
        <StyledText size="sm">  
            Current Location: {pickupLocation}
        </StyledText>
        <View flexDirection='row' style={{justifyContent:'space-between'}}>
            <View style={{paddingTop: 5, paddingRight: 4}}>
                <Plane></Plane>
            </View>
            <StyledText size="sm" color="black">
                {props.location}
            </StyledText>
        </View>
        <View flexDirection='row' style={{justifyContent:'space-between'}}>
            <TouchableOpacity>
                <StyledText>Get Directions</StyledText>
            </TouchableOpacity>
        </View>
    </View>
    );

}
import React from 'react';
import { View, Image, Button } from 'react-native';
import StyledText from '../StyledText/StyledText';
import Plane from '../../../src/assets/images/plane.svg';
import GenericBtn from '../Button/GenericBtn';

export default function RestaurantCard(props) {

    const styles = {
        button: {
            background: "#206FCE",
        },
        viewBorder: {
            borderRadius: 5, 
            borderStyle: "solid", 
            borderRadius: 5, 
            borderWidth: 2, 
            borderColor: "grey",
            flexDirection: 'row',
            padding: 24
        }
    }

    return(
        <View style={styles.viewBorder}>
            <Image source={{ url: props.src }} style={{
                width: 136,
                height: 108,
                marginRight: 17
            }} />
            <View>
                <StyledText size="m" >
                    {props.name}
                </StyledText>
                <StyledText  size="sm" color="black">
                {props.category}
                </StyledText>
                <StyledText size="sm">  
                    {props.time}
                </StyledText>
                <View flexDirection='row' style={{justifyContent:'space-between'}}>
                    <View style={{paddingTop: 5, paddingRight: 4}}>
                        <Plane></Plane>
                    </View>
                    <StyledText size="sm" color="black">
                        {props.location}
                    </StyledText>
                </View>
                <View style={{paddingTop: 8}}>
                <GenericBtn 
                    width={85} 
                    height={24} 
                    borderRadius={10} 
                    color="#206FCE" 
                    fontSize={10} 
                    paddingTop={6}>
                    View Menu
                </GenericBtn>
                </View>
            </View>
        </View>
    );

  
}
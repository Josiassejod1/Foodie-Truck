import React from 'react';
import OutofStockSwitch from '../Button/OutofStockSwitch';
import {Text, View} from 'react-native';
import TrashBtn from '../Button/TrashBtn';
import AddToCart from '../Button/AddToCartBtn';
import StyledText from '../StyledText/StyledText';
import Item from './Item';

export default function MenuItem(props) {
    const name  = props.name;
    const price  = props.price;
    const isAdmin = props.isAdmin || false;

    const styles = {
        container: {
            justifyContent: "space-between",
            flexDirection: 'row'
        }
    }
    
    const AdminView = (
    <View style={styles.container}>
        <Item name={name} price={price} inStock={false} alternate={true}/>
        <OutofStockSwitch/>
        <StyledText size="m" color="#C90000">Edit</StyledText>
        <TrashBtn/>
    </View>
    );

    const ConsumerView = (
    <View style={styles.container}>
        <Item name={name} price={price} inStock={false} alternate={true}/>
        <AddToCart/>
    </View>
    );

    return(
        <View>
            {isAdmin ? AdminView : ConsumerView }
        </View>
    );
}
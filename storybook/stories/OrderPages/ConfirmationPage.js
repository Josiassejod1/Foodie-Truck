import React from 'react';
import StyledText from '../StyledText/StyledText';
import StyledTextArea from '../Menu/StyledTextArea';
import {View, Text, SectionList, ScrollView} from 'react-native';
import GenericBtn from '../Button/GenericBtn';
import Item from '../Menu/Item';

export default function ConfirmationPage(props) {


    const order = props.order;
    function convertLocation(order) {
        //To create a function that translates the current
        //address from  the food truck to give the location
        // as the location is currently coordinates
    }

    const styles = {
        row: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingBottom: 26
        },
        header: {
            alignItems: 'center',
            paddingTop: 71,
            paddingBottom: 42
        },
        container: {
            paddingLeft: 47,
            paddingRight: 47
        }
    }

    const CategoryItemSeparator = () => {
        return (
            //Item Separator
            <View style={{ paddingBottom: 40, margin: 0 }} />
        );
    };

    return(
        <ScrollView style={styles.container}>
           <View style={styles.header}>
               <StyledText size="big-skinny" color="#206FCE" fontSize={22}>Order completed!</StyledText>
               <StyledText size="sm" color="#BBBBB7">Order Number #{order.id}</StyledText>
            </View>
            <View style={{paddingBottom: 42}}>
               <StyledText size="bold">Ordered Items</StyledText>
            </View>
            <View style={{paddingBottom: 105}}>
            <SectionList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={CategoryItemSeparator}
                sections={[
                    { data: order.items },
                ]}
                renderItem={({ item }) => (
                <Item {...item} />
                )}
                keyExtractor={(item, index) => index}
            />
            </View>
            <View style={{paddingBottom: 51}}>
               <StyledText size="big-skinny" color="#424347">Pick up address</StyledText>
               <Text>{order.pickupLocation}</Text>
            </View>
            <View style={styles.row}>
                <Text>Order</Text>
                <Text>${order.subTotal}</Text>
            </View>
            <View style={styles.row}>
                <StyledText size="l" color="black">Summary</StyledText>
                <StyledText size="l" color="black">${order.grandTotal}</StyledText>
            </View>
            <View style={{alignItems: 'center'}}>
                <GenericBtn width={341} height={59} borderRadius={10} paddingTop={18} color="#C90000">
                    Continue Shopping
                </GenericBtn>
            </View>
        </ScrollView>
    );
}
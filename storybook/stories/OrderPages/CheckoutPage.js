import React from 'react';
import StyledText from '../StyledText/StyledText';
import StyledTextArea from '../Menu/StyledTextArea';
import {View, Text, SectionList, ScrollView} from 'react-native';
import GenericBtn from '../Button/GenericBtn';
import Item from '../Menu/Item';

export default function CheckoutPage(props) {


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
               <StyledText size="header">Checkout Out</StyledText>
            </View>
            <View style={{paddingBottom: 42}}>
               <Text>Ordered Items</Text>
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
               <Text>Pickup Address</Text>
               <Text>{order.pickupLocation}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <GenericBtn width={341} height={59} borderRadius={10} paddingTop={18} color="#B84343">
                    Proceed
                </GenericBtn>
            </View>
        </ScrollView>
    );
}
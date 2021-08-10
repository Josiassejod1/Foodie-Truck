

import React from 'react';
import TrashSVG from '../../../src/assets/images/trash.svg';
import { useFonts, Poppins } from 'expo-font';
import {View, TouchableOpacity, SectionList, ScrollView} from 'react-native';
import BackButton from '../../../src/assets/images/back.svg';
import StyledText from '../StyledText/StyledText';
import PublisherBtn from '../PublisherBtn/PublisherBtn';
import Tab from '../Menu/Tab';
import Item from '../Menu/Item';
import StyledTextArea from '../Menu/StyledTextArea';
    


export default function CartPage(props){
    
    let [fontsLoaded] = useFonts({
        "Poppins-Bold": require('../../../fonts/Poppins-Bold.ttf'),
    });
    const style = {
        viewRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    }

    const FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={{ paddingBottom: 45 }} />
        );
    };


  return (
    <ScrollView>
        <TouchableOpacity style={{paddingBottom: 32, paddingTop: 54}}>
            <BackButton></BackButton>
        </TouchableOpacity>
       <View style={{paddingBottom: 65}}><StyledText size="bold">My Cart</StyledText></View>
        <SectionList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={FlatListItemSeparator}
            sections={[
                { title: '', data: props.items },
            ]}
            renderItem={({ item }) => (
                        // Item for the FlatListItems
            <View style={style.viewRow}>
                <Item {...item}></Item>
                    <Tab max={5} quantity={item.quantity}></Tab>
                <TouchableOpacity onPress={() => {}}>
                    <TrashSVG></TrashSVG>
                </TouchableOpacity>
            </View>
            )}
            keyExtractor={(item, index) => index}
            />
             <View style={{paddingBottom: 30, paddingTop: 36}}><StyledText size="bold-light">Special Instructions</StyledText></View>
             <View style={{paddingBottom: 65}}><StyledTextArea height={126} width={324}></StyledTextArea></View>
        <PublisherBtn backgroundColor="#C90000" borderRadius={10} title="Check Out" selected={false} fontWeight={true}/>
    </ScrollView>
  );
}
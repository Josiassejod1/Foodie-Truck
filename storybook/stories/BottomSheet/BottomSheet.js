
import React, { useCallback, useMemo, useRef,useState } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity, TextInput} from 'react-native';
import BottomSheet, {useBottomSheet} from '@gorhom/bottom-sheet';
import CloseSVG from '../../../src/assets/images/close.svg'
import GenericBtn from '../Button/GenericBtn';



export default function CustomBottomSheet(props) {
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['60%',], []);
    
    const styles = {
        contentContainer: {
          paddingBottom: 20,
          paddingLeft: 24,
        },
        container: {
          flex: 1,
          padding: 24,
          backgroundColor: 'transparent',
        },
        cardRow: {
          paddingLeft: 24,
          flexDirection: 'row', 
          paddingRight: 24,
          justifyContent: 'space-start',
          
        },
        cardInfoContainer: {
          paddingLeft: 24,
          paddingBottom: 10,
          paddingRight: 24,
        },
        cardTextContainer: {
          paddingBottom: 10,
        },
        cardText: {
          color: '#999999'
        },
        addNewCard: {
          fontSize: 22,
          paddingBottom: 15,
        },
        input: {
          borderBottomColor: '#F5F5F5',
          borderBottomWidth: 1,
          borderBottomLength: '100%',
          fontSize: 16
        },
        addCardButton: {
          paddingTop: 30,
          alignItems: 'center'
        },
        bottomSheet: {
          paddingTop: 45,
          paddinBottom: 27,
            flexDirection: 'row', 
           justifyContent: 'flex-start', 
           alignItems: 'flex-start',
      }}

    const handleClosePress = useCallback(() => {
        bottomSheetRef.current.close();
        if (props.bottomSheet != undefined) {
          props.state(false);
        }
    }, []);

    const handleOpenPress = useCallback(() => {
            bottomSheetRef.current.expand();
    }, []);

  
    if (props.openBottomSheet) {
        handleOpenPress();
    }
return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
      >
        <View style={styles.contentContainer}>
           <View style={styles.bottomSheet}>
              <TouchableOpacity onPress={() => handleClosePress} >
                    <CloseSVG></CloseSVG>
              </TouchableOpacity>
           </View>
         <View>
            {props.children}
         </View>
        </View>
        <View style={styles.cardInfoContainer}>
          <Text style={styles.addNewCard}>
            Add New Card
          </Text>
          <View>
            <View style={styles.cardTextContainer}><Text style={styles.cardText}>Name On Card</Text></View>
            <TextInput style={styles.input} placeholderTextColor="black"></TextInput>
          </View>
        </View>
        <View style={styles.cardInfoContainer}>
          <View>
            <View style={styles.cardTextContainer}><Text style={styles.cardText}>Card Number</Text></View>
            <TextInput style={styles.input} keyboardType="numeric" textContentType="creditCardNumber"></TextInput>
          </View>
        </View>
        <View style={styles.cardRow}>
          <View style={{paddingRight: 35}}>
            <View style={styles.cardTextContainer}><Text style={styles.cardText}>Expiry Date</Text></View>
            <TextInput style={styles.input} keyboardType="numeric"></TextInput>
          </View>
          <View>
            <View style={styles.cardTextContainer}><Text style={styles.cardText}>CVV</Text></View>
            <TextInput style={styles.input} keyboardType="numeric" textContentType="password" maxLength={4}></TextInput>
          </View>
        </View>
        <View style={styles.addCardButton}>
          <GenericBtn width={373} height={51} borderRadius={4} paddingTop={12} color="#206FCE" fontWeight={'bold'}>
            Add Card
          </GenericBtn>
        </View>
      </BottomSheet>
    </View>
  );
}
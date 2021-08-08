
import React, { useCallback, useMemo, useRef,useState } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity } from 'react-native';
import BottomSheet, {useBottomSheet} from '@gorhom/bottom-sheet';
import CloseSVG from '../../../src/assets/images/close.svg'



export default function CustomBottomSheet(props) {
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['5%', '25%', '75%',], []);
    
    const styles = {
        container: {
          flex: 1,
          padding: 24,
          backgroundColor: 'transparent'
        },
        bottomSheet: {
            paddingTop: 45,
            paddinBottom: 27,
            paddingLeft: 26,
            flexDirection: 'row', 
           justifyContent: 'flex-start', 
           alignItems: 'flex-start',
      }}

    const handleClosePress = useCallback(() => {
        bottomSheetRef.current.close();
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
                <TouchableOpacity onPress={handleClosePress} >
                    <CloseSVG></CloseSVG>
                </TouchableOpacity>
           </View>
         <View>
            {props.children}
         </View>
        </View>
        
      </BottomSheet>
    </View>
  );
}
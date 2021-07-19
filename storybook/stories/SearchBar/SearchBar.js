import React from 'react';
import { View, TextInput } from 'react-native';
import SearchSVG from '../../../src/assets/images/search.svg';
import { useFonts, Poppins } from 'expo-font';

export default function SearchBar(props) {
    let [fontsLoaded] = useFonts({
        "Poppins-Light": require('../../../fonts/Poppins-Light.ttf'),
    });
    const styles = {
        container: {
            alignItems: 'center',
        },
        searchBar: {
            fontSize: 24,
            margin: 10,
            width: '90%',
            height: 50,
            backgroundColor: 'white',
        },
        itemText: {
            margin: 10,
            color: 'white',
            fontSize: 24,
            backgroundColor: 'blue',
            width: '100%',
            height: 50
        },
        searchBar: {
            zIndex: 1000,
            backgroundColor: "#EFEEEE",
            height: 60,
            borderRadius: 30,
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 314,
            justifyContent: 'flex-start',
            marginLeft: 5,
        },
        placeholder: {
            fontFamily: 'Poppins-Light'
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <View style={{
                    marginLeft: 5,
                    marginTop: 15,
                    flexDirection: 'row',
                }}>
                    <View style={{
                        marginRight: 20,
                        marginLeft: 20
                    }}>
                        <SearchSVG> </SearchSVG>
                    </View>
                    <TextInput placeHolderTextColor="#0A3364" style={styles.placeholder} editable placeholder="Search" />
                </View>
            </View>
        </View>
    );
}
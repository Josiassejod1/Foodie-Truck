import React from 'react';
import { Image, ScrollView, View, SectionList, ImageBackground } from "react-native";
import { useFonts, Poppins } from 'expo-font';
import CategoryPill from './../CategoryPill/CategoryPill';
import ImagePill from './../ImagePill/ImagePill';
import StyledText from '../StyledText/StyledText';
import _ from "lodash";
import ImagePillWithText from '../ImagePillWithText/ImagePillWithText';
import LocationSearchBar from '../LocationSearchBar/LocationSearchBar';


export function HomePage(props) {

    let TopRatedData = [
        {
            id: 1,
            name: "Tony's Taco",
            category: "Mexican",
            location: "15 Min Away",
            src: "https://picsum.photos/200/300"
        },
        {
            id: 2,
            name: "Grilled Cheese Express",
            category: "American",
            location: "5 Min Away",
            src: "https://picsum.photos/200/300"
        },
        {
            id: 3,
            name: "Mamas Pizza",
            category: "Italian",
            location: "20 Min Away",
            src: "https://picsum.photos/200/300"
        },
    ];


    let NewTrucksData = [
        {
            id: 4,
            name: "Gold Shark",
            category: "Asian",
            location: "7 Min Away",
            src: "https://picsum.photos/200/300"
        },
        {
            id: 5,
            name: "Tastylicios",
            category: "American",
            location: "13 Min Away",
            src: "https://picsum.photos/200/300"
        },
        {
            id: 6,
            name: "Luis Fish & Chips",
            category: "British",
            location: "2 Min Away",
            src: "https://picsum.photos/200/300"
        },
    ];


    let AllTrucksData = [
        {
            id: 7,
            name: "Karen's Truck",
            category: "American",
            src: "https://picsum.photos/200/300"
        },
        {
            id: 2,
            name: "Grilled Cheese Express",
            category: "American",
            src: "https://picsum.photos/200/300"
        },
        {
            id: 3,
            name: "Mamas Pizza",
            category: "Italian",
            src: "https://picsum.photos/200/300"
        },
    ];

    const FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={{ margin: 9 }} />
        );
    };
    return (
        <ScrollView>
            <View style={{ padding: 25 }}>
                <View style={{
                    marginBottom: 5
                }}>
                    <StyledText size="header">
                        Hungry?
                    </StyledText>
                </View>
                <StyledText size="subtitle">
                    Find The Best Food Trucks
                </StyledText>
                <StyledText size="subtitle">
                    Near You
                </StyledText>
            </View>
            <ImageBackground source={{ url: "https://picsum.photos/414/274" }} style={{
                height: 274,
                width: 414,
                marginBottom: 32,
                resizeMode: "cover",
                justifyContent: "center"
            }}>
                <LocationSearchBar />
            </ImageBackground>

            <View style={{ padding: 25 }}>
                <StyledText size="subtitle">
                    Categories
                </StyledText>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, marginBottom: 41 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                    pagingEnabled>
                    <CategoryPill title="French" />
                    <CategoryPill title="Greek" />
                    <CategoryPill title="Indian" />
                    <CategoryPill title="Cajun" />
                </ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 25 }}>
                    <StyledText size="subtitle">
                        Top Rated
                    </StyledText>
                    <StyledText size="xtra-m">
                        View all
                    </StyledText>
                </View>
                <SectionList
                    contentContainerStyle={{
                        padding: 0,
                        margin: 0
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    sections={[
                        { title: 'Top Rated', data: TopRatedData },
                    ]}
                    renderItem={({ item }) => (
                        // Item for the FlatListItems
                        <ImagePillWithText
                            name={item.name}
                            category={item.category}
                            location={item.category}
                            src={item.src}
                        />
                    )}
                    keyExtractor={(item, index) => index}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 25 }}>
                    <StyledText size="subtitle">
                        New Trucks
                    </StyledText>
                    <StyledText size="xtra-m">
                        View all
                    </StyledText>
                </View>
                <SectionList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    sections={[
                        { title: 'New Trucks', data: NewTrucksData },
                    ]}
                    renderItem={({ item }) => (
                        // Item for the FlatListItems
                        <ImagePillWithText
                            name={item.name}
                            category={item.category}
                            location={item.category}
                            src={item.src}
                        />
                    )}
                    keyExtractor={(item, index) => index}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 25 }}>
                    <StyledText size="subtitle">
                        All Trucks
                    </StyledText>
                    <StyledText size="xtra-m">
                        View all
                    </StyledText>
                </View>
                <SectionList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    sections={[
                        { title: 'All Trucks', data: AllTrucksData },
                    ]}
                    renderItem={({ item }) => (
                        // Item for the FlatListItems
                        <ImagePillWithText
                            name={item.name}
                            category={item.category}
                            location={item.category}
                            src={item.src}
                        />
                    )}
                    keyExtractor={(item, index) => index}
                />
            </View>
        </ScrollView >
    )
}
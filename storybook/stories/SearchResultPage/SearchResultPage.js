import React from "react";
import LocationSearchBar from "../LocationSearchBar/LocationSearchBar";
import {View, ScrollView } from "react-native";
import StyledText from '../StyledText/StyledText';
import CategoryPill from '../CategoryPill/CategoryPill';

export default function SearchResult () {
    return(
        <ScrollView>
            <View>
                <View>
                    <StyledText size="header">
                    Results
                    </StyledText>
                </View>
                <View>
                    <LocationSearchBar placeholder="Search" />
                </View>
                <View>
                    <StyledText size="subtitle">
                        Categories
                    </StyledText>
                    <ScrollView
                    contentContainerStyle={{ flexGrow: 1, marginBottom: 41 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                    pagingEnabled>
                    <CategoryPill title="Mexican" />
                    <CategoryPill title="Asian" />
                    <CategoryPill title="Soul Food" />
                    </ScrollView>
                </View>
                <View>
                    
                </View>
            </View>
        </ScrollView>
    )  
}
import React  from 'react';
import { View, SectionList, ScrollView } from 'react-native';
import SearchBar from '../SearchBar/SearchBar'
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import StyledText from '../StyledText/StyledText';
import CategoryPill from '../CategoryPill/CategoryPill';

let TopRatedData = [
    {
        id: 1,
        name: "Tony's Taco",
        category: "Mexican",
        time: "15 Min Away",
        location: "0.5 mi away", 
        src: "https://picsum.photos/200/300"
    },
    {
        id: 2,
        name: "Grilled Cheese Express",
        category: "American",
        time: "5 Min Away",
        location: "0.5 mi away", 
        src: "https://picsum.photos/200/300"
    },
    {
        id: 3,
        name: "Mamas Pizza",
        category: "Italian",
        time: "20 Min Away",
        location: "0.5 mi away", 
        src: "https://picsum.photos/200/300"
    },
];

const FlatListItemSeparator = () => {
    return (
        //Item Separator
        <View style={{ paddingBottom: 35 }} />
    );
};

const CategoryItemSeparator = () => {
    return (
        //Item Separator
        <View style={{ paddingBottom: 0, margin: 0 }} />
    );
};



export default ResultPage = (props) => {
 
  return (
    <ScrollView
    padding={40}
    showsHorizontalScrollIndicator={false}
    >
     <View style={{paddingBottom: 35}}>
     <StyledText size="header"> 
        Results
      </StyledText>
     </View> 
     <View style={{paddingBottom: 49}}>
        <SearchBar />
     </View>
     <View style={{paddingBottom: 39}}>
         <StyledText size="header">
             Categories
         </StyledText>
    </View>
    <View>
    <View>
    <SectionList
        horizontal={true}
        height={100}
        showsHorizontalScrollIndicator={false}
        sections={[
            { data: TopRatedData },
        ]}
        renderItem={({ item }) => (
            <CategoryPill title={item.category}  />   
        )}
        keyExtractor={(item, index) => index}
        />
       
    </View>

        <SectionList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={FlatListItemSeparator}
        sections={[
            { data: TopRatedData },
        ]}
        renderItem={({ item }) => (
            <RestaurantCard {...item} />
        )}
        keyExtractor={(item, index) => index}
        />

    </View>
    </ScrollView>
  );
}
import MenuItem from "./MenuItem";
import React from 'react';
import { View, SectionList} from 'react-native';


export default function MenuList(props) {
    let items = props.items || [];
    const isAdmin = props.isAdmin || false;
    const menu_type = props.type || "all";
    items = filterItem(menu_type);
    
    const FlatListItemSeparator = () => {
        return (
            <View style={{ paddingBottom: 45, paddingRight: 94 }} />
        );
    };

    function filterItem(menu_type) {
        let itemCopy = [...items];
        if (menu_type == "all") {
            return itemCopy;
        } else {
        itemCopy = itemCopy.filter((data, i, array) => {
            return array[i].type == "main" ;
        });
        }

        return itemCopy;
    }

 return(
    <SectionList
    horizontal={false}
    showsHorizontalScrollIndicator={false}
    ItemSeparatorComponent={FlatListItemSeparator}
    sections={[
        { title: '', data: items || [] },
    ]}
    renderItem={({ item }) => (
        <MenuItem {...item}  isAdmin={isAdmin}/>
    )}
    keyExtractor={(item, index) => index}
/>
 );
}
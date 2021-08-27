import MenuItem from "./MenuItem";
import React, {useState, useEffect} from 'react';
import { View, SectionList} from 'react-native';
import CenterView from "../CenterView";
import StyledText from "../StyledText/StyledText";


export default function MenuList(props) {
    const [menuItems, setItems] = useState(items)
    let items = props.items || [];
    const isAdmin = props.isAdmin || false;
    const menu_type = props.type || "all";
    filterItem(menu_type);
    console.log(menuItems);
    
    const FlatListItemSeparator = () => {
        return (
            <View style={{ paddingBottom: 45, paddingRight: 94 }} />
        );
    };

    function filterItem(menu_type) {
        let itemCopy = [...items];
        if (menu_type == "all") {
            setItems(itemCopy);
        } else {
        itemCopy = itemCopy.filter((data, i, array) => {
            return data.type == menu_type ;
        });
        }

        useEffect(() =>  setItems(itemCopy), []);
    }

    const sectionList = (<SectionList
    horizontal={false}
    showsHorizontalScrollIndicator={false}
    ItemSeparatorComponent={FlatListItemSeparator}
    sections={[
        { title: '', data: menuItems || [] },
    ]}
    renderItem={({ item }) => (
        <MenuItem {...item}  isAdmin={isAdmin}/>
    )}
    keyExtractor={(item, index) => index}
/>)

const missingItem = <StyledText size="header">No {menu_type} Available</StyledText>

 return(
    <>
        { menuItems === [] ? missingItem : sectionList }
    </>
 );
}
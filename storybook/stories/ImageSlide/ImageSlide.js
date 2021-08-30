
import React, {useState} from "react";
import {SectionList, View} from "react-native";
import { TouchableOpacity} from "react-native-gesture-handler";
import ImagePill from "../ImagePill/ImagePill";

export default function ImageSlide(props) {
const images = props.images || [];
const [index, setIndex] = useState(0);

const FlatListItemSeparator = () => {
    return (
        //Item Separator
        <View style={{ margin: 9, paddingRight: 22 }} />
    );
};

return(
    <View>
         <View style={{paddingBottom: 38}}>
            <ImagePill width={500} height={200} src={images[index].url} />
         </View>
         <SectionList
            horizontal={true}
            ItemSeparatorComponent={FlatListItemSeparator}
            sections={[
                { title: '', data: images },
            ]}
            renderItem={({ item, index }) => (
                <View style={{padding: 6}}>
                    <TouchableOpacity onPress={ () => setIndex(index)}>
                    <ImagePill width={101} height={97} src={item?.url} />
                    </TouchableOpacity>
                </View>
                )}
                keyExtractor={(item, index) => index}
                pagingEnabled
            />
    </View>
);

}
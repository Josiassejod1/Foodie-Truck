
import React, {useState}  from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import StyledTextInput from '../StyledTextInput/StyledTextInput';
import {Picker} from '@react-native-picker/picker';
import StyledTextArea from './StyledTextArea';
import { useRef } from 'react';
import * as ImagePicker from 'react-native-image-picker';



export default function NewItemFields(props){
    const [itemType, setItemType] = useState();
    const [image, setImage] = useState();
    let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    function uploadFromGallery() {
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
              } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                this.setImage({
                  filePath: response,
                  fileData: response.data,
                  fileUri: response.uri
                });
              }
        });   
    }

    function takePhoto() {
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
              } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                this.setImage({
                  filePath: response,
                  fileData: response.data,
                  fileUri: response.uri
                });
              }
        });        
    }
    const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}
    return(
        <View>
            <StyledTextInput placeholder="Item Name"></StyledTextInput>
            <Picker
                ref={pickerRef}
                selectedValue={itemType}
                onValueChange={(itemValue, itemIndex) =>
                    setItemType(itemValue)
                }>
                <Picker.Item label="Appetizer" value="appetizer" />
                <Picker.Item label="Mains" value="main" />
                <Picker.Item label="Sides" value="sides" />
                <Picker.Item label="Drink" value="drink" />
            </Picker>
            <StyledTextInput placeholder="Item Price" keyboardType="decimal-pad"></StyledTextInput>
            <StyledTextArea placeholder="Description"></StyledTextArea>
            <TouchableOpacity onPress={() => {uploadFromGallery()}}>
              <Text>
                Upload
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {takePhoto()}}>
                <Text>
                 Take Pick
                </Text>
            </TouchableOpacity>
        </View>
    );
};
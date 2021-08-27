import React, { useState} from 'react';
import { View, useWindowDimensions, Text,  ScrollView} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Menu from '../../../data/constants/Menu/';
import MenuItem from '../Menu/MenuItem';
import MenuList from '../Menu/MenuList';


export default function MenuTabView(props) {

    
    const styles = {
        tabbar: {
          backgroundColor: 'white',
          color: 'black',
          shadowOffset: { height: 0, width: 0 },
          shadowColor: "transparent",
          shadowOpacity: 0,
        },
        tab: {
          width: 100,
          alignItems: 'center',
        },
        indicator: {
          backgroundColor: '#0A3364',
          color: '#439CCE',
          height: 5,
        },
        label: {
          color: '#439CCE',
          flex: 1,
          fontSize: 12
        },
      };
    const [index, setIndex] = useState(0);

    const List = (list) => (
      <MenuList {...props} type={list.type}/>
    );
  
    const renderScene = ({ route }) => {
      switch (route.key) {

        case 'appetizers':
          return <List type={route.key}/>;
        case 'main':
          return <List type={route.key}/>;
        case 'sides':
            return <List type={route.key}/>;
        case 'drinks':
            return <List type={route.key}/>;
        default:
          return null;
      }
    };
    
    
    const layout = useWindowDimensions();
    const [routes, setState] = useState([
        { key: 'appetizers', title: Menu[0] },
        { key: 'main', title: Menu[1] },
        { key: 'sides', title: Menu[2] },
        { key: 'drinks', title: Menu[3] },
      ]);

      const renderTabBar = props => (
        <TabBar
          {...props}
            inactiveColor="#000000"
            activeColor="#439CCE"
            style={styles.tabbar}
            tabStyle={styles.tab}
            contentContainerStyle={{width: '75%'}}
            indicatorContainerStyle={{ marginHorizontal: 30, paddingHorizontal: 80 }}
            labelStyle={styles.label}
            indicatorStyle={styles.indicator}
        />
      );
      

    return (
        <View contentContainerStyle={{flexGrow:1}}>
        <View style={{paddingBottom: 50, zIndex: 100, elevation: 3, height: '75%'}}>
        <TabView
            lazy
            scrollEnabled
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            getLabelText={({ route }) => route.title.toLowerCase()}
            initialLayout={{ height: 1000, width: layout.width }}
        />
        </View>
        <View style={{zIndex: 50}}>
           
        </View>
        </View>
    );
}
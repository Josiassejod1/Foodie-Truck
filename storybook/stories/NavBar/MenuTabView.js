import React, { useState} from 'react';
import { View, useWindowDimensions, Text,  ScrollView, VirtualizedList  } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Menu from '../../../data/constants/Menu/';
import ResultPage from '../ResultPage/ResultPage';
import LocationPage from '../LocationView/LocationView'

const FirstRoute = (props) => (
    <View><Text>{Menu[0]}</Text></View>
  );

  const SecondRoute = (props) => (
    <View><Text>{Menu[1]}</Text></View>
  );


const renderScene = SceneMap({
    first:  FirstRoute,
    second: SecondRoute,
  });
  
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
          width: 120,
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
    
    const layout = useWindowDimensions();
    const [routes, setState] = useState([
        { key: 'first', title: Menu[0] },
        { key: 'second', title: Menu[1] },
      ]);

      const renderTabBar = props => (
        <TabBar
          {...props}
            inactiveColor="#000000"
            activeColor="#439CCE"
            style={styles.tabbar}
            tabStyle={styles.tab}
            contentContainerStyle={{width: '50%'}}
            indicatorContainerStyle={{ marginHorizontal: 40, paddingHorizontal: 80 }}
            labelStyle={styles.label}
            indicatorStyle={styles.indicator}
        />
      );
      

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <Text>TESTTTTT</Text>
        <View style={{paddingBottom: 50, zIndex: 100, elevation: 3, height: '25%'}}>
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
        <Text>TESTTTTT 2</Text>
        </ScrollView>
    );
}
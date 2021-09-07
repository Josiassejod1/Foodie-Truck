import * as React from 'react';
import {Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AdminDrawer from '../../../data/constants/AdminDrawer';
import CustomerDrawer from '../../../data/constants/CustomerDrawer';
import CameraSVG from '../../../src/assets/images/nav_icons/camera.svg';
import CutlerySVG from '../../../src/assets/images/nav_icons/cutlery.svg';
import GearSVG from '../../../src/assets/images/nav_icons/gear.svg';
import HeartSVG from '../../../src/assets/images/nav_icons/heart.svg';
import HomeSVG from '../../../src/assets/images/nav_icons/home.svg';
import HornSVG from '../../../src/assets/images/nav_icons/horn.svg';
import InfoSVG from '../../../src/assets/images/nav_icons/info.svg';
import PinSVG from '../../../src/assets/images/nav_icons/pin.svg';
import Header from './Header';
import { HomePage } from '../HomePage/HomePage';



const Drawer = createDrawerNavigator();

export default function App(props) {
    isVendor = props.isVendor || false
    DrawerItems = isVendor ? AdminDrawer : CustomerDrawer
    const MyTheme = {
        colors: {
          primary: 'white',
          text: 'white',
        },
      };
  return (
      <Drawer.Navigator 
        drawerType="back"
        initialRouteName="Home"
        screenOptions={{
            drawerStyle: {
                backgroundColor: '#206FCE',
                width: '75%'
            },
            itemStyle: { marginVertical: 10 },
          }}
      >
       {
        DrawerItems.map(drawer=>
           <Drawer.Screen 
            key={drawer.name}
            name={drawer.name}
            component={HomePage}
            options={{
                drawerIcon:({focused, size})=> {
                if (drawer.svgName === 'home') 
                    <HomeSVG/>
                else if (drawer.svgName ==='pin')
                    <PinSVG/>
                else if(drawer.svgName ==='horn')
                    <HornSVG/>
                else if(drawer.svgName ==='camera')
                    <CameraSVG/>
                else if(drawer.svgName ==='info')
                    <InfoSVG/>
                else if(drawer.svgName ==='cutlery')
                    <CutlerySVG/>
                else if(drawer.svgName ==='gear')
                    <GearSVG/>
                else
                    <HeartSVG/>
                },
                headerShown:true,
                header: ({ scene }) => {
                  return (
                    <Header/>
                  );
                }
            }}
          />)
       }
      </Drawer.Navigator>
  );
}
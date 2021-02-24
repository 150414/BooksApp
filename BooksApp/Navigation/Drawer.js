import React, { Component } from 'react';
import {createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import{
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
  import HomeComponent from '../Screens/Home/Home'
  import {DrawerContent} from '../Navigation/DrawerContent'
  
  const Drawer = createDrawerNavigator();
  const homestack = createStackNavigator();
 
  const homestackscreen = ({navigation,route}) =>(
    <homestack.Navigator screenOptions ={{
      headerStyle:{
        backgroundColor:'#ffffff',
        
    },
    headerTintColor:'#000',
    headerTitleAlign:'center',
    headerTitleStyle:{
    
        alignSelf: 'center',
    },
    }}>
    <homestack.Screen name ="Home" component={HomeComponent} options={{
        title: 'Home',
        headerLeft: () =>(
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
             <Icons style={{ textAlign: 'center',paddingHorizontal:10 }} name="bars" color="black" size={28}></Icons>
          </TouchableOpacity>
          )
        
    }}/>
  
    </homestack.Navigator>
  );
  

  class design extends Component
  {
    render()
    {
        return( 
            <Drawer.Navigator screenOptions={{headerTitleAlign:'center'}}drawerContent={props => <DrawerContent{...props}/>} >
            <Drawer.Screen  name = "Home" component={homestackscreen} />
            </Drawer.Navigator>

            )
    }

}
export default design
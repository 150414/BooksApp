import React, { Component } from 'react';
import {createAppContainer, NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import HomeComponent from '../Screens/Home/Home'
  import LibraryComponent from '../Screens/Library/Library'
  import SearchComponent from '../Screens/Search/Search'
  import DrawerComponent from './Drawer'

  const tabBottom = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const LibraryStack = createStackNavigator();
  const SearchStack = createStackNavigator();

  const Homestackscreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions ={{
      headerStyle:{
        
    },
    headerTintColor:'#fff',
    headerTitleAlign:'center',
    headerTitleStyle:{
    
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    }}>
    <HomeStack.Screen name ="Home" component={HomeComponent} options={{
        title: 'Home',
        
    }}/>
  
    </HomeStack.Navigator>
  );
  const Librarystackscreen = ({navigation}) =>(
    <LibraryStack.Navigator screenOptions ={{
      headerStyle:{
        backgroundColor:'#ffffff',
        
    },
 
    headerTitleAlign:'center',
    headerTitleStyle:{
    
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    }}>
    <LibraryStack.Screen name ="Library" component={LibraryComponent} options={{
        title: 'Library',
        
    }}/>
  
    </LibraryStack.Navigator>
  );
  const Searchstackscreen = ({navigation}) =>(
    <SearchStack.Navigator screenOptions ={{
      headerStyle:{
        backgroundColor:'#ffffff',
        
    },

    headerTitleAlign:'center',
    headerTitleStyle:{
    
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    }}>
    <SearchStack.Screen name ="Library" component={SearchComponent} options={{
        title: 'Search Books',
        
    }}/>
  
    </SearchStack.Navigator>
    
  );

  
  class design extends Component
    {

        constructor(props)
        {
            super(props);
            this.state={
            }
            
        }
        render()
        {
        
          return(  

            <tabBottom.Navigator  initialRouteName='Home'

            screenOptions={({ route }) => ({
             tabBarIcon: ({ focused, color, size }) => {
               let iconName;
       
               if (route.name === 'Home') {
                 iconName = focused
                   ? 'home-outline'
                   : 'home-outline';
               } else if (route.name === 'Library') {
                 iconName = focused ? 'library-outline' : 'library-outline';
               }
               else if (route.name === 'Search') {
                 iconName = focused ? 'search-outline' : 'search-outline';
               }
       
               // You can return any component that you like here!
               return <Ionicons name={iconName} size={size} color={color} />;
             },
           })}
           tabBarOptions={{
             activeTintColor: '#2ca69c',
             inactiveTintColor: 'gray',
           }}
            >
       
            <tabBottom.Screen name = "Home" component={DrawerComponent}/>
            <tabBottom.Screen name = "Library" component={Librarystackscreen}/>
            <tabBottom.Screen options={{headerShown: false,headerTitleAlign:'center',headerStyle: {backgroundColor: '#f7f7f7', },}} name = "Search" component={SearchComponent}/>
       
            </tabBottom.Navigator>
          )
        }

    }
export default design
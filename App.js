/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import BooksComponent from './BooksApp/Screens/Books/Books'
import api from 'books-mock-api';
import {createAppContainer, NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginComponent from './BooksApp/Screens/Accounts/Login'
import RegisterComponent from './BooksApp/Screens/Accounts/Signup'
import HomeComponent from './BooksApp/Screens/Home/Home'
import BottomTabComponent from './BooksApp/Navigation/BottomTabNav'
import LibraryComponent from './BooksApp/Screens/Library/Library'
import SearchComponent from './BooksApp/Screens/Search/Search'
import {Provider} from 'react-redux'
import configstore from './BooksApp/Store/Store'
import BooksDetailComponent from './BooksApp/Screens/BooksDetail/BooksDetail'
const store = configstore
const stack = createStackNavigator();





const App: () => React$Node = () => {
 
  return (
    
    <NavigationContainer>
      <Provider store={store}>

<stack.Navigator>
                <stack.Screen options={{headerTitleAlign:'center',headerStyle: {backgroundColor: '#f7f7f7', },}} name ="Login" component={LoginComponent}/>
                <stack.Screen options={{headerTitleAlign:'center',headerStyle: {backgroundColor: '#f7f7f7', },}} name ="Register" component={RegisterComponent}/>
                <stack.Screen options={{headerShown: false,headerTitleAlign:'center',headerStyle: {backgroundColor: '#f7f7f7', },}} name ="Home" component={BottomTabComponent}/>
                <stack.Screen options={{headerTitleAlign:'center',headerStyle: {backgroundColor: '#f7f7f7', },}} name ="Library" component={LibraryComponent}/>
                <stack.Screen options={{headerTitleAlign:'center',headerStyle: {backgroundColor: '#f7f7f7', },}} name ="Search" component={SearchComponent}/>
                <stack.Screen options={{headerTitleAlign:'center',headerStyle: {backgroundColor: '#f7f7f7', },}} name ="Books" component={BooksComponent}/>
                <stack.Screen options={{headerTitleAlign:'center',headerStyle: {backgroundColor: '#f7f7f7', },}} name ="BooksDetail" component={BooksDetailComponent}/>
          
                
                </stack.Navigator>
                </Provider>
                </NavigationContainer>
  );
};



export default App;

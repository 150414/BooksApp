import React, { Component,useState, useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Image,
  TouchableRipple,
  TouchableOpacity,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';

export function DrawerContent(props) {

   const[Finaltoken,setFinaltoken] = React.useState('');
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

 
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }


  useEffect(()=>{

  //GetToken()

});
//    function GetToken()
// {
// (async () => {
//   const tokenn = await getValue('aToken');
//         console.log("yaa a token drawer ma")
//         console.log(tokenn)
//         setFinaltoken(tokenn)

// })();
// }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 20,alignSelf:'center'}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                }}
                size={80}
              />
             
            </View>

            
          </View>
          <View style={{marginLeft: 15,alignSelf:'center'}}>
                <Title style={styles.title}>Kashif Aslam</Title>
                <Caption style={styles.caption}>00047@gmail.com</Caption>
               
              </View>
          <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
              icon={(color, size) => (
                <Ionicons name="home" color="black" size={26} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />     
           
            <DrawerItem
              icon={(color, size) => (
                <Ionicons name="library-outline" color="black" size={26} />
              )}
              onPress={() => {
                props.navigation.navigate('Library');
                }}
              label="Library"
             
              
            />
            <DrawerItem
              icon={(color, size) => (
                <Ionicons name="search-outline" color="black" size={26} />
              )}
              onPress={() => {
              props.navigation.navigate('Search');
              }}
              label="Search"
              
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon name="cog-outline" color="black" size={26} />
              )}
              label="Settings"
              
            />
            <DrawerItem
              icon={(color, size) => (
                <Ionicons name="help-circle" color="black" size={26} />
              )}
              label="Help & FAQ"
              
            />
            <DrawerItem
              icon={(color, size) => (
                <Icon name="exit-to-app" color="black" size={26} />
              )}
              onPress={() => {
                console.log("delete honay laga yaa")
                console.log(Finaltoken)
               
              // clearValues()
             //  props.navigation.navigate('Login')
              }}
              label="Logout"
              
            />
            
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 20,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});


import React, { Component } from 'react';


import{
    StyleSheet,
    View,
    Button,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
  Text,
} from 'native-base'
const{width} = Dimensions.get("window")
const height = width * 0.8;

  const styles=StyleSheet.create({   
    container: {
      width,
      height,
    },
    ScrollViewStyle:
    {
        height,
        width,
    },
    containerr: {
        flexDirection:"row",
        paddingLeft:20,

      },
    imageStyle:
    {
        width,
        height,
        resizeMode:'cover'
    },
    APIimageStyle:
    {
        resizeMode: 'cover',
        borderRadius:50,
           width:100,
          height: 70

    },
    // APIFootballimageStyle:
    // {
    //     resizeMode: 'contain',
    //        width:100,
    //       height: 90,

    // },
    APIFootballimageStyle:
    {
        resizeMode: 'cover',
          width:150,
          height: 300,
          margin:5,
          borderRadius:10,
          
         


    },
    pagination:
    {
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        alignSelf:'center'
    },
    PaginationText:
    {
        color:'#888',
        margin:4,
        fontSize:(width/30),
    },
    paginationActiveText:
    {
     color:'white',
     margin:3,
     fontSize:(width/30),
    },
    card:
    {
        backgroundColor:'#fff',
        elevation:10,
        borderRadius:8,
        width,
        marginTop:4,
        shadowColor:'#333333',
        shadowRadius:5,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardFeaturedCategories:
    {
      backgroundColor:'#fff',
      elevation:10,
      borderRadius:10,
      width:100,
      margin:10,
      marginTop:4,
      shadowColor:'#333333',
      shadowRadius:5,
      shadowOffset:{
          width:1,
          height:1,
      }
      },
    cardFeatured:
    {
      backgroundColor:'#fff',
      elevation:10,
      borderRadius:10,
      width,
      marginTop:4,
      shadowColor:'#333333',
      shadowRadius:5,
      shadowOffset:{
          width:1,
          height:1,
      }
    },
    cardFootball:
    {
     
      backgroundColor:'#98AFC7',
      elevation:5,
      borderRadius:5,
      width:'95%',
      height:320,
      margin:10,
      alignSelf:'center',
      marginTop:4,
      shadowColor:'#333333',
      shadowRadius:5,
    
     
     
      
    },
    ShowAllText:{
        color:'#2ca69c',
        fontSize:18,
        fontWeight:'bold',
        padding:5,
        marginLeft:'62%'
        
      },
    CatagoreiesView:
    {
        flex:1,
        maxWidth: Dimensions.get('window').width/3-5, // Width / 3 - (marginLeft and marginRight for the components)
        alignItems:'center', 
        
        margin:10,
    },
    CatagoreiesViewBooksList:
    {
        flex:1,
        maxWidth: Dimensions.get('window').width/3-5, // Width / 3 - (marginLeft and marginRight for the components)
        alignItems:'center', 
        margin:10,
    }

   
      
    });
    export default styles;
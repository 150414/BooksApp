import React, { Component } from 'react';


import{
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar,
    Image,
    TouchableOpacity,
  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const styles=StyleSheet.create({   
    container: {
     
      flexDirection:"row",
      paddingLeft:20,
      padding:5,
    },
    container1: {
     
        justifyContent: 'space-around',
      
        
        
      },
    buttonte:{
        color:'black',
        fontWeight:'bold',
        fontSize:25,
        marginTop:10,
        marginRight:150,
      },
      butt:{
        color:'red',
        fontSize:18,
        marginLeft:10,
        marginTop:10,
        
      },
      place:{
      width:400,
      height:100,


      },
      SubmitButton:{
        borderRadius: 7,
        paddingVertical: 16,
        marginTop:40,
        width:320,
        backgroundColor:'#85929E', 
    }, 
    Buton3:{
        borderRadius: 8,
        paddingVertical: 15,
        borderWidth:0.5,
        marginTop:20 ,
        width:320,
        backgroundColor:'#fff', 
    },
      SubmitTxt:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center',
        fontSize:16,
      },
      buttonte2:{
        color:'black',
        
        textAlign:'center',
        fontSize:16,
      },
      MainView:
      {
        marginTop:10,
        padding:5,
       paddingLeft:20
      },
      Nameplaceholder:
      {
        height:50,
        width:320,
        borderBottomWidth:1,
        borderBottomColor:'#34495E',
        fontSize:15
      },
      EmailTxt:
      {
        fontSize:18,marginTop:20,
        color:'#34495E'
        
      },
      EmailPlaceholder:
      {
        height:50,
        width:320,
        borderBottomWidth:1,
        fontSize:15
      },
      PaswordPlaceholder:
      {
        height:50,
        width:320,
        fontSize:15,
        borderBottomWidth:1,
        borderBottomColor:'#34495E',
      }
    });
    export default styles
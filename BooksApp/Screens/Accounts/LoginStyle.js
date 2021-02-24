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


  const styles=StyleSheet.create({   
    container: {
      flexDirection:"row",
      paddingLeft:20,
      padding:5,
    },
   
    WelcomeTxt:{
        color:'black',
        fontWeight:'bold',
        fontSize:25,
        marginTop:10,
        marginRight:150,
      },
      SignIntxt:{
        fontSize:18,
        marginLeft:10,
        marginTop:10,
        
      },
      
      SignInButton:{
        borderRadius: 7,
        paddingVertical: 14,
        marginTop:20 ,
        width:320,
        backgroundColor:'#85929E', 
    }, 
    SignInButtonWithGoogle:{
        borderRadius: 7,
        paddingVertical: 14,
        marginTop:15 ,
        width:320,
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:'white', 
    }, 
    
      SignInbuttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center',
        paddingHorizontal:10,
        fontSize:16,
      },
      SignInbuttonTextGoogle:{
        color:'black',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center',
        paddingHorizontal:10,
        fontSize:16,
      },
     
      EmailStyle:
      {
        marginTop:20,
        padding:5,
        paddingLeft:20
      },
      NamePlaceholder:
      {
        height:50,
        width:320,
        borderBottomWidth:2,
        borderBottomColor:'#34495E',
        fontSize:15
      },
      passwordPlaceholder:
      {
        height:50,
        width:320,
        borderBottomWidth:2,
        borderBottomColor:'#34495E',
        fontSize:15,
      },
      ForgetPassword:
      {
        fontSize:15,
        marginTop:20,
        marginLeft:190,
        fontWeight:'bold'
      },
      passwordText:
      {
        fontSize:18,
        marginTop:20
      },
      RegisteredNow:{
        fontSize:15,
        marginTop:10,
        marginLeft:190,
        fontWeight:'bold',
        opacity:50,
      },
      spinnerTextStyle: {
        color: '#FFF'
      },
      
      
    });
    
    export default styles;
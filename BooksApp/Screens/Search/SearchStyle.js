import React, { Component } from 'react';


import{
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const{width} = Dimensions.get("window")
const height = width * 0.8;

  const styles=StyleSheet.create({   
    container: {
      flexDirection:'row',
    },
    ViewOFSearch:
    {
      borderWidth:2,
      borderColor:'#D3D3D3',
      width:'100%',
       height:60,
      flexDirection:'row',
    },
    SearchInputText:
    {
      fontSize:15,
      textAlign:'center',
      borderRadius:10,
      height:40,
      backgroundColor:'#D3D3D3',
      marginRight:10
    },
    NameOfCategories:
    {
      fontWeight:'bold',
      fontSize:20,
      textAlign:'center'
    },
    CloseModelView:
    {
      width:60,
      height:10,
      borderWidth:1,
      backgroundColor:'#D3D3D3',
      borderRadius:5,
      marginTop:5
    },
    ScrollViewStyle:
    {
        height,
        width,
    },
    container2: {
        flexDirection:"row",
        borderRightWidth:3,
        borderRightColor:'lightgrey',
      },
    imageStyle:
    {
        width,
        height,
        resizeMode:'cover'
    },
    APICategories:
    {
        resizeMode: 'contain',
           width:175,
          height: 150,
          marginTop:5

    },
    APIimageStyle:
    {
        resizeMode: 'contain',
            width:120,
            height:80,
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
    cardDOubleFlatList:
    {
      backgroundColor:'#fff',
      elevation:5,
      borderRadius:5,
      width:160,
      height:180,
      margin:10,
      marginTop:4,
      shadowColor:'#333333',
      shadowRadius:5,
      shadowOffset:{
          width:1,
          height:1,
      },
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
        borderRadius:5,
        width,
        height,
        marginTop:2,
        justifyContent:'center',
        shadowColor:'#333333',
        shadowRadius:5,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    text:{
      margin:10,
      fontSize:16,
      fontWeight:'bold',
      color:'black',
      
  },
    bottonsView:{
      width:'100%',
      height:'10%',
      alignItems:'center',
  },
    ShowAllText:{
        color:'#2ca69c',
        fontSize:15,
        marginTop:10,
        marginLeft:'60%'
        
      },
    CatagoreiesView:
    {
        flex:1,
        maxWidth: Dimensions.get('window').width / 3 - 10, // Width / 3 - (marginLeft and marginRight for the components)
        alignItems:'center', 
        margin:10
    },
    verticleLine: {
        height: '100%',
        width: 3,
        backgroundColor: '#909090',
      },
      cardFeatured:
    {
      backgroundColor:'#fff',
      elevation:5,
      borderRadius:5,
      width:'90%',
      marginTop:15,
      shadowColor:'#333333',
      shadowRadius:5,
      alignSelf:'center',
    },
      cardFeaturedCategories:
      {
        
        
        borderRadius:20,
        width:150,
        height:170,
        margin:3,
        marginTop:4,
       
        },
        cardFeaturedCategoriesForSearch:
      {
        backgroundColor:'#fff',
        elevation:10,
        borderRadius:10,
        width:'95%',
        height:170,
        margin:10,
        marginTop:4,
        shadowColor:'#333333',
        shadowRadius:5,
        shadowOffset:{
            width:1,
            height:1,
        }
        },
containerForModal:
{
  flex:1,
  alignItems:'center',
  marginBottom:50,
  borderColor:'black',
  justifyContent:'center',
},
modal:{
  height:'100%',
  width:'100%',
  borderColor:'black',
  backgroundColor:'#fff',
  borderRadius:10,
},
ModalOrderBy:
{
  height:'50%',
  width:'100%',
  borderColor:'black',
  backgroundColor:'#fff',
  borderRadius:15,
  flexDirection:'row-reverse',
  marginTop:350,
  elevation:10,
  shadowColor:'#333333',
  shadowRadius:5,
},

      
    APIimageStyle:
    {
        resizeMode: 'contain',
           width:200,
          height: 100

    },
    APIFootballimageStyle:
    {
      resizeMode: 'cover',
      width:140,
     height: 160,
     margin:5,

    },
    APIFootballimageForSearched:
    {
      resizeMode: 'cover',
      width:180,
     height: 160,
     margin:5,

    },

    APIFootballimage:
    {
      resizeMode: 'cover',
      width:100,
     height: 118,
     alignSelf:'center',
     marginTop:2,

    },
    APIImageStyle:
    {
      resizeMode: 'contain',
      width:100,
      alignItems:'center',
      alignSelf:'center',
      height: 100,
      borderWidth:10,
      borderColor:'#fff',
      margin:5,


    },
    SignInButton:{
      borderRadius: 7,
      paddingVertical: 12,
      marginTop:15 ,
     width:250,
     alignSelf:'center',
      backgroundColor:'#2CA69C', 
  }, 
  
    SignInbuttonText:{
      color:'white',
      fontWeight:'bold',
      textTransform:'uppercase',
      textAlign:'center',
      fontSize:16,
    },
    APIFootballimageStyleSearch:
    {
        resizeMode: 'cover',
          width:150,
          height: 240,
          margin:5,
          borderRadius:10,
          
         


    },

   
      
    });
    export default styles;
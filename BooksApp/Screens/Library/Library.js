import React, { Component } from 'react';
import { createAppContainer, NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  View,
  Button,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

import {connect} from 'react-redux'
import {GetApiData,GetBooksDetail,GetBooksList} from '../../Redux/Action'
import {Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import styles from './LibraryStyle'
import DropDownItem from "react-native-drop-down-item";
class design extends Component {


    



    
    render() {

      const {data,Books,GetBooksDetails}= this.props

      return (
  
  
       <View>
          <View>
          <ImageBackground
            
            source={require('../../Images/li.jpg')}
            style={{height:'100%'}}
            blurRadius={2}
            
            > 
              <FlatList  
              data={data}
              style={{borderWidth:0.2,borderColor:'black',marginTop:5}}
              
              numColumns={1}
              renderItem={({ item, index }) => (
                <View style={styles.cardFootball}>
                  <View style={{flexDirection:'row'}}>
                  <TouchableOpacity 
                   onPress={() => { this.props.GetBooksDetails(item.list_name),this.props.navigation.navigate('Books')
                   
                 }}
                  >
                   
                     <Image
                      source={item.image_url ? { uri: item.image_url } : require('../../Images/lib.jpg')}
                      style={styles.APIFootballimageStyle}
                    />
                  
                   
  
                  </TouchableOpacity>
                  <View style={{flexDirection:'column',marginLeft:20}}>
                        <Text style={{fontWeight:'bold',color:'black'}}>Title:</Text>
                    <Text numberOfLines={2}  style={{justifyContent:'center',width:120,color:'black'}}>{item.list_name}</Text>
                    </View>
                    
                    
                
                  </View>
                </View>
              )
              }
              keyExtractor={(item, index) => index.toString()}
            />

      </ImageBackground>
          </View>
       </View>
      )
    }
  }
  const mapStateToProps=(state)=>({

    
    data:state.categories.data,
    BookDetails:state.categories.BookDetails,
   // Books:state.categories.BestBooks





})

const mapDispatchToProps=(dispatch)=>({

 // GetApiDEcendatdata:(parent_id)=>dispatch(GetApiDEcendatdata(parent_id))
 GetBooksDetails:(name)=>dispatch(GetBooksDetail(name))
})




export default connect(mapStateToProps,mapDispatchToProps)(design);
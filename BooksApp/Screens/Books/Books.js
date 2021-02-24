import React, { Component } from 'react';
import {createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import{
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar,
    Image,
    FlatList,
    TouchableOpacity,
    ImageBackground,
  } from 'react-native';
  import styles from './BooksStyle'
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Icons from 'react-native-vector-icons/FontAwesome';
  
  class design extends Component
  {
    render()
    { 

        const {data,BookDetails,Books}= this.props
     
        return( 
           <View>
               
              <View>
              <ImageBackground
            
            source={require('../../Images/li.jpg')}
            style={{height:'100%'}}
            
            >
              <FlatList  
              data={BookDetails}
              style={{borderWidth:0.2,borderColor:'black',marginTop:5}}
              numColumns={2}
              renderItem={({ item, index }) => (
                <View style={styles.cardFootball}>
                  <TouchableOpacity 
                    onPress={() => {
                    this.props.navigation.navigate('BooksDetail',
                    
                    {item}
                    )
                  
                     }}
                
                  >
                     <Image
                      source={item.book_image ? { uri: item.book_image } : require('../../Images/Library.jpg')}
                      style={styles.APIFootballimageStyle}
                    />
  
  
                  </TouchableOpacity>
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
    BookDetails:state.categories.BookDetail,
    Books:state.categories.BestBooks





})

const mapDispatchToProps=(dispatch)=>({

 // GetApiDEcendatdata:(parent_id)=>dispatch(GetApiDEcendatdata(parent_id))

})




export default connect(mapStateToProps,mapDispatchToProps)(design);
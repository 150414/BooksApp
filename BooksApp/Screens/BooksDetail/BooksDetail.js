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
    Linking,
    ToastAndroid,
  } from 'react-native';
  import styles from './BooksDetailStyle'
  import { Rating, AirbnbRating } from 'react-native-ratings';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Icons from 'react-native-vector-icons/FontAwesome';
  
  class design extends Component
  {
    constructor(props) {
        super(props);
        this.state = {
            disable:false,
            newdata:'',
        }
    
      }



      OnpressForTouchable()
      {
          if(this.state.newdata.amazon_product_url!=undefined)
          {
            Linking.openURL(this.state.newdata.amazon_product_url)
          }
          else
          {
            ToastAndroid.show("Sorry this book is not available",ToastAndroid.SHORT);
          }
      }
    render()
    { 
        const {item} = this.props.route.params;
        this.state.newdata = item;
      
        const {data,BookDetails,Books}= this.props
        return( 
           <View>
              <View> 
               
                <View style={styles.cardFootball}>
                <ImageBackground
            
            source={require('../../Images/li.jpg')}
            style={{height:'100%'}}
            blurRadius={2}
            
            > 
                 <View style={{flexDirection:'row'}}>

                  <View>
                     <Image
                      source={item.book_image ? { uri: item.book_image } : require('../../Images/BooksList.jpg')}
                      style={styles.APIFootballimageStyle}
                    />
                    </View>
                    <View style={{alignSelf:'center'}}>
                        <View style={{marginRight:100}}>
                    <Rating
  type='star'
  imageSize={23}
  ratingCount={5}
  fractions={1}
  onFinishRating={this.ratingCompleted}
  tintColor='#E6E6E6'
  showRating
/>
</View>
                    <View style={{flexDirection:'column'}}>
                    <Text style={{fontWeight:'bold',color:'white',marginLeft:20}}>Author:</Text>
                    <Text numberOfLines={2}  style={{marginLeft:20,justifyContent:'center',width:150 ,color:'white' }}>{item.author}</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontWeight:'bold',color:'white',marginLeft:20}}>Description:</Text>
                    <Text numberOfLines={6}  style={{marginLeft:20,justifyContent:'center',width:150,color:'white'}}>{item.description}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'bold',color:'white',marginLeft:20}}>Price:</Text>
                    <Text numberOfLines={2}  style={{marginLeft:20,justifyContent:'center',width:150,alignSelf:'center',color:'white',marginLeft:30}}>{item.price}</Text>
                    </View>
                          

                        

                            <TouchableOpacity style={{marginLeft:6,borderWidth:0.8, borderRadius:10,borderColor:'#2CA69C',color:'white',height:35,width:150,justifyContent:'center',backgroundColor:'#FBEEE6',marginTop:15}} onPress={() => {
                            this.OnpressForTouchable()}}>
                            
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1}}>
                            <Ionicons  style={{alignSelf:'center'}}  name="cart" color="black" size={22} />
                            </View>
                            <View style={{flex:3,alignSelf:'center'}}>
                            <Text style={{justifyContent:'center',marginTop:2}}>Buy Now</Text>
                            </View>
                            </View>
                            </TouchableOpacity>
               
                    
                    </View>
                    
                    
                 </View>
                 
  
               
              
            
                 </ImageBackground>

          </View>
         
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
import React, { Component } from 'react';
import { createAppContainer, NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './SearchStyle'
import {connect} from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import {GetApiData,GetBooksDetail,
  GetBooksList,
  GetSearchBooks,



} from '../../Redux/Action'
import { delay } from 'redux-saga/effects';
class design extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Query: '',
      Searching:'',
      SearchingValue:false,
      Newdata:'',
    }

  }
  Toast()
  {
      ToastAndroid.show("fail to search",ToastAndroid.LONG);
   
}
    
ValidataionOnFailureSearch()
{
  if(this.state.Searching!=undefined)
  {
    this.setState({
      Newdata:this.state.Searching
    })
  }
  else{
   
    this.Toast
  
  }
}


    
    render() {
      const {data,Books,GetBooksDetails,BookDetails,GetSearchBook,Search}= this.props
      this.state.Searching= Search;
      return (
  
  
       <View>
           <View style={styles.ViewOFSearch}>
          <View style={{ justifyContent: 'center', flex: 0.4, marginLeft: 10 }}>

            <Ionicons onPress={this._onpress} name="arrow-back-outline" color="black" size={28} />
          </View>
          
              <View style={{ flex: 3.5, justifyContent: 'center' }}>
                <TextInput style={styles.SearchInputText}
                  placeholder={"search"}
                  onChangeText={(Query) => this.setState({ Query })}
                ></TextInput>

              </View>
              <View style={{ justifyContent: 'center', flex: 0.5, marginLeft: 5 }}>
            <TouchableOpacity >
              <Ionicons name="search-outline" color="black" size={28} onPress={() => { this.props.GetSearchBook(this.state.Query),this.ValidataionOnFailureSearch()}} />

            </TouchableOpacity>
          </View>
       </View>
       <Text style={{fontWeight:'bold',marginLeft:10}}>Most Trending Books</Text>
  <View>
       <FlatList  
              data={BookDetails}
              style={{borderWidth:0.2,borderColor:'black',marginTop:5}}
             
              horizontal={true}
              renderItem={({ item, index }) => (
                <View style={styles.cardFeaturedCategories}>
                  <ImageBackground 
                  
                  source={item.book_image ? { uri: item.book_image } : require('../../Images/lib.jpg')}
                  style={styles.APIFootballimageStyle}
                  blurRadius={20}
                  
                  >

                 
                  <TouchableOpacity 
                   onPress={() => { this.props.GetBooksDetails(item.list_name),this.props.navigation.navigate('Books')
                   
                 }}
                  >
                     <Image
                      source={item.book_image ? { uri: item.book_image } : require('../../Images/lib.jpg')}
                      style={styles.APIFootballimage}
                    />
                       <Text numberOfLines={1} style={{textAlign:'center'}}>{item.title}</Text>
                    <Text numberOfLines={1} style={{textAlign:'center'}}>by: {item.author}</Text>
  
  
                  </TouchableOpacity>
                  </ImageBackground>
                </View>
              )
              }
              keyExtractor={(item, index) => index.toString()}
            />
</View>

                    <View>    
                    <Text style={{fontWeight:'bold',marginLeft:10,color:'black'}}>Searched Books</Text>       
                    <FlatList  
     

              data={Search}
              style={{borderWidth:0.2,borderColor:'black',marginTop:5}}
             
             
              renderItem={({ item, index }) => (
                <View style={styles.cardFeaturedCategoriesForSearch}>
                  <View style={{flexDirection:'row'}}>
                   <View>
                  <ImageBackground 
                  
                  source={item.book_image ? { uri: item.book_image } : require('../../Images/lib.jpg')}
                  style={styles.APIFootballimageForSearched}
                  blurRadius={20}
                  
                  >
                  <TouchableOpacity 
                   onPress={() => {this.props.navigation.navigate('BooksDetail',
                   {
                     item
                   })
                   
                 }}
                  >
                     <Image
                      source={item.book_image ? { uri: item.book_image } : require('../../Images/lib.jpg')}
                      style={styles.APICategories}
                    />
                    
                   
                   
  
  
                  </TouchableOpacity>
                  </ImageBackground>
                  </View>
                  
                    <View style={{alignSelf:'center',marginLeft:10}}>
                  <View style={{flexDirection:'column'}}>
                    <Text style={{fontWeight:'bold',color:'black'}}>Title:</Text>
                    <Text numberOfLines={2}  style={{tjustifyContent:'center',width:120 ,color:'black' }}>{item.title}</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontWeight:'bold',color:'black'}}>Author:</Text>
                    <Text numberOfLines={6}  style={{justifyContent:'center',width:120,color:'black'}}>{item.author}</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontWeight:'bold',color:'black'}}>Publisher:</Text>
                    <Text numberOfLines={6}  style={{justifyContent:'center',width:120,color:'black'}}>{item.publisher}</Text>
                    </View>
                    </View>
                 
                </View>
                </View>
              )
              }
              keyExtractor={(item, index) => index.toString()}
            />
                      </View>


       </View>
      )
    }
  }
  const mapStateToProps=(state)=>({

    
    data:state.categories.data,
    BookDetails:state.categories.BookDetail,
    Books:state.categories.BestBooks,
    Search:state.categories.Search,





})

const mapDispatchToProps=(dispatch)=>({

 // GetApiDEcendatdata:(parent_id)=>dispatch(GetApiDEcendatdata(parent_id))
 GetSearchBook:(name)=>dispatch(GetSearchBooks(name)),
 GetBooksDetails:(name)=>dispatch(GetBooksDetail(name))
})




export default connect(mapStateToProps,mapDispatchToProps)(design);
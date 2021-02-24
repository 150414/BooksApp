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
import {Text} from 'react-native'
import {connect} from 'react-redux'
import {GetApiData,GetBooksDetail,GetBooksList} from '../../Redux/Action'
import { TextInput } from 'react-native-gesture-handler';
const Data = [
    { image: 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg' },
    { image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80' },
    { image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/old-books-arranged-on-shelf-royalty-free-image-1572384534.jpg' },
    { image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/8-Books-To-Read-for-a-PRINCE2.jpg' },
    { image: 'https://img.ti-media.net/wp/uploads/sites/46/2015/05/book-lovers-day-2.jpg' },
  ]

  const CardImages = {
    firstImage: require('../../Images/BooksList.jpg'),
    secondImage: require('../../Images/li.jpg'),
    thirdImage: require('../../Images/lll.jpg'),
  };
  

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import styles from '../Home/HomeStyle'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
class design extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            isstate:false,
            isLoading: false,
        }
    
      }
      componentDidMount()
      {
        const {
          GetApiDataa,
          GetBestBooks,
        }=this.props
        GetApiDataa()
        GetBestBooks()
        // GetBooksDetail('Animals')
      }
      
      
      change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
          this.setState({ active: slide });
        }
      }

      
    render() {
      const {data,Books,GetBooksDetails,BookDetails}= this.props
      return (
  
  
       <View>
         <ScrollView>
         <View style={styles.container}>
            <ScrollView pagingEnabled
              horizontal
              onScroll={this.change}
              showsHorizontalScrollIndicator={false}
              style={styles.ScrollViewStyle}>
              {
                Data.map((item) =>

                  <Image
                    source={{ uri: item.image }}
                    style={styles.imageStyle}
                  />

                )
              }

            </ScrollView>
            <View style={styles.pagination}>
              {
                Data.map((i, k) => (
                  <Text key={k} style={k == this.state.active ? styles.paginationActiveText : styles.PaginationText}>⬤</Text>
                ))
              }



            </View>
          </View>
          <View>
              <Text style={{fontWeight:'bold',marginHorizontal:5,fontSize:18}}>Categories List</Text>
              <ImageBackground
            
            source={require('../../Images/Librar.jpg')}
            style={{height:150}}
            blurRadius={2}
            
            >
              <FlatList  
              data={data}
              style={{borderWidth:0.2,borderColor:'black',marginTop:5}}
              horizontal={true}

              renderItem={({ item, index }) => (
                <View style={styles.cardFeaturedCategories}>
                  <TouchableOpacity 
                    onPress={() => {
                    this.props.GetBooksDetails(item.list_name),this.props.navigation.navigate('Books')
                     }}
                
                  >
                     <Image
                      source={item.image_url ? { uri: item.image_url } : require('../../Images/liii.webp')}
                      style={styles.APICategories}
                    />
                    <Text numberOfLines={2} style={{textAlign:'center'}}>{item.list_name}</Text>
  
  
                  </TouchableOpacity>
                </View>
              )
              }
              keyExtractor={(item, index) => index.toString()}
            />

    </ImageBackground>
          </View>
          <View style={{backgroundColor:'silver'}}>
           
              <Text style={{fontWeight:'bold',marginHorizontal:5,fontSize:18}}>Books List</Text>
             
              <FlatList  
              data={Books}
              renderItem={({ item, index }) => (
                <View style={styles.cardFootball}>
                  <ImageBackground
            
            source={require('../../Images/Librar.jpg')}
            style={{height:160}}
            blurRadius={20} 
            >           
             <TouchableOpacity 
                   onPress={() => {
                    this.props.navigation.navigate('BooksDetail',
                    {item}
                    )
                 }}
                  >
                    <View style={{flexDirection:'row'}}>
                      <View>
                     <Image
                      source={item.image_url ? { uri: item.image_url } : require('../../Images/BooksList.jpg')}
                      style={styles.APIFootballimageStyle}
                    />
                    </View>
                    <View style={{alignSelf:'center'}}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontWeight:'bold',color:'white'}}>Title:</Text>
                    <Text numberOfLines={2}  style={{justifyContent:'center',width:150,color:'white'}}>{item.title}</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontWeight:'bold',color:'white'}}>Publisher:</Text>
                    <Text numberOfLines={2}  style={{justifyContent:'center',width:150,color:'white'}}>{item.publisher}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontWeight:'bold',color:'white'}}>Price:</Text>
                    <Text numberOfLines={2}  style={{tjustifyContent:'center',width:150,alignSelf:'center',color:'white'}}>{item.price}</Text>
                    </View>
                    </View>
                    </View>
                  </TouchableOpacity>
                  </ImageBackground>
                </View>
                
                 
              )
              }
              keyExtractor={(item, index) => index.toString()}
            />
    

          </View>
      
          </ScrollView>
          <Loader
          loading={this.state.isLoading} />
       </View>
      )
    }
  }

  const mapStateToProps=(state)=>({

    
    data:state.categories.data,
    BookDetails:state.categories.BookDetails,
    Books:state.categories.BestBooks





})

const mapDispatchToProps=(dispatch)=>({

 // GetApiDEcendatdata:(parent_id)=>dispatch(GetApiDEcendatdata(parent_id))
 GetApiDataa:()=>dispatch(GetApiData()),
 GetBestBooks:()=>dispatch(GetBooksList()),
 GetBooksDetails:(name)=>dispatch(GetBooksDetail(name))

})




export default connect(mapStateToProps,mapDispatchToProps)(design);
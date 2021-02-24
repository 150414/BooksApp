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
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../Accounts/LoginStyle'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
class design extends Component {

    constructor(props) {
      super(props);
      this.state = {

        email:'',
        password:'',
      }
    }

     UserLogin=()=>
     {
        if(this.state.email=='kashifaslam00047@gmail.com' && this.state.password=='kashif222')
        {
         
           this.props.navigation.navigate('Home')
        }
        else
        {
            alert("user name and password is incorrect")
        }
     }

     OnpressToRegister=()=>
     
    {
        this.props.navigation.navigate('Register')
    }




    
    render() {
      return (
  
  
       <View>
           <View style={styles.container}>

<Text style={styles.WelcomeTxt}>
  Welcome
       </Text>
<View>
  <Text style={styles.SignIntxt}>
    signIn
       </Text>
</View>
</View>
<View style={styles.container}>
</View>
<View style={styles.EmailStyle}>
<Text style={{ fontSize: 18 }}>Email</Text>

<View style={styles.place}>

  <TextInput placeholder={"Enter the Email"}
    onChangeText={(email) => this.setState({ email })}
    style={styles.NamePlaceholder}></TextInput>
  <Text style={styles.passwordText}>Password</Text>

  <TextInput placeholder={"Enter the Password"}
    secureTextEntry={true}
    onChangeText={(password) => this.setState({ password })}
    style={styles.passwordPlaceholder}></TextInput>
  <Text style={styles.ForgetPassword}>Forgot Password?</Text>
  <TouchableOpacity  onPress={this.UserLogin}>

    <View style={styles.SignInButton}>
      <Text style={styles.SignInbuttonText}>SIGN IN</Text>
    </View>
  </TouchableOpacity>
  <Text onPress={this.OnpressToRegister} style={styles.RegisteredNow} >Registered Now?</Text>



</View>
</View>
<Text style={{fontWeight:"bold",fontSize:15,marginTop:10,padding:5,marginLeft:150}}>-OR-</Text>
      <TouchableOpacity>
        <View style ={styles.SignInButtonWithGoogle}>
            <View>
        <Ionicons style={{paddingHorizontal:10}} name="logo-facebook" color="royalblue" size={28} />
        </View>
        <View>
        <Text style={styles.SignInbuttonTextGoogle}>Sign in with facebook   
        </Text>
        </View>
        </View> 
      </TouchableOpacity>
      <TouchableOpacity>
        <View style ={styles.SignInButtonWithGoogle}>
        <Ionicons style={{paddingHorizontal:10}}  name="logo-google" color="red" size={28} />
        <Text style={styles.SignInbuttonTextGoogle}>Sign in with Google</Text>
        </View> 
      </TouchableOpacity>
       </View>
      )
    }
  }
  export default design
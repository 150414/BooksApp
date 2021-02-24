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
import styles from './SignupStyle'


class design extends Component {

    constructor(props) {
      super(props);
      this.state = {
      }
  
    }
    render() {
      return (
  
  
        <View>

        <View style={styles.container}>

          <Text style={styles.buttonte}>
            Sign Up
          </Text>
        </View>
        <View style={styles.MainView}>
          <Text style={{ fontSize: 18,color:'#34495E' }}>Email:</Text>
          <View style={styles.place}>

            <TextInput placeholder={"Enter the email"}
              onChangeText={(email) => this.setState({ email })}
              style={styles.Nameplaceholder}></TextInput>
            <Text style={styles.EmailTxt}>First-Name:</Text>

            <View style={styles.place}>

              <TextInput placeholder={"Enter the first name"}
                onChangeText={(first_name) => this.setState({ first_name })}
                style={styles.Nameplaceholder}></TextInput>
              <Text style={{ fontSize: 18, marginTop: 10,color:'#34495E' }}>Last-Name</Text>
              <TextInput placeholder={"Enter the last Name"}
                //secureTextEntry={true}
                onChangeText={(last_name) => this.setState({ last_name })}
                style={styles.PaswordPlaceholder}></TextInput>
              <Text style={{ fontSize: 18, marginTop: 10,color:'#34495E' }}>Password</Text>
              <TextInput placeholder={"Enter the password"}
                //secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
                style={styles.PaswordPlaceholder}></TextInput>
              <Text style={{ fontSize: 18, marginTop: 10,color:'#34495E' }}>ConfirmPassword</Text>
              <TextInput placeholder={"Enter the confirmPassword"}
                //secureTextEntry={true}
                onChangeText={(password_confirmation) => this.setState({ password_confirmation })}
                style={styles.PaswordPlaceholder}></TextInput>
              <TouchableOpacity onPress={() => { this.getapidata() }}>
                <View style={styles.SubmitButton}>
                  <Text style={styles.SubmitTxt}>Submit</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
      )
    }
  }
  export default design
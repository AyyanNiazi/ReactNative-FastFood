/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert, TextInput,Button} from 'react-native';


type Props = {};
export default class Login extends Component<Props> {
  state = {
    name: '',
    pass: '',
  }
handler = (e) => {
  const {name, pass} = this.state;

  if(!name || !pass) Alert.alert('please insert all field');

  if(name === 'arslan', pass === 'admin'){
    Alert.alert('succes')
  }
  else{
    Alert.alert('succesfuly failed')
  }

  
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Register </Text>

        <TextInput
        style={{height: 50,width: 180,}}
        placeholder='username'
        underlineColorAndroid='red'
        onChangeText={(text) => this.setState({name : text})}
        value={this.state.name}  />   
         <TextInput
        style={{height: 50,width: 180,}}
        placeholder='password'
        secureTextEntry={true}
        underlineColorAndroid='red'
        onChangeText={(text) => this.setState({pass : text})}
        value={this.state.pass}  />   

        <Button onPress={this.handler.bind(this)} title='login'> </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  welcome: {
    // justifyContent: 'start',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

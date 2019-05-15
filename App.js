import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert, TextInput,Button} from 'react-native';
import Login from './login'

type Props = {};
export default class App extends Component<Props> {
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
        <Login/>

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

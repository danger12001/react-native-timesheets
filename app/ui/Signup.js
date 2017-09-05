import React, { Component } from 'react';


import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {username: '', name: '', surname: '',email: '', password: ''};
  }

  signup(){
console.log('you pressed signup',this.state.username,this.state.name,this.state.surname, this.state.email, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>

      <TextInput
      style={{height: 50, borderColor: 'gray', borderWidth: 1, width: '80%'}}
      onChangeText={(username) => this.setState({username})}
      value={this.state.username}
      placeholder='Username'
      />

      <TextInput
      style={{height: 50, borderColor: 'gray', borderWidth: 1, width: '80%'}}
      onChangeText={(name) => this.setState({name})}
      value={this.state.name}
      placeholder='First Name'
      />

      <TextInput
      style={{height: 50, borderColor: 'gray', borderWidth: 1, width: '80%'}}
      onChangeText={(surname) => this.setState({surname})}
      value={this.state.surname}
      placeholder='Surname'
      />

        <TextInput
        style={{height: 50, borderColor: 'gray', borderWidth: 1, width: '80%'}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
        placeholder='Email'
      />

        <TextInput
        style={{height: 50, borderColor: 'gray', borderWidth: 1, width: '80%'}}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        placeholder='Password'
      />


      <Button onPress={this.signup.bind(this)} title='SIGN UP'/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

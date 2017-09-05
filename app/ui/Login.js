import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
  }

  login(){
console.log('you pressed login', this.state.email, this.state.password);
  }

  goToSignup(){
Actions.signup()
  }

  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.welcome}>
      Timesheets
      </Text>

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


      <Button onPress={this.login.bind(this)} title='LOGIN'/>

      <Text style={styles.welcome}>
      Need an account?
      </Text>
<Button onPress={this.goToSignup.bind(this)} title='Signup'/>

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

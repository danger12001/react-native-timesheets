
import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './ui/Login'
import Signup from './ui/Signup'
// <Scene key="register" component={Register} title="Register"/>
// <Scene key="home" component={Home}/>

export const App = () => (
  <Router>
    <Stack key="root">

    <Scene key="login" component={Login} title="Login"/>
    <Scene key="signup" component={Signup} title="Sign Up"/>

    </Stack>
  </Router>
);

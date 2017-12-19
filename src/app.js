import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
    apiKey: 'AIzaSyBmwtTVLXoPr3FiAqellsG01Zi9tR78LuQ',
    authDomain: 'authentication-ec0b0.firebaseapp.com',
    databaseURL: 'https://authentication-ec0b0.firebaseio.com',
    projectId: 'authentication-ec0b0',
    storageBucket: 'authentication-ec0b0.appspot.com',
    messagingSenderId: '572333544823'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

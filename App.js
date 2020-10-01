// import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import React, {Component} from 'react';
import AppRoot from './Apps/services/AppRoot';
import {StatusBar} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor="#000" />
        <AppRoot />
      </>
    );
  }
}

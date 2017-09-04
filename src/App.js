import React from 'react';
import Router from './router/Router';
import SplashScreen from 'react-native-smart-splash-screen';

export default class App extends React.Component{
  componentDidMount() {
    //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    })
  }
  render(){
    return(
      <Router />
    );
  }
}
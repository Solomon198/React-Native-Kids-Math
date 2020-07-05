import React, { Component } from "react";
import { StyleSheet,AsyncStorage,View} from "react-native";
import getTheme from "./app/native-base-theme/components";
import platform from "./app/native-base-theme/variables/platform";
import material from "./app/native-base-theme/variables/material";
import {dark} from '@eva-design/eva'
import {createSwitchNavigator,createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"



import Intro from "./app/screens/intro";
import Select from './app/screens/select';
import GameStart from './app/screens/gameStart';
import GameIntro from './app/screens/gameIntro'


import SplashScreen from 'react-native-splash-screen'
import { Root } from "native-base";
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout,IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


console.disableYellowBox = true;



const GameIntroStack = createStackNavigator({
   GameIntro:GameIntro,
},{
  headerMode:'none',
  mode:'card'
})


const Game = createStackNavigator({
  Intro:{screen:Intro},
  Select:Select,
  GameStart:GameStart
  
},{
  headerMode:'none',
  mode:'card'
})







const SwitchNav = createSwitchNavigator({
  GameFirst:GameIntroStack,
  Game:Game,
},{
  initialRouteName:'GameFirst'
})

const persistenceKey = "Roukt"

const persistNavigationState = async (navState) => {
  try {
    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState))
  } catch(err) {
    // handle the error according to your needs
  }
}
const loadNavigationState = async () => {
  const jsonString = await AsyncStorage.getItem(persistenceKey)
  return JSON.parse(jsonString)
}

const AppContainer = createAppContainer(SwitchNav);

export default class App extends Component {
  constructor() {
    super();  
    this.state = {
      isLoading: true
    };
  }

   componentDidMount(){
     
     SplashScreen.hide();

   }

  render() {
   
      return (
           <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <IconRegistry icons={EvaIconsPack} />
               <Root>
                  <AppContainer 
                      persistNavigationState={persistNavigationState}
                      loadNavigationState={loadNavigationState}
                    />
               </Root>
              
          </ApplicationProvider>
      );
  }
}

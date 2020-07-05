import React, { Component } from "react";
import {  StyleSheet,ImageBackground,View,AsyncStorage,StatusBar,AppState, TouchableNativeFeedback} from "react-native";
import getTheme from "../native-base-theme/components";
import platform from "../native-base-theme/variables/platform";
import {Button,Icon} from '@ui-kitten/components'
import {Colors, Typography, iconAssets} from '../styles/index'
import material from "../native-base-theme/variables/material";
import {HanwokToast} from "../components/toast"
import SpinKit from 'react-native-spinkit'
import { NavigationActions } from "react-navigation";
import {Login} from '../utils/UI';
var tts = require('react-native-android-speech')
import {
  Container,
  Text,
  Header,
  Left,
  Body,
  Right,
  Title,
  Toast,
  StyleProvider,
  Content,
  Grid,
  Col,
  Row,
  Item,
  Form,
  Label,
  Footer,
  FooterTab,
  Spinner,
  ActionSheet,
  H1
} from "native-base";
import AntDesign from "../Icon/antdesign";
import { TouchableHighlight } from "react-native-gesture-handler";
import { PlaySound, StopSound, PlaySoundRepeat, PlaySoundMusicVolume } from 'react-native-play-sound';
import Tts from 'react-native-tts';
const storage = AsyncStorage;
Tts.setDefaultEngine("com.google.android.tts")

const GameStartIcon = () => (
  <Icon name='play-circle' width={32} height={32} fill='#ffffff'/>
);

const SoundOn = () => (
  <Icon name='volume-up' width={32} height={32} fill='#ffffff'/>
);

const SoundOff = () => (
  <Icon name='volume-off' width={32} height={32} fill='#ffffff'/>
);


const off = () => (
  <Icon name='log-out' width={32} height={32} fill='#ffffff'/>
);



const styles = StyleSheet.create({
   mainContainer:{
     flex:1
   },
   image:{
     width:null,
     flex:1,
     justifyContent:'center',
     alignContent:'center',
     alignItems:'center',
     paddingHorizontal:10
   },
   btnOption:{
     width:"100%",
     marginVertical:10,
     marginHorizontal:10
   }
});

export default class GameIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundStatus:true
    }
  }

 async componentDidMount(){
  
  const soundStatus = await storage.getItem("SoundStatus");
    if(!soundStatus){
      StopSound();
      PlaySoundRepeat("game_menu_looping");
      PlaySoundMusicVolume(0.4);
      this.listenAppState();
    }else if (JSON.parse(soundStatus) == false ){

      this.setState({soundStatus:JSON.parse(soundStatus)})
    }else{
      StopSound();
      PlaySoundRepeat("game_menu_looping");
      PlaySoundMusicVolume(0.4);
      this.listenAppState();
      this.setState({soundStatus:JSON.parse(soundStatus)})
    }
  
    
   
  }


  startGame(){
    PlaySound("eventually");
    this.timer = setTimeout(()=>{
      this.props.navigation.navigate("Select");
      clearTimeout(this.timer)
    },1500)
  }

 async toggleSound(){
    await storage.setItem("SoundStatus",JSON.stringify(!this.state.soundStatus));
    this.setState({soundStatus:!this.state.soundStatus},()=>{
       if(!this.state.soundStatus){
          PlaySound("eventually");
       }else{
        PlaySoundRepeat("game_menu_looping");
        
       }
    });
  }

  handleAppState(appState){
  

      if (appState.match(/inactive|background/)) {
           StopSound();
      }else{

         if(this.state.soundStatus){
          PlaySoundRepeat("game_menu_looping")
         }else{
           StopSound()
         }
      }

  }


  listenAppState(){
    AppState.addEventListener("change",(appState)=>this.handleAppState(appState));
  }

  removeListenAppState(){

  }

  componentWillUnmount(){
    StopSound();
    AppState.removeEventListener('change',(appState)=>this.handleAppState(appState))
  }
 

  render() {
  
   
    return (
        <View style={styles.mainContainer}>
                <StatusBar translucent backgroundColor="transparent" />
               <ImageBackground source={require("../../assets/images/6.jpg")} style={styles.image}>
                   <Button icon={GameStartIcon} status="warning" size="giant" style={styles.btnOption} onPress={()=>this.startGame()}>Start Game</Button>
                 <Button onPress={()=>this.toggleSound()} icon={this.state.soundStatus?SoundOn:SoundOff} status="warning" size="giant" style={styles.btnOption}>Toggle Sound</Button>
                 <Button onPress={()=>this.props.navigation.navigate("GameFirst")} icon={off} status="warning" size="giant" style={styles.btnOption}>Exit Game</Button>

               </ImageBackground>
        </View>
    );
  }
}

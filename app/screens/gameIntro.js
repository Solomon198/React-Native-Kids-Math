import React, { Component } from "react";
import { StyleSheet,ImageBackground,View,AsyncStorage,Alert,StatusBar, TouchableNativeFeedback} from "react-native";
import getTheme from "../native-base-theme/components";
import platform from "../native-base-theme/variables/platform";
import {Button,Text} from '@ui-kitten/components'
import {Colors, Typography, iconAssets} from '../styles/index'
import material from "../native-base-theme/variables/material";
import {HanwokToast} from "../components/toast"
import SpinKit from 'react-native-spinkit'
import { NavigationActions } from "react-navigation";
import {Login} from '../utils/UI';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
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

import ViewPager  from '@react-native-community/viewpager'


const storage = AsyncStorage;

const PAGER_ITEMS = [
  {title:"Learn Numerics", img:require("../../assets/images/1.jpg")},
  {title:"Learn the Basis ", img:require("../../assets/images/10.jpg")},
  {title:"Learn With Fun", img:require("../../assets/images/5.jpg")},
  {title:"Get Started", img:require("../../assets/images/4.jpg")},
]


const styles = StyleSheet.create({
   viewPager:{
     flex:1
   },
   
   image:{
     flex:1,
     width:null,
   },
   text:{
     textAlign:'center',
     color:'white',
     textShadowColor: 'rgba(0, 0, 0, 0.95)',
     textShadowOffset: {width: -1, height: 1},
     textShadowRadius: 10,
     fontSize:40,
     lineHeight:70
   },
   overlay:{
     flex:1,
     backgroundColor:"rgba(0,0,0,0.2)",
     justifyContent:'center',
     alignContent:'center',
     alignItems:'center',
   },
   dotContainer:{
     flexDirection:'row',
     justifyContent:'center',
     alignContent:'center',
     alignItems:'center',
     backgroundColor:"rgba(0,0,0,0.2)", 
   },
   dots:{
     width:10,
     height:10,
     borderRadius:100,
     backgroundColor:'white',
     marginLeft:10,
     marginBottom:10
   },
   btnStart:{
     marginTop:20
   }
});

export default class GameIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage:0
    }
  }


  getColor(selectedPage,itemPosition){
    if(selectedPage == itemPosition){
      return "orange"
    }
    return "white";
  }

  navigate(){
    this.props.navigation.navigate("Intro")
  }

 

  render() {
  
   
    return (
      <View style={styles.viewPager}>
        <StatusBar translucent backgroundColor="transparent" />
        <ViewPager onPageSelected={(e)=> this.setState({selectedPage:e.nativeEvent.position})} initialPage={0} style={styles.viewPager}>
           {
                   PAGER_ITEMS.map((val,index)=>
                        <View style={styles.views} key={(index+1)+""}>
                               
                             <ImageBackground source={val.img} style={styles.image}>
                                  <View style={styles.overlay}>
                                      <Text style={styles.text} category="h1">{val.title}</Text>
                                      {
                                        (PAGER_ITEMS.length - 1) == index ?
                                        <Button onPress={()=>this.navigate()} style={styles.btnStart} size="large" status="warning">
                                             Get Started !!
                                        </Button> :
                                        null
                                      }
                                  </View>
                                  <View>
                                     <View style={styles.dotContainer}>
                                        {PAGER_ITEMS.map((item,pos)=>
                                          <View style={[styles.dots,{backgroundColor:this.getColor(this.state.selectedPage,pos)}]} />
                                        )}
                                    </View>
                                   </View>
                             </ImageBackground>

                        </View>
                   )
           }
        </ViewPager>
      </View>
    );
  }
}

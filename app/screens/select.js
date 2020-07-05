import React, { Component } from "react";
import {  StyleSheet,ImageBackground,View,AsyncStorage,StatusBar,AppState, Image,Modal} from "react-native";
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

const styles = StyleSheet.create({
   mainContainer:{
     flex:1
   },
   image:{
     width:null,
     flex:1,
     paddingHorizontal:10
   },
   btnOption:{
     width:"80%",
     marginVertical:10,
     marginHorizontal:10
   },
   btnOptionCon:{
    width:"90%",
    marginVertical:5,
    marginHorizontal:10
  },
   answerBox:{
     flex:5,
     
    
   },
   questionBox:{
     flex:2,
     flexDirection:'row',
     justifyContent:'center',
     alignContent:'center',
     alignItems:'center',
   },
   questionText:{
      textAlign:'center',
      color:'white',
      textShadowColor: 'rgba(0, 0, 0, 0.95)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      fontSize:60,
      lineHeight:70,
      marginHorizontal:10
   },
   optionText:{
    textAlign:'center',
    color:'white',
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize:40,
    lineHeight:70,
    marginHorizontal:10
 },
 score:{
  color:'white',
  textShadowColor: 'rgba(0, 0, 0, 0.95)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10,
  fontSize:30,
  lineHeight:40,
  marginHorizontal:5,
  marginTop:30
},
questionNo:{
  color:'white',
  textShadowColor: 'rgba(0, 0, 0, 0.95)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10,
  fontSize:30,
  lineHeight:40,
  marginHorizontal:5,
  marginTop:30,
  alignSelf:"flex-end"

},
timer:{
  color:'white',
  textShadowColor: 'rgba(0, 0, 0, 0.95)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10,
  textAlign:'center',
  fontSize:20,
  lineHeight:20,
  marginHorizontal:5,
  marginTop:20
},
scoreLabel:{
  color:'white',
  textShadowColor: 'rgba(0, 0, 0, 0.95)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10,
  textAlign:'center',
  fontSize:40,
  lineHeight:50,
  marginHorizontal:5,
  marginVertical:10
},
scoreModal:{
  color:'white',
  textShadowColor: 'rgba(0, 0, 0, 0.95)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10,
  textAlign:'center',
  fontSize:90,
  lineHeight:100,
  marginHorizontal:5,
  marginVertical:8
},

 optionRow:{
   flexDirection:'row',
   marginVertical:5
 }
});

let intialState = {
  soundStatus:true,
      questions:"",
      answers:[],
      score:0,
      showModal:false,
      selectedAnswer:0,
      answer:0,
      seconds:60,
      showAnswer:false,
      answerPosition:0,
      questionNo:0,
      questionMax:10,
      isObject:false,
      objectType:""
}

export default class GameIntro extends Component {
  constructor(props) {
    super(props);
    this.state = intialState
  }

 async componentDidMount(){
  const soundStatus = await storage.getItem("SoundStatus");
    if(!soundStatus){
      StopSound();
      PlaySoundMusicVolume(0.4);
      Tts.speak("Hi, Welcome!!. lets get started, please select the right answer to win.");
      
      this.listenAppState();
    }else if (JSON.parse(soundStatus) == false ){

      this.setState({soundStatus:JSON.parse(soundStatus)})
    }else{
      StopSound();
      PlaySoundMusicVolume(0.4);
      this.listenAppState();
      Tts.speak("Hi, Welcome!!. lets get started,     select the right answer to win.")

      this.setState({soundStatus:JSON.parse(soundStatus)})
    }

    await this.generateQuestion();


  
    
   
  }


  startGame(){
    PlaySound("eventually");
    this.timer = setTimeout(()=>{
      this.props.navigation.navigate("Select");
      clearTimeout(this.timer)
    },100000)
  }

  calculateProgress(){
     let point = this.state.score;
     let questionMax = this.state.questionMax;
     let expectedPoint = questionMax * 2;
     //evaluate user 
     if(point < (expectedPoint/2)){
         Tts.speak("Your performance was not good . you scored,"+ point + "points out of , " + expectedPoint + "points"+ ". but there is room for improvement. ready to try again ?")
     }else if(point >= (expectedPoint/2) && point <= (expectedPoint - 2)){
         Tts.speak("Your performace was impressive but you can do better. You scored," + point + "points out of , " + expectedPoint + "points"+    ". ready to try again ?")
     }else{
        Tts.speak("Excellent performance !!!. ready to try again ?")
     }
  }

  showModal(){
     return (
       <Modal  transparent visible={this.state.showModal}>
         <View style={{flex:1}} />
          <View style={{flex:3,marginHorizontal:10}}>
               <ImageBackground  style={styles.image} source={require("../../assets/images/1.jpg")}>
                   <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                
                      <Text style={styles.scoreLabel}>Your Score</Text>

                      <Text style={styles.scoreModal}>{this.state.score}</Text>

                   </View>
                   <Button onPress={()=>this.setState(intialState,()=>{
                        this.generateQuestion()
                      })} style={styles.btnOptionCon} status="success" size="giant">Restart</Button>
                      <Button onPress={()=>this.setState(intialState,()=>{
                          this.props.navigation.goBack();
                      })}  style={styles.btnOptionCon} status="danger" size="giant">Done</Button>
              </ImageBackground>
          </View>
         <View style={{flex:1}}/>
       </Modal>
     )
  }


  randomDeviation(){
    return (Math.floor(Math.random() * 20) + 1)
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }


  generateQuestion(){

    PlaySoundRepeat("lost_jungle_looping");

    let x = Math.floor(Math.random() * 100) + 1;
    let y = Math.floor(Math.random() * 100) + 1;

    let ob = Math.floor(Math.random() * 20) + 1;



    console.log('x=',x,"y=",y)
    let formQuestion = [
      {questionTts: x + " Plus " + y , answer:x+y,question: x + " + " + y,object:false },
      {questionTts: x >= y?x + " minus " + y + "?":y + " minus " + x +"?", answer: x >= y ? x - y : y - x,question: x >= y?x + " - " + y:y + " - " + x ,object:false},
      {questionTts:"How many oranges can you see ?",answer:ob,object:true,question:"",objectType:"orange"},
      {questionTts:"How many apples can you see ?",answer:ob,object:true,question:"",objectType:"apple"}

      
    ]

    console.log("FormedQuestion",formQuestion)

    let randomQuestion = Math.floor(Math.random() * 4) + 1;

    console.log('randome question',randomQuestion)
    //then question will be
  
    var getQustion = formQuestion[randomQuestion-1];
    var question = getQustion.question;
    var answer = getQustion.answer;
    var isObject = getQustion.object
    var objectType = getQustion.objectType

    console.log("question selected",getQustion)




    
   
    //randomize answers
    let answers = [
      answer,
      isObject?answer + this.randomDeviation() + 12:answer + this.randomDeviation() + 12,answer - this.randomDeviation(),answer+this.randomDeviation()];
    console.log("answers",answers)
    //shuffle array;
    this.shuffleArray(answers);

    console.log("Answers after shuffle",answers)



    //create Answer;
    let options = [
      {optionTts:"A, " + answers[0],option:answers[0],correct:answers[0] == answer ? true : false},
      {optionTts:"B, " + answers[1],option:answers[1],correct:answers[1] == answer ? true : false},
      {optionTts:"C, " + answers[2],option:answers[2],correct:answers[2] == answer ? true : false},
      {optionTts:"D,  " + answers[3],option:answers[3],correct:answers[3] == answer ? true : false}
    ]

    console.log("formattedAnswer",options)

    this.setState({
        questions:question,
        answers:options,
        answer: answer,
        showAnswer:false,
        seconds:60,
        questionNo:this.state.questionNo + 1,
        isObject:isObject,
        objectType:objectType?objectType:""
      },()=>{
  
        Tts.speak(getQustion.questionTts);

        Tts.speak(options[0].optionTts)
        Tts.speak(options[1].optionTts)
        Tts.speak(options[2].optionTts)
        Tts.speak(options[3].optionTts)
    
        this.trackQuestion = setInterval(()=>{
           this.setState({seconds:this.state.seconds - 1},()=>{
            if(this.state.seconds == 0){
              let concatStr = this.state.questionNo == this.state.questionMax?"":" . here goes another one.";
              Tts.speak("Ohhh you ran out of time, the answer is " + this.state.answer+ concatStr);          
              options.forEach((val,index)=>{
                 if(val.correct){
                   this.checkAnswer(val,index,true)
                 }
              })
              this.timeoutMessage = setTimeout(()=>{
                if(this.state.questionNo == this.state.questionMax){
                  this.setState({showModal:true},()=>{
                    this.calculateProgress();
                  });
                }else{
                  this.generateQuestion();
                }
                clearTimeout(this.timeoutMessage)
              },5000)
              clearInterval(this.trackQuestion);
            }
           });
           
        },1000)
      })



  }

  checkAnswer(answer,index,timeUp){
       
      if(this.state.seconds == 0 && timeUp == false) return false;
      PlaySound("eventually");
      clearInterval(this.trackQuestion)
      this.setState({showAnswer:true,answerPosition:index},()=>{
        if(timeUp) return false;
        Tts.stop();
        this.delayAnswerShow = setTimeout(()=>{
          if(answer.correct){
            PlaySound("applause8");
            this.ttsApplause = setTimeout(()=>{
             let concatStr = this.state.questionNo == this.state.questionMax?"":" here goes another one.";
             Tts.speak("Well done!!, very impressive, you scored 2 points."+ concatStr);
             this.setState({score:this.state.score + 2})
             clearTimeout(this.ttsApplause)
             this.askQuestion = setTimeout(()=>{
              if(this.state.questionNo == this.state.questionMax){
                this.setState({showModal:true},()=>{
                  this.calculateProgress();
                });
              }else{
                this.generateQuestion();
              }
               clearTimeout(this.askQuestion);
             },3000);
           },2000)
          }else{
            PlaySound("boo3");
            this.ttsBoo = setTimeout(()=>{
             let concatStr = this.state.questionNo == this.state.questionMax?"":"here goes another one.";
             Tts.speak("ohhhhh!!, you missed, the answer is "+ this.state.answer + ". " + concatStr);
             clearTimeout(this.ttsBoo)
             this.askQuestion = setTimeout(()=>{
               if(this.state.questionNo == this.state.questionMax){
                    this.setState({showModal:true},()=>{
                      this.calculateProgress();
                    });
               }else{
                this.generateQuestion();
               }
               clearTimeout(this.askQuestion);
             },3000);
            },1000)
          }
          clearTimeout(this.delayAnswerShow)
        },1000)
      })
     
  }



  handleAppState(appState){
  

      if (appState.match(/inactive|background/)) {
           Tts.stop();
           StopSound();
      }else{

         if(this.state.soundStatus){
          PlaySoundRepeat("lost_jungle_looping")
         }else{
           StopSound();
           Tts.stop();
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
    Tts.stop();
    clearInterval(this.trackQuestion);
    AppState.removeEventListener('change',(appState)=>this.handleAppState(appState))
  }

  returnStatus(btn,index){
    if(this.state.showAnswer){
      if(btn.correct){
        return "success"
      }else{
        if(this.state.answerPosition == index){
           return "danger"
        }else{
          return "warning"
        }
      }
    }else{
      return "warning"
    }
  }


  getOptionValue(index){
          switch(index){
            case 0 : return "A"; break;
            case 1 : return "B"; break;
            case 2 : return "C"; break;
            case 3 : return "D"; break;
          }
  }
 

  render() {
  
    return (
        <View style={styles.mainContainer}>
                <StatusBar translucent backgroundColor="transparent" />
                {this.showModal()}
               <ImageBackground source={require("../../assets/images/6.jpg")} style={styles.image}>
                  <View style={{flexDirection:'row',width:"100%"}}>
                     <View style={{alignSelf:'flex-start',flex:1}}>
                       <Text style={styles.score}>Score : {this.state.score}</Text>
                     </View>
                     <View style={{alignSelf:'flex-end',flex:1}}>
                       <Text style={styles.questionNo}> {this.state.questionNo} / {this.state.questionMax} </Text>
                     </View>
                  </View>
                  <Text style={styles.timer}>Time Remaining : {this.state.seconds} seconds</Text>
                  <View style={styles.questionBox}> 
                      
                       {
                         this.state.isObject?
                         <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignContent:"center",alignItems:"center"}}>
                              {
                                this.state.objectType == "orange"?
                                Array(this.state.answer).fill(null).map((val,index)=>
                                 <Image style={{width:40,height:40,marginVertical:5,maxHeight:40,maxWidth:40}} source={require("../../assets/images/orange.png")}/>
                                ):
                                Array(this.state.answer).fill(null).map((val,index)=>
                                 <Image style={{width:40,height:40,marginVertical:5,maxHeight:40,maxWidth:40,borderRadius:100}} source={require("../../assets/images/apple.jpg")}/>
                                )
                              }
                         </View>:
                         
                         <Text style={styles.questionText}>{this.state.questions}</Text>
                       }
                      
                  </View>
                  <View style={styles.answerBox}>
                      {
                        this.state.answers.map((val,index)=>
                          <View style={styles.optionRow}>
                             <Text style={styles.optionText}>{this.getOptionValue(index)}</Text>
                             <Button  onPress={()=>this.checkAnswer(val,index,false)} style={styles.btnOption} size="giant" status={this.returnStatus(val,index)}>{val.option + ""}</Button>
                          </View>
                        )
                      }
                  </View>
               </ImageBackground>
        </View>
    );
  }
}

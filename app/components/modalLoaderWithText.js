import React from 'react';
import {Modal,View} from 'react-native';
import {Spinner,Text,Button} from 'native-base'
import { Colors, Typography } from '../styles';

const ModalLoader = (Props)=>(
    <Modal 
    //    onRequestClose={()=>Props.onRequestClose()}
       visible={Props.visible}
       presentationStyle='fullScreen'
       transparent
     >

       <View style={{flex:1,backgroundColor:Colors.backDrop}}/>
       <View style={{flex:1,backgroundColor:Colors.backDrop,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
           <View style={{
               width:300,
               height:100,
               flexDirection:'row',
               justifyContent:'center',
               alignContent:'center',
               backgroundColor:"whitesmoke",
               alignItems:'center'
               }}>
                    <Spinner color={Colors.primary} />
                    <Text  style={{fontSize:Typography.headerFontSize,marginLeft:10}}>Updating Profile....</Text>
           </View>
        </View>

       <View style={{flex:1,backgroundColor:Colors.backDrop}}/>


    </Modal>
)

export default ModalLoader

import React from 'react';
import {View,Text} from 'react-native';
import {ListItem,Body,Left,Right,Thumbnail} from 'native-base'
import moment from 'moment'

// Render function
 const RenderCustomPopup = ({ appIconSource, appTitle, timeText, title, body }) => (
     <ListItem style={{backgroundColor:'white'}}>
         <Thumbnail small circular source={{uri:appIconSource}}/>
         <Body>
            <Text>New message.</Text>
            <Text style={{fontWeight:'bold',marginVertical:5}}>{title}</Text>
            <Text>{body}</Text>
            <Text>{moment(timeText).fromNow()}</Text>
         </Body>
     </ListItem>
  );

  export default RenderCustomPopup
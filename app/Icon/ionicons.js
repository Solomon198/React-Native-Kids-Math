import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'


export default class Ionicons extends Component {
    render(){
        return(
            <Icon name={this.props.name} style={this.props.style}/>
        )
    }
}
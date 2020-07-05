import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'


export default class SimpleLineIcons extends Component {
    render(){
        return(
            <Icon name={this.props.name} style={this.props.style}/>
        )
    }
}
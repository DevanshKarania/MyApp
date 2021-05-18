import React from 'react';
import {TouchableOpacity, Text, View, Image, TextInput} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class RequestScreen extends React.Component{
    render(){
        return(
            <View>
                <MyHeader title="Request Medicines" navigation={this.props.navigation}/>
                
            </View>
        )
    }
}
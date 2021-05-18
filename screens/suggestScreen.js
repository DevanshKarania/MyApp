import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class SuggestScreen extends React.Component{
    render(){
        return(
            <View>
                <MyHeader title="Suggestions" navigation={this.props.navigation}/>
                <Text>Suggestion Screen</Text>
            </View>
        )
    }
}
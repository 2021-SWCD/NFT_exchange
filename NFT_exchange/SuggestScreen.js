//탭바 제안 탭의 제안 스크린
import React from 'react';
import { Text, View, } from 'react-native';

export default class SuggestScreen extends React.Component {
  render(){
    return (
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        height: 300,}}>
        <Text>SuggestScreen</Text>
      </View>
    );
  }
}
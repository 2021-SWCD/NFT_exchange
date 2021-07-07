//탭바 정보 탭의 정보 스크린
import React from 'react';
import { Text, View, } from 'react-native';

export default class Tab_infoScreen extends React.Component {
  render(){
    return (
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        height: 300, }}>
        <Text>Tab_infoScreen</Text>
      </View>
    );
  }
}
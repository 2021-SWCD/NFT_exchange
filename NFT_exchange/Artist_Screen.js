//Profile 버튼을 누르면 이어지는 Artist_Screen
import React from 'react';
import { Text, View,} from 'react-native';

export default class Artist_Screen extends React.Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Artist_Screen</Text>
      </View>
    );
  }

  goMainScreen(){
    // MainScreen으로 화면 이동
    this.props.navigation.navigate('MAIN');
  }
}
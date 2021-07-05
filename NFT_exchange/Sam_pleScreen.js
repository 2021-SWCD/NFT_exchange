import React from 'react';
import { Image,TextInput,StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

export default class Sam_pleScreen extends React.Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  goMainScreen(){
    // MainScreen으로 화면 이동
    this.props.navigation.navigate('MAIN');
  }
}
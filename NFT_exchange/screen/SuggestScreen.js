//탭바 제안 탭의 제안 스크린
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import  I18n  from '../src/config/i18n'

export default class SuggestScreen extends React.Component {
  
  render(){
  
    return (
  
      <View style={styles.container}>
        <Icon style={styles.sad} name="sad-outline" size={45} />
        <Text style={styles.wrong_text}>{I18n.t('noSugTxt')}</Text>
        <Text style={styles.wrong_text}>{I18n.t('doSugTxt')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    height: 300,
  },
  
  sad: {
    color: 'black',
    marginBottom: 20,
    marginRight: 10,
  },
  wrong_text: {
    marginBottom: 5,
    fontSize: 22,
    fontWeight: 'bold'
  },
});

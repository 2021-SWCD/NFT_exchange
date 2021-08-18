//탭바 제안 탭의 제안 스크린
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from '../src/config/i18n';

export default class SuggestScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.sadIcon} name="sad-outline" size={45} />
        <Text style={styles.wrongText}>{I18n.t('noSugTxt')}</Text>
        <Text style={styles.wrongText}>{I18n.t('doSugTxt')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  sadIcon: {
    color: 'black',
    marginBottom: 20,
    marginRight: 10,
  },
  wrongText: {
    marginBottom: 5,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

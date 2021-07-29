import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from '../../../src/config/i18n';

export default class wrong_text extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.sad} name="sad-outline" size={45} />
        <Text style={styles.wrongText}>{I18n.t('noResultTxt')}</Text>
        <Text style={styles.wrongText}>{I18n.t('findAnotherTxt')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //원하는 구성 요소들은 여기서 설정해줘야 한다.
  container: {
    marginTop: 90,
    alignItems: 'center',
  },

  sad: {
    color: 'black',
    marginBottom: 20,
  },

  wrongText: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

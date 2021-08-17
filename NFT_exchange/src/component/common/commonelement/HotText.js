//핫한작품 아이콘과 텍스트

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from '../../../../src/config/i18n';

export default class HotText extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.fire} name="flame" size={31} />
        <Text style={styles.hotText}>{I18n.t('hotText')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 30,
    flexDirection: 'row',
  },

  fire: {
    color: 'red',
    marginLeft: 10,
  },

  hotText: {
    marginLeft: 8,
    marginRight: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import I18n from '../../src/config/i18n';

export default class WarnTxt extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTxt}>{I18n.t('sugModalMain')}</Text>

        <View style={styles.textContainer} />

        <Text style={styles.subTxt}> {I18n.t('sugModal1')}</Text>
        <Text style={styles.subTxt}> {I18n.t('sugModal2')}</Text>
        <Text style={styles.subTxt}> {I18n.t('sugModal3')}</Text>
        <Text style={styles.subTxt}> {I18n.t('sugModal4')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop: 100,
    marginRight: 30,
    marginLeft: 30,
    padding: 40,
    height: 430,
  },

  textContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  mainTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  subTxt: {
    marginTop: 10,
    fontSize: 15,
  },
});

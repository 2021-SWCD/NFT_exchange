import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import I18n from '../../../../src/config/i18n';

export default class LoginBtn extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.loginBtn}>{I18n.t('login')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topView: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  korbiBtn: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  loginBtn: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'normal',
  },
});

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../src/config/i18n';

export default class Logout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text
            onPress={() => {
              this.goMainScreen();
              this.LogOut();
            }}
            style={styles.loginBtn}>
            {I18n.t('logout')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  LogOut() {
    AsyncStorage.setItem('logIncom', JSON.stringify(false), () => {
      console.log('로그아웃');
    });

/*     let a = 80;

    AsyncStorage.setItem('ETH', a.toString(), () => {
      console.log('재 로그인시 80 할당');
    }); */

    AsyncStorage.getItem('logIncom', (err, logComplete) => {
      console.log(logComplete);
    });
  }

  goMainScreen() {
    // MainScreen으로 화면 이동
    this.props.navigation.navigate('MAIN');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  loginBtn: {
    height: 51,
    marginTop: 40,
    marginLeft: 50,
    marginRight: 30,
    width: 310,
    backgroundColor: '#0064ff',
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
    paddingTop: 16,
    paddingLeft: 132,
    borderRadius: 3,
  },
});

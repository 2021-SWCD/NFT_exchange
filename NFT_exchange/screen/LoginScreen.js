import React from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { KorbitLogo } from '../component/common/login/loginelement';
import I18n from '../src/config/i18n';


export default class LoginScreen extends React.Component {

  render() {
    
    return (

      <View style={styles.container}>

        <View style={styles.mainLogo}>

          <KorbitLogo
            onPress={() => this.goMainScreen()} />

        </View>

        <Text style={styles.login}>{I18n.t('login')}</Text>
        <Text style={styles.safe_txt}>{I18n.t('loginSafeText')}</Text>
        <Text style={styles.link_txt}>
          <Icon style={styles.shield} name="shield-checkmark-outline" size={16} />
          <Text style={styles.linkblue_txt}> {I18n.t('safeIconText')}  https</Text>
          <Text style={styles.linkgrey_txt}>://korbit.co.kr</Text>
        </Text>

        <TextInput
          style={styles.input}      //searchbar 설정은 안해둠
          placeholder={I18n.t('korbitEmailAccount')}
        />
        <TextInput
          style={styles.input}      //searchbar 설정은 안해둠
          placeholder={I18n.t('passWord')}
        />

        <TouchableOpacity>
          <Text
            onPress={() => { this.goMainScreen(); this.Login() }}
            style={styles.loginBtn}>
            {I18n.t('login')}
          </Text>
        </TouchableOpacity>

      </View>

    );
  }

  Login() {
    AsyncStorage.setItem('logIncom', JSON.stringify(true), () => {
      console.log('로그인 완료')
    });

    AsyncStorage.getItem('logIncom', (err, logComplete) => {
      console.log(logComplete) //true값이 잘 나오는지 확인
    })
  }

  goMainScreen() {
    // MainScreen으로 화면 이동
    this.props.navigation.navigate('MAIN');
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  mainLogo : {
    marginTop : 50, 
    marginLeft : 30,
  },
  
  login: {
    marginLeft: 50,
    marginRight: 20,
    marginTop: 25,
    marginBottom: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  safe_txt: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 20,
    fontSize: 14,

  },
  link_txt: {
    marginTop: 8,
    marginLeft: 50,
    marginRight: 20,
    marginBottom: 20,
    fontSize: 14,
    flexDirection: 'row'
  },

  input: {
    height: 51,
    marginTop: 16,
    marginLeft: 50,
    marginRight: 30,
    width: 310,
    borderWidth: 0.8,
    borderColor: '#AAAAAA',
    paddingLeft: 15,
    borderRadius: 3,

  },
  shield: {
    color: '#0064ff',
    marginRight: 10,

  },
  linkblue_txt: {
    color: '#0064ff',

  },
  linkgrey_txt: {
    color: 'grey',

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

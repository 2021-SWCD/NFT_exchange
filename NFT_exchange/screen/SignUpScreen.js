import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {KorbitLogo} from '../component/common/login/loginelement';
import I18n from '../src/config/i18n';
import auth from '@react-native-firebase/auth';

export default class SignUpScreen extends React.Component {

  constructor() { 
    super();
    this.state = {
      email: '',
      pwd: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainLogo}>
          <KorbitLogo onPress={() => this.goMainScreen()} />
        </View>

        <Text style={styles.loginLogo}>SIGN UP</Text>
        <Text style={styles.safeTxt}>{I18n.t('loginSafeText')}</Text>
        <Text style={styles.linkTxt}>
          <Icon
            style={styles.shield}
            name="shield-checkmark-outline"
            size={16}
          />
          <Text style={styles.blueLinkTxt}>
            {' '}
            {I18n.t('safeIconText')} https
          </Text>
          <Text style={styles.greyLinkTxt}>://korbit.co.kr</Text>
        </Text>

        <TextInput
          style={styles.input} //searchbar 설정은 안해둠
          placeholder={I18n.t('korbitEmailAccount')}
          onChangeText = {(text) => {this.setState({email : text})}}
        />

        <TextInput
          style={styles.input} //searchbar 설정은 안해둠
          placeholder={I18n.t('passWord')}
          onChangeText = {(text) => {this.setState({pwd : text})}}
        />

        <TextInput
          style={styles.input} //searchbar 설정은 안해둠
          placeholder={I18n.t('passWord')}
        />

        <TouchableOpacity>
          <Text
            onPress={() => {
              this.goLoginScreen();
              this.signUp();
            }}
            style={styles.loginBtn}>
            SIGNUP
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  signUp = () => {
    console.log("email",this.state.email)
    console.log("pwd",this.state.pwd)
    auth().createUserWithEmailAndPassword(this.state.email, this.state.pwd);

  }

  goLoginScreen() {
    // LoginScreen으로 화면 이동
    this.props.navigation.navigate('LOGIN');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainLogo: {
    marginTop: 50,
    marginLeft: 30,
  },

  loginLogo: {
    marginLeft: 50,
    marginRight: 20,
    marginTop: 25,
    marginBottom: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  safeTxt: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 20,
    fontSize: 14,
  },
  linkTxt: {
    marginTop: 8,
    marginLeft: 50,
    marginRight: 20,
    marginBottom: 20,
    fontSize: 14,
    flexDirection: 'row',
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
  blueLinkTxt: {
    color: '#0064ff',
  },
  greyLinkTxt: {
    color: 'grey',
  },
  loginBtn: {
    height: 51,
    marginTop: 20,
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
  signUp: {
    marginTop: 10,
    marginLeft: 300,
    color: 'grey',
    //alignItems: 'flex-end',
  },
});

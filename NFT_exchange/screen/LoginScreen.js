import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {KorbitLogo} from '../component/common/login/loginelement';
import I18n from '../src/config/i18n';
import auth from '@react-native-firebase/auth';

var iconOpacity = 0;

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pwd: '',
      secure : true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainLogo}>
          <KorbitLogo onPress={() => this.goMainScreen()} />
        </View>

        <Text style={styles.loginLogo}>{I18n.t('login')}</Text>
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
          onChangeText={text => {
            this.setState({email: text});
          }}
        />

        <View>
        <TextInput
          style={styles.input} //searchbar 설정은 안해둠
          placeholder={I18n.t('passWord')}
          onChangeText={text => {
            this.setState({pwd: text}, () => {

            });
            if (text == '') {
              iconOpacity = 0;
            } else {
              iconOpacity = 1;
            }
          }}
          secureTextEntry={this.state.secure}
          
        />
        <Icon
            style={[styles.show,{opacity : iconOpacity,}]}
            name={this.state.secure?"ios-eye-outline":"ios-eye-off-outline"}
            size={25}
            onPress={() => {
              this.setState({secure: !this.state.secure});
            }}
          />
          </View>

        <TouchableOpacity>
          <Text
            onPress={() => {
              this.goSingUpScreen();
            }}
            style={styles.signUp}>
            {I18n.t('signUp')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            onPress={() => {
              this.checkAccount();
            }}
            style={styles.loginBtn}>
            {I18n.t('login')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  checkAccount() {
    console.log('email', this.state.email);
    console.log('pwd', this.state.pwd);

    if(this.state.email == '' || this.state.pwd == '') {
      Alert.alert(
        'warn',
        I18n.t('nullAlert'),
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );}else{

    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.pwd)
      .then(result => {
        this.goMainScreen();
        console.log(result.user);
        this.Login();
        AsyncStorage.setItem('userEmail', JSON.stringify(this.state.email), () => {
          console.log('userEmail 불러오기');
        });
    
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('errorCode', errorCode);
        console.log('errorMessage', errorMessage);

        if (errorCode === 'auth/invalid-email') {
          Alert.alert(
            'warn',
            I18n.t('nullID'),
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        }else {
          Alert.alert(
            'warn',
            I18n.t('nullPwd'),
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        }
      });
    }
  }

  Login() {
    AsyncStorage.setItem('logIncom', JSON.stringify(true), () => {
      console.log('로그인 완료');
    });

    AsyncStorage.getItem('logIncom', (err, logComplete) => {
      console.log(logComplete); //true값이 잘 나오는지 확인
    });
  }

  goMainScreen() {
    // MainScreen으로 화면 이동
    this.props.navigation.navigate('MAIN');
  }
  goSingUpScreen() {
    // MainScreen으로 화면 이동
    this.props.navigation.navigate('SIGNUP');
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
  show: {
    color: 'black',
    marginRight: 10,
    position: 'absolute',
    top: 28,
    right: 55,
    
    
  },
});

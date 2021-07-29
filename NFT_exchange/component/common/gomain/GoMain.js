import React from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Qrcode, QrWallet, QrWalletNotLogin } from '../commonelement';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../../../src/config/i18n';

export default class GoMain extends React.Component {
  constructor() { //모달 팝업창
    super();
    this.state = {
      show: false,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.onLoad();
    console.log('GoMain_componentDidMount');
  }

  onLoad = () => {
    this.props.navigation.addListener('focus', () => {
      this.checkLoginStatus();
      console.log('GoMain_onLoad');
    });
  };

  checkLoginStatus = () => {
    AsyncStorage.getItem('logIncom', (err, result) => {
      console.log('GoMain_LoginAfter'); // User1 출력
      this.setState({isLoggedIn: JSON.parse(result)});
    });
  };

  render() {
    return (
      <View style={styles.midView}>
        <TouchableOpacity onPress={() => this.goMainScreen()}>
          <View style={styles.iconContainer}>
            <Icon
              style={styles.arrowBackIcon}
              name="arrow-back-outline"
              size={26}
            />
            <Text style={styles.goMain}>{I18n.t('goMain')}</Text>
          </View>
        </TouchableOpacity>
        <Qrcode
          marginLeft={30}
          marginTop={5}
          onPress={() => {
            this.setState({show: true});
          }}
        />
        <View>
          {this.state.isLoggedIn ? (
            <Modal transparent={true} visible={this.state.show}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.close_modal();
                }}>
                <View style={styles.wallet}>
                  <QrWallet navigation={this.props.navigation} />
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          ) : (
            <Modal transparent={true} visible={this.state.show}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.close_modal();
                }}>
                <View style={styles.notLogin}>
                  <QrWalletNotLogin navigation={this.props.navigation} />
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          )}
        </View>
      </View>
    );
  }
  goMainScreen() {
    //MainScreen으로 이동
    this.props.navigation.navigate('MAIN');
  }
  goLoginScreen() {
    // LoginScreen으로 화면 이동
    this.props.navigation.navigate('LOGIN');
  }
  close_modal = () => {
    this.setState({show: false});
  };
}

const styles = StyleSheet.create({
  arrowBackIcon: {
    color: 'black',
    marginLeft: 20,
  },
  goMain: {
    marginLeft: 8,
    marginTop: 1,
    fontSize: 18,
  },
  midView: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  wallet: {
    flex: 1,
    marginBottom: 90,
  },
  notLogin: {
    flex: 1,
  },
});

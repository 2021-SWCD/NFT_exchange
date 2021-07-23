import React from 'react';
import { Modal, TouchableWithoutFeedback, TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from './CustomButton';
import Qrcode from './common/commonElement/Qrcode';
import Qr_Wallet from './common/commonElement/QR_Wallet';
import Qr_Wallet_Not_Login from './common/commonElement/QR_Wallet_Not_Login';
import AsyncStorage from '@react-native-community/async-storage';


export default class Korbit_logo extends React.Component {
    /* static defaultProps = {
        arrowbakc: {
            color: 'black',
            marginLeft: 20,
        },
        go_first: {
            marginLeft: 8,
            marginTop: 1,
            fontSize: 18,
        },
        onPress: () => null,
    }
    constructor(props){
        super(props);
    } */
    constructor() //모달 팝업창
  {
    super();
    this.state = {
      show: false,
    }
  }

  state = {
    isLoggedIn: false,
  }

  componentDidMount() {
    this.onLoad();
    console.log('componentDidMount');
  }

  onLoad = () => {
    this.props.navigation.addListener('focus', () => {
      this.checkLoginStatus();
      console.log('onLoad');
    });
  };

  checkLoginStatus = () => {
    AsyncStorage.getItem('logIncom', (err, result) => {
      console.log('Login_after'); // User1 출력
      this.setState({ isLoggedIn : JSON.parse(result) })
    });
  };

    render() {
        return (
        <View style={styles.midView}>
            <TouchableOpacity 
                onPress={() => this.goMainScreen()}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon style={styles.arrowbakc} name="arrow-back-outline" size={26}/>
                    <Text style={styles.go_first}>처음으로</Text>
                </View>
            </TouchableOpacity>
            <Qrcode 
                marginLeft={30}
                marginTop={5}
                onPress={() => { this.setState({ show: true }) }}/>
            <View>
            {
              this.state.isLoggedIn
              ? <Modal
                  transparent={true}
                  visible={this.state.show}>
              <TouchableWithoutFeedback onPress={() => {this.close_modal()}}>
                <View style={{ flex: 1, marginLeft: 100, marginBottom: 90}}>
                  <Qr_Wallet />
                    <View style={{ position: 'absolute', top: 110, left: 270 }}>
                      <TouchableOpacity onPress={() => this.goArtist_Screen()}>
                        <Icon style={{marginTop: 20}}
                          name="chevron-forward-outline" size={30}></Icon>
                      </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </Modal>
              : <Modal
                  transparent={true}
                  visible={this.state.show}>
                <TouchableWithoutFeedback onPress={() => { this.close_modal() }}>
                  <View style={{ flex: 1, }}>
                    <Qr_Wallet_Not_Login />
                    <View style={{ position: 'absolute', top: 360, left: 167 }}>
                      <CustomButton
                        title={'로그인 하기'}
                        marginLeft={20}
                        onPress={() => this.goLoginScreen()} />
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            }
          </View>
        </View>
        );
    }
    goMainScreen() {
        //MainScreen으로 이동
        this.props.navigation.navigate('MAIN');
    }
    close_modal = () => {
        this.setState({ show: false })
    }
}

const styles = StyleSheet.create({
    arrowbakc: {
        color: 'black',
        marginLeft: 20,
    },
    go_first: {
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
})
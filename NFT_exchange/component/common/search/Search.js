import React, {useState} from 'react';
import { Modal, TouchableWithoutFeedback, TouchableOpacity, TextInput, StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Qrcode from '../commonElement/Qrcode';
import Qr_Wallet_Not_Login from '../commonElement/QR_Wallet_Not_Login';
import CustomButton from '../../CustomButton';
import Search_icons from './searchElement/Search_icons';
import Qr_Wallet from '../commonElement/QR_Wallet';
import AsyncStorage from '@react-native-community/async-storage';

const Input = ({ goWrongSearch }) => {

    const [text, setText] = useState('');
  
    var opa_num; // 공백일 경우 0, 아닐경우 1로해서 바로 투명도 조절.
  
    if (text == '') {
      opa_num = 0
    }
    else {
      opa_num = 1
    }
  
  
    console.log(goWrongSearch);
  
    return (
      <>
        <View style={styles.searchView} >
  
          <Search_icons
            
            onPress={() => {
              console.log('good?');
              goWrongSearch()
            }}
          />
  
          <TextInput
          
            style={styles.searchbar}
            placeholder="작품명 검색"
            value={text}
            onChangeText={text => setText(text)}
  
          />
  
          <TouchableOpacity onPress={() => setText('')}>
  
  
            <Icon style={{ opacity: opa_num, marginTop: 8 }} name="close-outline" size={30} />
  
  
          </TouchableOpacity>
  
        </View>
  
      </>
    );
  }


export default class Korbit_logo extends React.Component {
    
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

            <Input goWrongSearch={this.goWrongSearch} />
  
            <Qrcode
            marginTop={5}
            marginLeft={30}
            onPress={() => { this.setState({ show: true }) }} />
            
            
         
            <View>
              {
                this.state.isLoggedIn
                  ? <Modal
                    transparent={true}
                    visible={this.state.show}>
                    <TouchableWithoutFeedback onPress={() => { this.close_modal() }}>
                      <View style={{ flex: 1, marginLeft: 100, marginBottom: 90 }}>
                        <Qr_Wallet />
                        <View style={{ position: 'absolute', top: 110, left: 270 }}>
                          <TouchableOpacity onPress={() => this.goArtist_Screen()}>
                            <Icon style={{ marginTop: 20 }}
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
    goWrongSearch = () => {
        // console.log(this.props);
        //WrongSearch으로 이동
        this.props.navigation.navigate('WRONG');
      }
}

const styles = StyleSheet.create({

    searchView: {
        flexDirection: 'row',
    
    },
    searchbar: {
        marginLeft: 12,
        width: 240,
        fontSize: 16
    
      },
   
    midView: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
    },
})
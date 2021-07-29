import React, {useState} from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchIcons from './searchelement/SearchIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {Qrcode, QrWalletNotLogin, QrWallet} from '../commonelement';
import I18n from '../../../src/config/i18n';

const Input = ({goWrongSearch}) => {
  const [text, setText] = useState('');

  var iconOpacity; // 공백일 경우 0, 아닐경우 1로해서 바로 투명도 조절.

  if (text == '') {
    iconOpacity = 0;
  } else {
    iconOpacity = 1;
  }

  console.log(goWrongSearch);

  return (
    <>
      <View style={styles.searchView}>
        <SearchIcons
          onPress={() => {
            console.log('good?');
            goWrongSearch();
          }}
        />

        <TextInput
          style={styles.searchBar}
          placeholder={I18n.t('searchBarTxt')}
          value={text}
          onChangeText={text => setText(text)}
        />

        <TouchableOpacity onPress={() => setText('')}>
          <Icon
            style={{opacity: iconOpacity, marginTop: 8}}
            name="close-outline"
            size={30}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default class Search extends React.Component {
  constructor() {
    //모달 팝업창
    super();
    this.state = {
      modalShow: false,
    };
  }

  state = {
    isLoggedIn: false,
  };

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
      console.log('Login_after');
      this.setState({isLoggedIn: JSON.parse(result)});
    });
  };

  render() {
    return (
      <View style={styles.midView}>
        <Input goWrongSearch={this.goWrongSearch} />

        <Qrcode
          marginTop={5}
          marginLeft={30}
          onPress={() => {
            this.setState({modalShow: true});
          }}
        />

        <View>
          {this.state.isLoggedIn ? (
            <Modal transparent={true} visible={this.state.modalShow}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.closeModal();
                }}>
                <View style={styles.container}>
                  <QrWallet navigation={this.props.navigation} />
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          ) : (
            <Modal transparent={true} visible={this.state.modalShow}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.closeModal();
                }}>
                <View style={styles.container}>
                  <QrWalletNotLogin navigation={this.props.navigation} />
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          )}
        </View>
      </View>
    );
  }

  closeModal = () => {
    this.setState({modalShow: false});
  };
  goWrongSearch = () => {
    // console.log(this.props);
    //WrongSearch으로 이동
    this.props.navigation.navigate('WRONG');
  };
}

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
  },
  searchBar: {
    marginLeft: 12,
    width: 240,
    fontSize: 16,
  },

  midView: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});

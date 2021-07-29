import React, {Component} from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {LoginAfterHeader, LoginHeader} from '../component/common/login';
import {
  CardImage,
  NftName,
  Profile,
  CustomButton,
} from '../component/common/commonelement';
import GoMain from '../component/common/gomain/GoMain';
import NftInformation from '../component/common/commonelement/NftInformation';
import {TabBar, WarnTxt} from '../component/nftdetail';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../src/config/i18n';

export default class NftDetailScreen extends Component {
  //주석
  constructor() {
    //모달 팝업창
    super();
    this.state = {
      warnModalshow: false,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.onLoad();
    console.log('NftDetailScreen_componentDidMount');
  }

  onLoad = () => {
    this.props.navigation.addListener('focus', () => {
      this.checkLoginStatus();
      console.log('NftDetailScreen_onLoad');
    });
  };

  checkLoginStatus = () => {
    AsyncStorage.getItem('logIncom', (err, result) => {
      console.log('NftDetailScreen_LoginAfter'); // User1 출력
      this.setState({isLoggedIn: JSON.parse(result)});
    });
  };

  render() {
    return (
      <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
        {this.state.isLoggedIn ? (
          <LoginAfterHeader navigation={this.props.navigation} />
        ) : (
          <LoginHeader navigation={this.props.navigation} />
        )}

        <GoMain navigation={this.props.navigation} />

        <CardImage
          navigation={this.props.navigation}
          source={{
            uri: 'https://cdn.eyesmag.com/content/uploads/posts/2020/09/29/studio-ghibli-releases-400-free-to-use-images-01-0be601c8-2b4d-41f7-ba3c-f3a1a19697a6.jpg',
          }}
          borderBottomLeftRadius={20}
          borderBottomRightRadius={20}
          marginLeft={55}
          marginTop={20}
          height={450}
        />

        <View style={styles.colum}>
          <Profile
            title={'hyunji'}
            marginTop={10}
            marginLeft={20}
            navigation={this.props.navigation}
          />
          <NftName
            title={'NATURE'}
            marginLeft={20}
            navigation={this.props.navigation}
          />
          <NftInformation curTitle={'0.01'} costTitle={'10,000'} />

          {this.state.isLoggedIn ? (
            <CustomButton
              titleMarginLeft={20}
              buttonMarginLeft={10}
              onPress={() => this.setState({warnModalshow: true})}
            />
          ) : (
            <CustomButton
              titlemarginLeft={20}
              button_marginLeft={10}
              onPress={() => this.goLoginScreen()}
            />
          )}

          <View style={{flex: 1, marginTop: 30}}>
            <Modal transparent={true} visible={this.state.warnModalshow}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.close_modal();
                }}>
                <View style={styles.warnContainer}>
                  <WarnTxt />

                  <View style={styles.btnContainer}>
                    <TouchableOpacity>
                      <Text
                        onPress={() => this.goDetail_buy()}
                        style={styles.modalOkBtn}>
                        {I18n.t('modalOkBtn')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
          <TabBar />
        </View>
      </ScrollView>
    );
  }

  goLoginScreen() {
    // LoginScreen으로 화면 이동
    this.props.navigation.navigate('LOGIN');
  }
  goDetail_buy() {
    // Detail_buy로 화면 이동
    this.props.navigation.navigate('BUY');
  }
  close_modal = () => {
    this.setState({warnModalshow: false});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  colum: {
    width: '80%',
    height: '25%',
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 40,
  },

  modalContainer: {
    flex: 1,
    marginTop: 100,
  },

  warnContainer: {
    backgroundColor: 'grey',
    flex: 1,
  },

  btnContainer: {
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 455,
    left: 80,
  },

  modalOkBtn: {
    height: 41,
    marginTop: 10,
    width: 260,
    backgroundColor: '#0064ff',
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
    paddingTop: 10,
    paddingLeft: 120,
    borderRadius: 3,
  },
});

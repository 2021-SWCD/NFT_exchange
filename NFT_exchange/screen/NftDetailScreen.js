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
import {LoginAfterHeader, LoginHeader} from '../src/component/common/login';
import {
  CardImage,
  NftName,
  Profile,
  CustomButton,
  NftInformation,
} from '../src/component/common/commonelement';
import GoMain from '../src/component/common/gomain/GoMain';
import {TabBar, WarnTxt} from '../src/component/nftdetail';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../src/config/i18n';

import database from '@react-native-firebase/database';

import {connect} from 'react-redux';

class NftDetailScreen extends Component {
  //주석
  constructor() {
    //모달 팝업창
    super();
    this.state = {
      warnModalshow: false,
      isLoggedIn: false,
      database: [],
    };

    database()
      .ref()
      .on('value', snapshot => {
        console.log('datalist: ', snapshot.val());
        this.setState({datalist: snapshot.val()});
      });
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
    
    console.log('=============');
    console.log("this.props",this.props.page);
    console.log('=============');
    const {title,content,cost,imageUrl} = this.props.page;
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
            uri: imageUrl,
          }}
          borderBottomLeftRadius={20}
          borderBottomRightRadius={20}
          marginLeft={55}
          marginTop={20}
          height={450}
        />

        <View style={styles.colum}>
          <Profile
            title={title}
            marginTop={10}
            marginLeft={20}
            onPress={() => {
              this.props.navigation.navigate('ARTIST', {
                title: this.props.titleNum,
              })
                // this.props.setTitle(this.props.titleNum);
            }}
          />
          {console.log('title:', title)}
          <NftName
            title={content}
            marginLeft={20}
            navigation={this.props.navigation}
          />
          <NftInformation curTitle={cost} costTitle={cost * 10000} />

          {this.state.isLoggedIn ? (
            <CustomButton
              titleMarginLeft={20}
              buttonMarginLeft={10}
              onPress={() => this.setState({warnModalshow: true})}
            />
          ) : (
            <CustomButton
              titleMarginLeft={19}
              buttonMarginLeft={10}
              onPress={() => this.goLoginScreen()}
            />
          )}

          <View style={styles.modalContainer}>
            <Modal transparent={true} visible={this.state.warnModalshow}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.closeModal();
                }}>
                <View style={styles.warnContainer}>
                  <WarnTxt />

                  <View style={styles.btnContainer}>
                    <TouchableOpacity>
                      <Text
                        onPress={() => this.props.navigation.navigate('BUY', {
                          cost: cost,
                        })}
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
  goDetailBuy() {
    // Detail_buy로 화면 이동
    this.props.navigation.navigate('BUY');
  }
  closeModal = () => {
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
    marginTop: 30,
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

function mapStateToProps(state) {
  return {
    page : state.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NftDetailScreen);

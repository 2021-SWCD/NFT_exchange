import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {LoginAfterHeader, LoginHeader} from '../component/common/login';
import {GoMain} from '../component/common/gomain';
import {
  CustomButton,
  CustomCancelButton,
  NftInformation,
} from '../component/common/commonelement';
import {BuyText, BuyScreen} from '../component/buy/buyelement';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../src/config/i18n';

export default class DetailBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestPrcie: null,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.onLoad();
    console.log('DetailBuyScreen_componentDidMount');
  }

  onLoad = () => {
    this.props.navigation.addListener('focus', () => {
      this.checkLoginStatus();
      console.log('DetailBuyScreen_onLoad');
    });
  };

  checkLoginStatus = () => {
    // ETH 초기값 할당
    AsyncStorage.getItem('ETH', (err, result) => {
      console.log(result);
      this.setState({suggestPrcie: result});
    });

    AsyncStorage.getItem('logIncom', (err, result) => {
      console.log('DetailBuyScreen_LoginAfter');
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

        <View style={styles.colum}>
          <NftInformation curTitle={'0.01'} costTitle={'10,000'} />

          <BuyText title={this.state.suggestPrcie + 'ETH'} />

          <BuyScreen />

          <View>
            <Text style={styles.suggestGuideTxt}>
              {I18n.t('suggestGuideTxt')}
            </Text>
          </View>

          <View style={styles.btnContainer}>
            <CustomCancelButton onPress={() => this.goMainScreen()} />
            <CustomButton
              titlemarginLeft={20}
              onPress={() => {
                this.goMainScreen();
                this.Count();
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  Count() {
    let a = this.state.suggestPrcie - 10;

    AsyncStorage.setItem('ETH', JSON.stringify(a), () => {
      console.log('값 변경 완료 -10 차감');
    });

    AsyncStorage.getItem('ETH', (err, reset) => {
      console.log(reset);
    });
  }

  goMainScreen() {
    //MainScreen으로 이동
    this.props.navigation.navigate('MAIN');
  }
  goLoginScreen() {
    // LoginScreen으로 화면 이동
    this.props.navigation.navigate('LOGIN');
  }
  goArtist_Screen() {
    // ARTIST_screen으로 화면 이동
    this.props.navigation.navigate('ARTIST');
  }
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
    marginTop: 30,
    marginLeft: 40,
  },
  suggestGuideTxt: {
    marginTop: 70,
    marginLeft: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
});

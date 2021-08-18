import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {LoginAfterHeader, LoginHeader} from '../src/component/common/login';
import {GoMain} from '../src/component/common/gomain';
import {
  CustomButton,
  CustomCancelButton,
  NftInformation,
} from '../src/component/common/commonelement';
import {BuyText, BuyScreen} from '../src/component/buy/buyelement';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../src/config/i18n';

import firestore from '@react-native-firebase/firestore';

export default class DetailBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      isLoggedIn: false,
      userEmail: '',
      eth:'',
    };
  }

  componentDidMount() {
    this.onLoad();
    console.log('DetailBuyScreen_componentDidMount');
    AsyncStorage.getItem('userEmail', (err, result) => {
      console.log('detailBuy_useremail불러오기');
      this.setState({userEmail: JSON.parse(result)});
 
      firestore()
        .collection('user')
        .doc(this.state.userEmail)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
        
            const document = documentSnapshot.data();
            this.setState({eth: document.eth});
            console.log('eth_fire :', this.state.eth);
          }
        });
      console.log('loginAfterHeader eth설정_componentdidmount');
    });
  }

  onLoad = () => {
    this.props.navigation.addListener('focus', () => {
      this.checkLoginStatus();
      console.log('DetailBuyScreen_onLoad');
    });
  };

  checkLoginStatus = () => {
    
    

    AsyncStorage.getItem('logIncom', (err, result) => {
      console.log('DetailBuyScreen_LoginAfter');
      this.setState({isLoggedIn: JSON.parse(result)});
    });
  };

  render() {
    const {cost} = this.props.route.params;

    return (
      <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
        {this.state.isLoggedIn ? (
          <LoginAfterHeader navigation={this.props.navigation} />
        ) : (
          <LoginHeader navigation={this.props.navigation} />
        )}

        <GoMain navigation={this.props.navigation} />

        <View style={styles.colum}>
          <NftInformation curTitle={cost} costTitle={cost*10000} />

          <BuyText title={this.state.eth + 'ETH'} />

          <BuyScreen 
            ethCost={cost} 
            sugCost={cost*10000} />

          <View>
            <Text style={styles.suggestGuideTxt}>
              {I18n.t('suggestGuideTxt')}
            </Text>
          </View>

          <View style={styles.btnContainer}>
            <CustomCancelButton onPress={() => this.goMainScreen()} />
            <CustomButton
              titleMarginLeft={20}
              onPress={() => {
                this.goMainScreen();
                this.Count(cost);
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  Count(cost) {



    firestore()
      .collection('user')
      .doc(this.state.userEmail)
      .update({
        eth : this.state.eth-cost
      })
      .then(() => {
        console.log('eth updated!');
      });


  }

  goMainScreen() {
    //MainScreen으로 이동
    this.props.navigation.navigate('MAIN');
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

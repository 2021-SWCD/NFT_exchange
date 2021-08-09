import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {LoginAfterHeader, LoginHeader} from '../component/common/login';
import AsyncStorage from '@react-native-community/async-storage';
import NftSimpleInfoCard from '../component/common/nftsimpleinfocard/NftSimpleInfoCard';
import {HotText} from '../component/common/commonelement';
import Slide from '../component/main/slide/Slide';
import Search from '../component/common/search/Search';

import firestore from '@react-native-firebase/firestore';



export default class MainScreen extends React.Component {
  constructor() { //모달 팝업창
    super();
    this.state = {
      isLoggedIn: false,
      userEmail : '',
    };
  }

  componentDidMount() {
    this.onLoad();
    console.log('MainScreen_componentDidMount');
  }

  onLoad = () => {
    this.props.navigation.addListener('focus', () => {
      this.checkLoginStatus();
      console.log('MainScreen_onLoad');
    });
  };

  checkLoginStatus = () => {
    AsyncStorage.getItem('logIncom', (err, result) => {
      console.log('MainScreen_LoginAfter');
      this.setState({isLoggedIn: JSON.parse(result)});
    });

    AsyncStorage.getItem('userEmail', (err, result) => {
      console.log('mainscreen_useremail불러오기');
      this.setState({userEmail: JSON.parse(result)});
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

        <Search navigation={this.props.navigation} />

        <Slide navigation={this.props.navigation} />

        <HotText />

        {/*NftSimpleInfoCard*/}

        <View style={styles.cardContainer}>
          <NftSimpleInfoCard navigation={this.props.navigation} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  cardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

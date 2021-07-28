import React from 'react';
import { StyleSheet, View, ScrollView, } from 'react-native';
import { LoginAfterHeader, LoginHeader } from '../component/common/login';
import NftSimpleInfoCard from '../component/common/nftsimpleinfocard/NftSimpleInfoCard';
import { Hot_text }from '../component/common/commonElement';
import AsyncStorage from '@react-native-community/async-storage';
import Search from '../component/common/search/Search';
import { Wrong_text } from '../component/wrong/wrongelement';



export default class WrongSearch extends React.Component {

  constructor() //모달 팝업창
  {
    super();
    this.state = {
      show: false,
      isLoggedIn: false,
    }
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
      console.log('Login_after');
      this.setState({ isLoggedIn: JSON.parse(result) })
    });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    console.log(isLoggedIn);


    return (

      <ScrollView style={styles.container}>
        {
          isLoggedIn
            ? <LoginAfterHeader navigation={this.props.navigation} />
            : <LoginHeader navigation={this.props.navigation} />
        }

        <Search navigation={this.props.navigation} />

        <Wrong_text />

        <Hot_text />

        {/*NftSimpleInfoCard*/}
        <View style={styles.cardContainer}>
          <NftSimpleInfoCard navigation={this.props.navigation} />
        </View>

      </ScrollView>
    );
  }
  goLoginScreen() {
    // LoginScreen으로 화면 이동
    this.props.navigation.navigate('LOGIN');
  }
  goSam_pleScreen() {
    //SampleScreen으로 이동
    this.props.navigation.navigate('SAMPLE');
  }
  goMainScreen() {
    //MainScreen으로 이동
    this.props.navigation.navigate('MAIN');
  }
  close_modal = () => {
    this.setState({ show: false })
  }
  goNFT_detailScreen() {
    //SampleScreen으로 이동
    this.props.navigation.navigate('SUGESST');
  }
  goArtist_Screen() {
    // ARTIST_screen으로 화면 이동
    this.props.navigation.navigate('ARTIST');
  }
  goWrongSearch = () => {
    // console.log(this.props);
    //WrongSearch으로 이동
    this.props.navigation.navigate('WRONG');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  
  cardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

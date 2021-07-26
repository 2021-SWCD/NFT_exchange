import React from 'react';
import {
  StyleSheet, View, ScrollView,
} from 'react-native';
import { LoginHeader, LoginAfterHeader } from './component/common/logIn';
import AsyncStorage from '@react-native-community/async-storage';
import NftSimpleInfoCard from './component/common/nftSimpleInfoCard/NftSimpleInfoCard';
import Hot_text from './component/common/commonElement/Hot_text';
import Slide from './component/main/slide/Slide';
import Search from './component/common/search/Search';

export default class MainScreen extends React.Component {

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
    const logIn = this.state.isLoggedIn;
    console.log('logIn');
    console.log(logIn);

    return (
      <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
        {/* <LoginHeader navigation={this.props.navigation}/> */}
        {
          this.state.isLoggedIn
            ? <LoginAfterHeader navigation={this.props.navigation} />
            : <LoginHeader navigation={this.props.navigation} />
        }

        <Search navigation={this.props.navigation} />


        <Slide navigation={this.props.navigation} />

        <Hot_text />

        {/*NftSimpleInfoCard*/}
        <View style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
          <NftSimpleInfoCard navigation={this.props.navigation} />
        </View>

        {/* <TouchableOpacity
          style={{ position: 'absolute', top: 360, left: 5, }}
          onPress={() => this.leftPage()}
        >
          <Icon style={{ margin: 5 }} name="chevron-back" size={35} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ position: 'absolute', top: 360, right: 5, }}
          onPress={() => this.rightPage()}
        >
          <Icon style={{ margin: 5 }} name="chevron-forward" size={35} />
        </TouchableOpacity> */}

      </ScrollView>
    );
  }

  /* leftPage = () => {

    start -= width

    if (start <= width * -1) {
      start = width * 4
    }

    this.scrollView.scrollTo({
      x: start
    })


  }
  rightPage() {

    start += width

    if (start >= width * 5) {
      start = 0
    }

    this.scrollView.scrollTo({
      x: start
    })


  } */
  goLoginScreen() {
    // LoginScreen으로 화면 이동
    this.props.navigation.navigate('LOGIN');
  }

  goArtist_Screen() {
    // ARTIST_screen으로 화면 이동
    this.props.navigation.navigate('ARTIST');
  }

  goNFT_detailScreen() {
    //SampleScreen으로 이동
    this.props.navigation.navigate('SUGESST');
  }

  goWrongSearch = () => {
    // console.log(this.props);
    //WrongSearch으로 이동
    this.props.navigation.navigate('WRONG');
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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  topView: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },


  search: {
    color: 'black',
    marginLeft: 22
  },

  scrollView: {
    flex: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  slide_img: {
    height: 270,
    width: 250,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,

  },
});
import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Image, TextInput, 
  StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { LoginHeader, LoginAfterHeader } from './component/common/logIn';
import Icon from 'react-native-vector-icons/Ionicons';
import NftSimpleInfoCard from './component/common/nftSimpleInfoCard/NftSimpleInfoCard';
import Hot_text from './component/Hot_text';
import Search_input from './component/Search_input';
import CustomButton from './component/CustomButton';
import AsyncStorage from '@react-native-community/async-storage';
import Search from './component/common/search/Search';



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
      console.log('Login_after'); // User1 출력
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

        <View style={{ marginTop: 90, alignItems: 'center' }}>
          <Icon style={styles.sad} name="sad-outline" size={45} />
          <Text style={styles.wrong_text}>검색 결과를 찾을 수 없어요.</Text>
          <Text style={styles.wrong_text}>다른 검색어로 검색해주세요.</Text>
        </View>


        <View>
          <Hot_text />
        </View>

        {/*NftSimpleInfoCard*/}
        <View style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
          <NftSimpleInfoCard navigation={this.props.navigation}/>
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

  topView: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  korbiBtn: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  loginBtn: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'normal',
  },

  
  
  
  sad: {
    color: 'black',
    marginBottom: 20,

  },


  wrong_text: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 22,
    fontWeight: 'bold'

  },
  fire: {
    color: 'red',
    marginLeft: 10,


  },

  hot_text: {
    marginLeft: 8,
    marginRight: 20,

    fontSize: 25,
    fontWeight: 'bold',

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

  cardContainer: {
    backgroundColor: '#d3d3d3',
    borderBottomLeftRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
    borderBottomRightRadius: 20,
    marginBottom: 20,
    width: 300,
    height: 170,
  },
});
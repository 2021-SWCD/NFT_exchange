import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Image, TextInput, 
  StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { LoginHeader, LoginAfterHeader } from './component/common/logIn';
import Icon from 'react-native-vector-icons/Ionicons';
import Nft_simple_info_cardImage from './component/common/nftSimpleInfoCard/nftSimpleInfoCardElement/Nft_simple_info_cardImage';
import Nft_simple_info_Profile from './component/common/nftSimpleInfoCard/nftSimpleInfoCardElement/Nft_simple_info_Profile';
import Nft_simple_info_costtime from './component/common/nftSimpleInfoCard/nftSimpleInfoCardElement/Nft_simple_info_costime';
import NFT_name from './component/common/nftSimpleInfoCard/nftSimpleInfoCardElement/NFT_name';
import Hot_text from './component/Hot_text';
import Search_input from './component/Search_input';
import CustomButton from './component/CustomButton';
<<<<<<< HEAD
import LoginAfterHeader from './component/common/LoginAfterHeader';
import LoginHeader from './component/common/loginHeader';
import Search from './component/common/search/Search';
=======

>>>>>>> 723a78ea7f0d699c8043d30d87bf4fe76110194d
import AsyncStorage from '@react-native-community/async-storage';

const dataList = [
  {
    imageUrl: "https://img4.yna.co.kr/photo/etc/epa/2019/12/06/PEP20191206054201848_P4.jpg",
    title: "title1",
    content: "content1"
  },
  {
    imageUrl: "https://ichef.bbci.co.uk/news/800/cpsprodpb/C173/production/_117832594_066549055.jpg",
    title: "title2",
    content: "content2"
  },
  {
    imageUrl: "http://res.heraldm.com/content/image/2013/05/27/20130527000159_0.jpg",
    title: "title3",
    content: "content3"
  },
  {
    imageUrl: "http://www.economyf.com/pds_update/umg_20200528234240.jpg",
    title: "title4",
    content: "content4"
  },
  {
    imageUrl: "http://db.kookje.co.kr/news2000/photo/2018/1206/L20181206.22021001594i1.jpg",
    title: "title5",
    content: "content5"
  },
]




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


        <View >
          <Hot_text />
        </View>

        {/*여기 부터가 Nft_simple_info 프레임입니다.*/}



        {dataList.map((element, index) => (
          <View key={index}>

            <View style={{ marginTop: 10, marginLeft: 55 }}>
              <Nft_simple_info_cardImage
                source={{ uri: element.imageUrl }}
                onPress={() => this.goNFT_detailScreen()} />
              <View style={styles.cardContainer}>
                <NFT_name
                  title={element.content}
                  fontSize={20}
                  onPress={() => this.goNFT_detailScreen()} />
                <Nft_simple_info_Profile
                  title={element.title}
                  onPress={() => this.goArtist_Screen()} />
                <Nft_simple_info_costtime
                  nft_cost={'0.01ETH'} />
              </View>
            </View>


          </View>

        ))
        }

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
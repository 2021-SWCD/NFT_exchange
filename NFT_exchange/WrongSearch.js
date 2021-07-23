import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Image, TextInput, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Nft_simple_info_cardImage from './component/Nft_simple_info_cardImage';
import Nft_simple_info_costtime from './component/Nft_simple_info_costime';
import Nft_simple_info_Profile from './component/Nft_simple_info_Profile';
import NFT_name from './component/NFT_name';
import Hot_text from './component/Hot_text';
import Search_icons from './component/Search_icons';
import Search_input from './component/Search_input';
import Qrcode from './component/Qrcode';
import Qr_Wallet from './component/QR_Wallet';
import Qr_Wallet_Not_Login from './component/QR_Wallet_Not_Login';
import CustomButton from './component/CustomButton';
import LoginAfterHeader from './component/common/LoginAfterHeader';
import LoginHeader from './component/common/loginHeader';
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

const Input = ({ goWrongSearch }) => {

  const [text, setText] = useState('');

  var opa_num; // 공백일 경우 0, 아닐경우 1로해서 바로 투명도 조절.

  if (text == '') {
    opa_num = 0
  }
  else {
    opa_num = 1
}


  console.log(goWrongSearch);

  return (
    <>
      <View style={styles.searchView} >

      <Search_icons
          //   onPress={() => this.goWrongSearch()} 왜인지 모르겠으나 정렬이 안됌...
          onPress={() => {
            console.log('good?');
            goWrongSearch()
          }}
        />

        <TextInput
          style={styles.searchbar}
          placeholder="작품명 검색"
          value={text}
          onChangeText={text => setText(text)}

        />

        <TouchableOpacity onPress={() => setText('')}>


          <Icon style={{ opacity: opa_num, marginTop: 8 }} name="close-outline" size={30} />


        </TouchableOpacity>

      </View>

    </>
  );
}


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

        <View style={styles.midView}>


        <Input goWrongSearch={this.goWrongSearch} />

          <Qrcode
            marginTop={5}
            marginLeft={30}
            onPress={() => { this.setState({ show: true }) }} />

          <View>
            {
              isLoggedIn
                ? <Modal
                  transparent={true}
                  visible={this.state.show}>
                  <TouchableWithoutFeedback onPress={() => { this.close_modal() }}>
                    <View style={{ flex: 1, marginLeft: 100, marginBottom: 90 }}>
                      <Qr_Wallet />
                      <View style={{ position: 'absolute', top: 110, left: 270 }}>
                        <TouchableOpacity onPress={() => this.goArtist_Screen()}>
                          <Icon style={{ marginTop: 20 }}
                            name="chevron-forward-outline" size={30}></Icon>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </Modal>
                : <Modal
                  transparent={true}
                  visible={this.state.show}>
                  <TouchableWithoutFeedback onPress={() => { this.close_modal() }}>
                    <View style={{ flex: 1, }}>
                      <Qr_Wallet_Not_Login />
                      <View style={{ position: 'absolute', top: 360, left: 167 }}>
                        <CustomButton
                          title={'로그인 하기'}
                          marginLeft={20}
                          onPress={() => this.goLoginScreen()} />
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </Modal>
            }
          </View>
        </View>

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

  searchView: {
    flexDirection: 'row',
  },
  midView: {

    flexDirection: 'row',
    height: 60,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',

  },
  search: {
    color: 'black',
    marginLeft: 22
  },
  searchbar: {
    marginLeft: 12,
    width: 240,
    fontSize: 16

  },
  qrcode: {
    color: 'black',
    marginLeft: 10

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
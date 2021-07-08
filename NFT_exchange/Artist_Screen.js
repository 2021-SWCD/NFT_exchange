//Profile 버튼을 누르면 이어지는 Artist_Screen
import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image, ScrollView, } from 'react-native';
import Korbit_logo from './component/Korbit_logo';
import Login_btn from './component/Login_btn';
import Go_main from './component/go_main';
import Nft_simple_info_cardImage from './component/Nft_simple_info_cardImage';
import Nft_simple_info_Profile from './component/Nft_simple_info_Profile';
import Nft_simple_info_costtime from './component/Nft_simple_info_costime';
import NFT_name from './component/NFT_name';
import Profile_img from './component/Profile_img';
import Profile_name from './component/Profile_name';

import Profile_text from './component/Profile_text';

import Detail_main from './component/detail_main';
import CustomButton from './component/CustomButton';
import Qrcode from './component/Qrcode';
import Icon from 'react-native-vector-icons/Ionicons';


export default class NFT_detailScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container} stickyHeaderIndices={[1]}>

        <View style={styles.topView}>
          <Korbit_logo
            onPress={() => this.goMainScreen()} />
          <Login_btn
            onPress={() => this.goLoginScreen()} />
        </View>



        <View style={styles.midView}>

          <View style={{ marginLeft: 3, marginBottom: 6, flexDirection: 'row', alignItems: 'flex-end' }}>

            <Go_main onPress={() => this.goMainScreen()} />

            <Qrcode />

          </View>

        </View>



        <View style={{ height: 570 }}>

          <Image style={{ width: '100%', height: 225, }} source={{ uri: 'https://cdn.eyesmag.com/content/uploads/posts/2020/09/29/studio-ghibli-releases-400-free-to-use-images-01-0be601c8-2b4d-41f7-ba3c-f3a1a19697a6.jpg' }}
          />

          <Icon style={styles.share} name="share-social" size={31} />

          <Profile_name
            title={'hyunji'}

          />

          <Profile_text title={'132-333123-342524(비트코인계좌)'} />
          <Icon style={styles.copy} name="copy-outline" size={25} />

          <Profile_text
            title={'오늘도 멋진 작품을!'} />

          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 160 }}>
            <Icon style={styles.twit} name="logo-twitter" size={31} />
            <Icon style={styles.insta} name="logo-instagram" size={31} />
          </View>

          <View style={{ alignItems: 'center' }}>

            <Text style={styles.product}>작품</Text>

          </View>



        </View>

        <View style={styles.colum}>
          <Profile_img />

        </View>

        <View style={{ marginLeft: 55 }}>
          <Nft_simple_info_cardImage
            source={{ uri: 'https://cdn.eyesmag.com/content/uploads/posts/2020/09/29/studio-ghibli-releases-400-free-to-use-images-01-0be601c8-2b4d-41f7-ba3c-f3a1a19697a6.jpg' }}
            onPress={() => this.goNFT_detailScreen()} />
          <View style={styles.cardContainer}>
            <NFT_name
              title={'The hill'}
              fontSize={20}
              onPress={() => this.goNFT_detailScreen()} />
            <Nft_simple_info_Profile
              title={'hyunji'}
              onPress={() => this.goArtist_Screen()} />
            <Nft_simple_info_costtime
              nft_cost={'0.01ETH'} />
          </View>
        </View>


      </ScrollView>
    )
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
    flex: 1, //뷰가 얼만큼의 가중치를 가지는 지 결정, 높을 수록 많은 영역을 차지함
    //justifyContent: 'center', //수직에서 중앙으로 정렬
    //alignItems:'center', //수평에서 중앙으로 정렬
    backgroundColor: 'white',
  },
  cardContainer: {
    backgroundColor: '#d3d3d3',
    borderBottomLeftRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
    borderBottomRightRadius: 20,
    marginBottom: 20,
    width: 300,
    height: 150,
  },


  topView: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  midView: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },

  colum: {
    width: '80%',
    height: '25%',
    flexDirection: 'column',
    marginTop: 290,
    marginLeft: 40,
    position: 'absolute',


  },
  share: {
    color: 'black',
    textAlign: 'right',
    marginRight: 20,
    marginTop: 10,
    marginLeft: 10,


  },
  copy: {
    color: 'black',
    textAlign: 'right',
    marginTop: -32,
    marginRight: 55,



  },
  twit: {
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',



  },
  insta: {
    color: 'black',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,


  },

  product: {

    height: 35,
    marginTop: 50,
    width: 60,
    backgroundColor: '#222222',
    fontSize: 15,
    paddingTop: 7,
    paddingLeft: 15,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 30,
  },





})
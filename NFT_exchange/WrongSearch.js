import React from 'react';
import { Image, TextInput, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Nft_simple_info_cardImage from './component/Nft_simple_info_cardImage';
import Nft_simple_info_costtime from './component/Nft_simple_info_costime';
import Profile from './component/Profile';
import NFT_name from './component/NFT_name';
import Hot_text from './component/Hot_text';
import Login_btn from './component/Login_btn';
import Korbit_logo from './component/Korbit_logo';
import Search_icons from './component/Search_icons';
import Search_input from './component/Search_input';
import Qrcode from './component/Qrcode';



export default class MainScreen extends React.Component {


  render() {



    return (

      <ScrollView style={styles.container}>

        <View style={styles.topView}>
          <Korbit_logo
            onPress={() => this.goMainScreen()} />
          <Login_btn
            onPress={() => this.goLoginScreen()} />
        </View>

        <View style={styles.midView}>


          <Search_icons
            />

          <Search_input />

          <Icon style={styles.reset} name="close-outline" size={26} />

          <Qrcode />


        </View>

        <View style={{ marginTop: 90, alignItems: 'center' }}>
          <Icon style={styles.sad} name="sad-outline" size={45} />
          <Text style={styles.wrong_text}>검색 결과를 찾을 수 없어요.</Text>
          <Text style={styles.wrong_text}>다른 검색어로 검색해주세요.</Text>
        </View>


        <View >
          <Hot_text />
        </View>

        <View style={{ alignContent: 'center' }}>
          <View style={{ marginTop: 10, marginLeft: 55 }}>
            <Nft_simple_info_cardImage 
              onPress={() => this.goNFT_detailScreen()}/>
            <View style={styles.cardContainer}>
              <NFT_name 
                title={'NATURE'}
                fontSize={20}
                onPress={() => this.goNFT_detailScreen()}/>
              <Profile 
                title={'hyunji'}
                onPress={() => this.goArtist_Screen()}/>
              <Nft_simple_info_costtime 
                nft_cost={'0.01ETH'}/>
            </View>
          </View>
          <View style={{ marginTop: 10, marginLeft: 55 }}>
            <Nft_simple_info_cardImage 
              onPress={() => this.goNFT_detailScreen()}/>
            <View style={styles.cardContainer}>
              <NFT_name 
                title={'NATURE'}
                fontSize={20}
                onPress={() => this.goNFT_detailScreen()}/>
              <Profile 
                title={'hyunji'}
                onPress={() => this.goArtist_Screen()}/>
              <Nft_simple_info_costtime 
                nft_cost={'0.01ETH'}/>
            </View>
          </View>
          <View style={{ marginTop: 10, marginLeft: 55 }}>
            <Nft_simple_info_cardImage 
              onPress={() => this.goNFT_detailScreen()}/>
            <View style={styles.cardContainer}>
              <NFT_name 
                title={'NATURE'}
                fontSize={20}
                onPress={() => this.goNFT_detailScreen()}/>
              <Profile 
                title={'hyunji'}
                onPress={() => this.goArtist_Screen()}/>
              <Nft_simple_info_costtime 
                nft_cost={'0.01ETH'}/>
            </View>
          </View>
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
    width: 280,
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

  cardContainer:{
    backgroundColor: '#d3d3d3',
    borderBottomLeftRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
    borderBottomRightRadius: 20,
    marginBottom: 20,
    width:300,
    height: 150,
  },
});
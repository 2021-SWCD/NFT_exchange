import React from 'react';
import { Image, TextInput, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


import Detail_main from './component/detail_main';
import CustomButton from './component/CustomButton';
import Nft_simple_info from './component/Nft_simple_info';
import Profile from './component/Profile';
import NFT_name from './component/NFT_name';
import Hot_text from './component/Hot_text';
import Login_btn from './component/Login_btn';
import Korbit_logo from './component/Korbit_logo';
import Search_icons from './component/Search_icons';
import Search_input from './component/Search_input';
import Qrcode from './component/Qrcode';

const { width } = Dimensions.get("window");
const height = width * 0.5;
const images = [
  'https://img4.yna.co.kr/photo/etc/epa/2019/12/06/PEP20191206054201848_P4.jpg',
  'https://ichef.bbci.co.uk/news/800/cpsprodpb/C173/production/_117832594_066549055.jpg',
  'http://res.heraldm.com/content/image/2013/05/27/20130527000159_0.jpg',
  'http://www.economyf.com/pds_update/umg_20200528234240.jpg',
  'http://db.kookje.co.kr/news2000/photo/2018/1206/L20181206.22021001594i1.jpg'

]



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
            onPress={() => this.goWrongSearch()}
          />

          <Search_input />

          <Icon style={styles.reset} name="close-outline" size={26} />

          <Qrcode />


        </View>

        <View style={{ marginTop: 30, width, height }}>
          <ScrollView pagingEnabled horizontal style={{ width, height }}>

            {images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={{ width, height, resizeMode: 'contain' }} />
            ))
            }
          </ScrollView>
        </View>

        <View style={{ marginTop: 10, marginLeft: 30 }}>
          <Profile
            onPress={() => this.goArtist_Screen()} />
          <NFT_name
            title = {'NATURE'}
            marginLeft = {20}
            onPress={() => this.goNFT_detailScreen()} />
          <Detail_main />
          <CustomButton
            onPress={() => this.goNFT_detailScreen()} />
        </View>

        <View>
          <Hot_text />
        </View>

        <View style={{ alignContent: 'center' }}>
          <Nft_simple_info />
          <Nft_simple_info />
          <Nft_simple_info />
        </View>

      </ScrollView>
    );
  }
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

  goWrongSearch() {
    //WrongSearch으로 이동
    this.props.navigation.navigate('WRONG');
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

  }
});

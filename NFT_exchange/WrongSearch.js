import React from 'react';
import { Image, TextInput, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


import Detail_main from './component/detail_main';
import CustomButton from './component/CustomButton';
import Nft_simple_info from './component/Nft_simple_info';






export default class MainScreen extends React.Component {

  
  render() {

   

    return (

      <ScrollView style={styles.container}>

        <View style={styles.topView}>
          <TouchableOpacity><Text style={styles.korbiBtn}>korbit</Text></TouchableOpacity>
          <TouchableOpacity><Text onPress={() => this.goLoginScreen()} style={styles.loginBtn}>로그인</Text></TouchableOpacity>
        </View>

        <View style={styles.midView}>

        
          <Icon style={styles.search} name="ios-search-outline" size={27} />

          <TextInput
            style={styles.searchbar}      
            placeholder="작품명 검색"
         />

          <Icon  style={styles.reset} name="close-outline" size={26} />

          <Icon style={styles.qrcode} name="qr-code-outline" size={26} />

          

        </View>

        <View style={{marginTop: 90,alignItems : 'center' }}>
        <Icon style={styles.sad} name="sad-outline" size={45} />
          <Text style={styles.wrong_text}>검색 결과를 찾을 수 없어요.</Text>
          <Text style={styles.wrong_text}>다른 검색어로 검색해주세요.</Text>
        </View>
       
       
        <View style={{marginTop: 120, marginLeft: 30, flexDirection: 'row',}}>
        <Icon style={styles.fire} name="flame" size={31} />
          <Text style={styles.hot_text}>핫한 작품</Text>
        </View>

        <View style={{alignContent: 'center'}}>
          <Nft_simple_info />
          <Nft_simple_info />
          <Nft_simple_info />
        </View>

      </ScrollView>
    );
  }
  goLoginScreen(){
    // LoginScreen으로 화면 이동
    this.props.navigation.navigate('LOGIN');
  }
  goSam_pleScreen(){
    //SampleScreen으로 이동
    this.props.navigation.navigate('SAMPLE');
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
    fontSize : 16

  },
  qrcode: {
    color: 'black',
    marginLeft : 10

  },
  sad: {
    color: 'black',
    marginBottom : 20,

  },
  
  fire: {
    color: 'red',
    marginLeft : 10,


  },
  wrong_text: {
    marginLeft : 10,
    marginBottom : 5,
    fontSize: 22,
    fontWeight : 'bold'

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

  }
});
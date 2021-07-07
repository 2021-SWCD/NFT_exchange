import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, } from 'react-native';
import Korbit_logo from './component/Korbit_logo';
import Login_btn from './component/Login_btn';
import Go_main from './component/go_main';
import Nft_simple_info_cardImage from './component/Nft_simple_info_cardImage';
import NFT_name from './component/NFT_name';
import Profile from './component/Profile';
import Detail_main from './component/detail_main';
import CustomButton from './component/CustomButton';
import Qrcode from './component/Qrcode';

/*이미지 주소 복사를 해서 링크를 붙여넣는다.*/
export default class NFT_detailScreen extends Component{
    render(){
      return(
        <ScrollView style={styles.container}>
          
          <View style={styles.topView}>
            <Korbit_logo
              onPress={() => this.goMainScreen()} />
            <Login_btn
              onPress={() => this.goLoginScreen()} />
          </View>

          <View style={styles.midView}>
            <Go_main 
              onPress={() => this.goMainScreen()}/>
            <Qrcode 
              marginLeft={240}
              marginTop={null}/>
          </View>

          <Nft_simple_info_cardImage 
            source={{uri:'https://cdn.eyesmag.com/content/uploads/posts/2020/09/29/studio-ghibli-releases-400-free-to-use-images-01-0be601c8-2b4d-41f7-ba3c-f3a1a19697a6.jpg'}}
            borderBottomLeftRadius = {20}
            borderBottomRightRadius = {20}
            marginLeft = {55}
            height = {450}/>

          <View style={styles.colum}>
            <Profile 
              title = {"hyunji"}
              onPress={() => this.goArtist_Screen()}/>
            <NFT_name 
              title = {"NATURE"}/>
            <Detail_main />
            <CustomButton />
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
    container:{
      flex:1, //뷰가 얼만큼의 가중치를 가지는 지 결정, 높을 수록 많은 영역을 차지함
      //justifyContent: 'center', //수직에서 중앙으로 정렬
      //alignItems:'center', //수평에서 중앙으로 정렬
      backgroundColor: 'white',
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
      marginTop: 10,
      marginLeft: 40,
    },
  
})
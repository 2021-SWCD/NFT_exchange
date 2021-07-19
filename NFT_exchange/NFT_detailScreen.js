import React, { Component } from 'react';
import { TouchableOpacity, Text, Modal, StyleSheet, View, Image, ScrollView, ShadowPropTypesIOS, } from 'react-native';
import Qrcode from './component/Qrcode';
import Go_main from './component/go_main';
import Nft_simple_info_cardImage from './component/Nft_simple_info_cardImage';
import NFT_name from './component/NFT_name';
import Profile from './component/Profile';
import NFT_detailScreen_detail_main from './component/NFT_detailScreen_detail_main';
import CustomButton from './component/CustomButton';
import TabBar from './component/TabBar';
import Warn_txt from './component/Warn_txt';
import Login_After from './LoginScreen';
import LoginAfterHeader from './component/LoginAfterHeader';
import LoginHeader from './component/loginHeader';

/*이미지 주소 복사를 해서 링크를 붙여넣는다.*/
export default class NFT_detailScreen extends Component {

  constructor() //모달 팝업창
  {
    super();
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
        {
          !!Login_After
          ? <LoginAfterHeader Header navigation={this.props.navigation}/>
          : <LoginHeader navigation={this.props.navigation}/>
        }

        <View style={styles.midView}>
          <View style={{ marginLeft: 3, marginBottom: 6, flexDirection: 'row', alignItems: 'flex-end' }}>

            <Go_main onPress={() => this.goMainScreen()} />

            <Qrcode />

          </View>
        </View>

        <Nft_simple_info_cardImage
          source={{ uri: 'https://cdn.eyesmag.com/content/uploads/posts/2020/09/29/studio-ghibli-releases-400-free-to-use-images-01-0be601c8-2b4d-41f7-ba3c-f3a1a19697a6.jpg' }}
          borderBottomLeftRadius={20}
          borderBottomRightRadius={20}
          marginLeft={55}
          height={450} />

        <View style={styles.colum}>
          <Profile
            title={"hyunji"}
            onPress={() => this.goArtist_Screen()} />
          <NFT_name
            title={"NATURE"} />
          <NFT_detailScreen_detail_main />

          <CustomButton onPress={() => {this.setState({ show: true }) }} />

          <View style={{ flex: 1, marginTop: 100 }}>
            <Modal
              transparent={true}
              visible={this.state.show}
            >

              <View style={{ backgroundColor: "grey", flex: 1 }}>


                <Warn_txt />


                <View style={{ alignItems: 'center', position:'absolute', justifyContent:'center',alignItems:'center',top:455 ,left:80}}>
                  <TouchableOpacity><Text onPress={() => this.goDetail_buy()} style={styles.pop_btn}>확인</Text></TouchableOpacity>
                </View>
              </View>

            </Modal>
          </View>





          <TabBar />
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
  goDetail_buy() {
    // Detail_buy로 화면 이동
    this.props.navigation.navigate('BUY');
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, //뷰가 얼만큼의 가중치를 가지는 지 결정, 높을 수록 많은 영역을 차지함
    //justifyContent: 'center', //수직에서 중앙으로 정렬
    //alignItems:'center', //수평에서 중앙으로 정렬
    backgroundColor: 'white',
  },



  pop_btn: {
    height: 41,
    marginTop: 10,
    width: 260,
    backgroundColor: '#0064ff',
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
    paddingTop: 10,
    paddingLeft: 120,
    borderRadius: 3,
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
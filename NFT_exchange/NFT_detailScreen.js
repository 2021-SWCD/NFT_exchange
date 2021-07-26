import React, { Component } from 'react';
import {
  TouchableWithoutFeedback, TouchableOpacity, Text,
  Modal, StyleSheet, View, Image, ScrollView
} from 'react-native';
import { LoginHeader, LoginAfterHeader } from './component/common/logIn';
import { CardImage, Nft_name, Profile } from './component/common/commonElement'
import CustomButton from './component/common/commonElement/CustomButton';
import Go_main from './component/common/goMain/go_main';
import NFT_detailScreen_detail_main from './component/NFT_detailScreen_detail_main';
import TabBar from './component/TabBar';
import Warn_txt from './component/Warn_txt';
import AsyncStorage from '@react-native-community/async-storage';

/*이미지 주소 복사를 해서 링크를 붙여넣는다.*/
export default class NFT_detailScreen extends Component {

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
    return (
      <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
        {
          this.state.isLoggedIn
            ? <LoginAfterHeader navigation={this.props.navigation} />
            : <LoginHeader navigation={this.props.navigation} />
        }

        <Go_main navigation={this.props.navigation} />

        <CardImage
          navigation={this.props.navigation}
          source={{ uri: 'https://cdn.eyesmag.com/content/uploads/posts/2020/09/29/studio-ghibli-releases-400-free-to-use-images-01-0be601c8-2b4d-41f7-ba3c-f3a1a19697a6.jpg' }}
          borderBottomLeftRadius={20}
          borderBottomRightRadius={20}
          marginLeft={55}
          marginTop={20}
          height={450}
        />

        <View style={styles.colum}>
          <Profile
            title={"hyunji"}
            marginLeft={20}
            navigation={this.props.navigation} />
          <Nft_name
            title={"NATURE"}
            marginLeft={20}
            navigation={this.props.navigation} />

          <NFT_detailScreen_detail_main />

          {
            this.state.isLoggedIn

              ? <CustomButton
                titlemarginLeft={30}
                button_marginLeft={10}

                onPress={() => this.setState({ show: true })} />
              
              : <CustomButton
                titlemarginLeft={30}
                button_marginLeft={10}

                onPress={()=>this.goLoginScreen()}/>
  
  
              
          }


          <View style={{ flex: 1, marginTop: 100 }}>
            <Modal
              transparent={true}
              visible={this.state.show}
            >
              <TouchableWithoutFeedback onPress={() => { this.close_modal() }}>
                <View style={{ backgroundColor: "grey", flex: 1 }}>


                  <Warn_txt />


                  <View style={{ alignItems: 'center', position: 'absolute', justifyContent: 'center', alignItems: 'center', top: 455, left: 80 }}>
                    <TouchableOpacity>
                      <Text
                        onPress={() => this.goDetail_buy()} style={styles.pop_btn}>확인</Text></TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
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
  close_modal = () => {
    this.setState({ show: false })
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
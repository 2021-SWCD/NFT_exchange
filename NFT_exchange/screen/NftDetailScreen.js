import React, { Component } from 'react';
import { TouchableWithoutFeedback, TouchableOpacity, Text, Modal, StyleSheet, View, ScrollView } from 'react-native';
import LoginHeader from '../component/common/logIn/LoginHeader';
import { LoginAfterHeader } from '../component/common/logIn';
import { CardImage, Nft_name, Profile, CustomButton } from '../component/common/commonElement'
import Go_main from '../component/common/gomain/go_main';
import Detail_main from '../component/common/commonElement/Detail_main';
import TabBar from '../component/nftdetail/TabBar';
import Warn_txt from '../component/nftdetail/WarnTxt';
import AsyncStorage from '@react-native-community/async-storage';


export default class NFT_detailScreen extends Component {
//주석
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
            marginTop={10}
            marginLeft={20} 
            navigation={this.props.navigation} />
          <Nft_name
            title={"NATURE"}
            marginLeft={20} 
            navigation={this.props.navigation}/>
          <Detail_main 
            cur_title={'0.01'}
            cost_title={'10,000'}/>
          

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

          <View style={{ flex: 1, marginTop: 30 }}>
            <Modal
              transparent={true}
              visible={this.state.show}
            >
              <TouchableWithoutFeedback onPress={() => { this.close_modal() }}>
                <View style={styles.warnContainer}>


                  <Warn_txt />


                  <View style={styles.btnContainer}>

                    <TouchableOpacity>

                      <Text
                        onPress={() => this.goDetail_buy()} style={styles.pop_btn}>확인
                      </Text>
                    </TouchableOpacity>
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
    flex: 1, 
    backgroundColor: 'white',
  },


  colum: {
    width: '80%',
    height: '25%',
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 40,
  },

  modalContainer: {
    flex: 1,
    marginTop: 100,
  },

  warnContainer: {
    backgroundColor: "grey",
    flex: 1
  },

  btnContainer: {
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 455,
    left: 80
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

})

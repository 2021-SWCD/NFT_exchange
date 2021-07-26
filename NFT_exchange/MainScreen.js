import React from 'react';
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity
} from 'react-native';
import { LoginHeader, LoginAfterHeader } from './component/common/logIn';
import AsyncStorage from '@react-native-community/async-storage';
import NftSimpleInfoCard from './component/common/nftSimpleInfoCard/NftSimpleInfoCard';
import Hot_text from './component/Hot_text';
import Slide from './component/main/slide/Slide';
import Search from './component/common/search/Search';


/* const { width } = Dimensions.get("window");
const height = width * 0.5;
var start = 0;

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
 */


export default class MainScreen extends React.Component {

  constructor() //모달 팝업창
  {
    super();
    this.state = {
      show: false,
      isLoggedIn: false,
    }
  }

  /* async componentDidMount () {
    AsyncStorage.getItem('logIncom', (err, logIncom) => {
      console.log('Login_after'); // User1 출력
      this.setState({ isLoggedIn : logIncom })
    });
  } */

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
    const logIn = this.state.isLoggedIn;
    console.log('logIn');
    console.log(logIn);

    return (
      <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
        {/* <LoginHeader navigation={this.props.navigation}/> */}
        {
          this.state.isLoggedIn
            ? <LoginAfterHeader navigation={this.props.navigation} />
            : <LoginHeader navigation={this.props.navigation} />
        }

        <Search navigation={this.props.navigation} />



        <Slide navigation={this.props.navigation} />

        {/* <ScrollView
            pagingEnabled
            horizontal
            style={{ width, height }}
            ref={ref => (this.scrollView = ref)}>



            {dataList.map((element, index) => (
              <View key={index}>
                <Image
                  key={index}
                  source={{ uri: element.imageUrl }}
                  style={{ width, height, resizeMode: 'contain' }} />

                <Slide_profile
                  title={element.title}
                  onPress={() => this.goArtist_Screen()}
                />


                <NFT_name
                  title={element.content}
                  marginLeft={50}
                  fontSize={45}
                  onPress={() => this.goNFT_detailScreen()} />


                <View style={{ marginTop: 5, marginLeft: 50 }}>

                  <Slide_txt1 />

                  <Slide_txt2 />


                  <Text style={{ marginTop: 5 }}>10.000원</Text>

                </View>


                <CustomButton
                  button_marginLeft={48}
                  onPress={() => this.goNFT_detailScreen()} />

              </View>

            ))


            }


          </ScrollView> */}




        <View>
          <Hot_text />
        </View>

        {/*NftSimpleInfoCard*/}
        <View style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
          <NftSimpleInfoCard navigation={this.props.navigation}/>
        </View>

        {/* <TouchableOpacity
          style={{ position: 'absolute', top: 360, left: 5, }}
          onPress={() => this.leftPage()}
        >
          <Icon style={{ margin: 5 }} name="chevron-back" size={35} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ position: 'absolute', top: 360, right: 5, }}
          onPress={() => this.rightPage()}
        >
          <Icon style={{ margin: 5 }} name="chevron-forward" size={35} />
        </TouchableOpacity> */}

      </ScrollView>
    );
  }

  /* leftPage = () => {

    start -= width

    if (start <= width * -1) {
      start = width * 4
    }

    this.scrollView.scrollTo({
      x: start
    })


  }
  rightPage() {

    start += width

    if (start >= width * 5) {
      start = 0
    }

    this.scrollView.scrollTo({
      x: start
    })


  } */
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

  goWrongSearch = () => {
    // console.log(this.props);
    //WrongSearch으로 이동
    this.props.navigation.navigate('WRONG');
  }
  goMainScreen() {
    //MainScreen으로 이동
    this.props.navigation.navigate('MAIN');
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

  topView: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },


  search: {
    color: 'black',
    marginLeft: 22
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
});
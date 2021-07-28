import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import NftSimpleInfoCard from '../component/common/nftsimpleinfocard/NftSimpleInfoCard';
import {LoginAfterHeader, LoginHeader} from '../component/common/login';
import GoMain from '../component/common/gomain/GoMain';
import {
  Profile_img,
  Profile_name,
  Profile_text,
} from '../component/artist/artistelement';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../src/config/i18n';

export default class Artist_Screen extends Component {
  constructor() { //모달 팝업창
    super();
    this.state = {
      show: false,
      isLoggedIn: false,
    };
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
      console.log('Login_after');
      this.setState({isLoggedIn: JSON.parse(result)});
    });
  };

  render() {
    return (
      <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
        {this.state.isLoggedIn ? (
          <LoginAfterHeader navigation={this.props.navigation} />
        ) : (
          <LoginHeader navigation={this.props.navigation} />
        )}

        <GoMain navigation={this.props.navigation} />

        <View style={styles.informContainer}>
          <Image
            style={styles.mainImage}
            source={{
              uri: 'https://cdn.eyesmag.com/content/uploads/posts/2020/09/29/studio-ghibli-releases-400-free-to-use-images-01-0be601c8-2b4d-41f7-ba3c-f3a1a19697a6.jpg',
            }}
          />

          <Icon style={styles.share} name="share-social" size={31} />

          <Profile_name title={'hyunji'} />

          <Profile_text title={I18n.t('welcome')} />

          <Icon style={styles.copy} name="copy-outline" size={25} />

          <Profile_text title={'오늘도 멋진 작품을!'} />

          <View style={styles.iconContainer}>
            <Icon style={styles.twit} name="logo-twitter" size={31} />
            <Icon style={styles.insta} name="logo-instagram" size={31} />
          </View>

          <View style={styles.producContainer}>
            <Text style={styles.product}>{I18n.t('art')}</Text>
          </View>
        </View>

        <View style={styles.colum}>
          <Profile_img />
        </View>

        {/*NftSimpleInfoCard*/}

        <View style={styles.cardContainer}>
          <NftSimpleInfoCard navigation={this.props.navigation} />
        </View>
      </ScrollView>
    );
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
  goNFT_detailScreen() {
    //SampleScreen으로 이동
    this.props.navigation.navigate('SUGESST');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  informContainer: {
    height: 570,
  },
  cardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  mainImage: {
    width: '100%',
    height: 225,
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
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 160,
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

  producContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  colum: {
    width: '80%',
    height: '25%',
    flexDirection: 'column',
    marginTop: 290,
    marginLeft: 40,
    position: 'absolute',
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
});

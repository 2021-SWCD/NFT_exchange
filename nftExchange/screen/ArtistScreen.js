import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import NftSimpleInfoCard from '../src/component/common/nftsimpleinfocard/NftSimpleInfoCard';
import {LoginAfterHeader, LoginHeader} from '../src/component/common/login';
import GoMain from '../src/component/common/gomain/GoMain';
import {
  ProfileImg,
  ProfileName,
  ProfileText,
} from '../src/component/artist/artistelement';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../src/config/i18n';
import { connect } from 'react-redux';

class ArtistScreen extends Component {
  constructor() { //모달 팝업창
    super();
    this.state = {
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
    const {title,imageUrl} = this.props.page;
    return (
      <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
        {this.state.isLoggedIn ? (
          <LoginAfterHeader navigation={this.props.navigation} />
        ) : (
          <LoginHeader navigation={this.props.navigation} />
        )}

        <GoMain navigation={this.props.navigation} />

        <View style={styles.backGroundImageContainer}>
          <Image
            style={styles.backGroundImage}
            source={{
              uri: imageUrl,
            }}
          />

          <Icon style={styles.share} name="share-social" size={31} />

          <ProfileName title={title} />

          <ProfileText title={I18n.t('coinAccount')} />

          <Icon style={styles.copy} name="copy-outline" size={25} />

          <ProfileText title={I18n.t('artistComment')} />

          <View style={styles.iconContainer}>
            <Icon style={styles.twit} name="logo-twitter" size={31} />
            <Icon style={styles.insta} name="logo-instagram" size={31} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{I18n.t('art')}</Text>
          </View>
        </View>

        <View style={styles.colum}>
          <ProfileImg />
        </View>

        {/*NftSimpleInfoCard*/}

        <View style={styles.cardContainer}>
          <NftSimpleInfoCard navigation={this.props.navigation} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  backGroundImageContainer: {
    height: 570,
  },

  cardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  backGroundImage: {
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

  titleContainer: {
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

  title: {
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

function mapStateToProps(state) {
  return {
    page : state.page,
  };
}

export default connect(mapStateToProps)(ArtistScreen);
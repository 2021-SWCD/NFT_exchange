import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './Profile';
import I18n from '../../../../src/config/i18n';

export default class QrWallet extends React.Component {
  static defaultProps = {
    title: 'untitled',
    color: 'black',
    marginLeft: 40,
    marginTop: 10,
    onPress: () => null,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bottomViewContainer}>
          <View style={styles.topViewContainer}>
            <View style={styles.rowArray}>
              <Profile
                title={'minj-j'}
                marginLeft={15}
                fontSize={20}
                navigation={this.props.navigation}></Profile>
              <TouchableOpacity onPress={() => this.goArtistScreen()}>
                <Icon name="chevron-forward-outline" size={30}></Icon>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.warnContainer}>
            <Text style={styles.guidetext}>
              {I18n.t('notLoginStateContent1')}
            </Text>
            <Text style={styles.guidetext}>
              {I18n.t('notLoginStateContent2')}
            </Text>
            <Image
              source={{
                uri: 'https://blog.kakaocdn.net/dn/bqqWTy/btqDQtYuJua/X1KNO1U3u3kzWQBunWOVCK/img.jpg',
              }}
              style={styles.qrContainer}
            />
          </View>
        </View>
      </View>
    );
  }
  goArtistScreen() {
    // ARTIST_screen으로 화면 이동
    this.props.navigation.navigate('ARTIST');
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 100,
    top: 5,
    flex: 1, //뷰가 얼만큼의 가중치를 가지는 지 결정, 높을 수록 많은 영역을 차지함
    alignItems: 'center', //수평에서 중앙으로 정렬
    marginTop: 110,
  },

  rowArray: {
    //프로필, 이름등을 가지고 있는 가로 정렬을 위한 요소
    width: '95%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  topViewContainer: {
    backgroundColor: '#d3d3d3',
    borderTopLeftRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
    borderTopRightRadius: 20,
    width: 300,
    height: 70,
  },

  bottomViewContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
    width: 300,
    height: 350,
  },

  warnContainer: {
    alignItems: 'center',
    marginTop: 15,
  },

  qrContainer: {
    width: 200,
    height: 200,
  },

  guidetext: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

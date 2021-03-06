import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {LoginAfterHeader, LoginHeader} from '../src/component/common/login';
import NftSimpleInfoCard from '../src/component/common/nftsimpleinfocard/NftSimpleInfoCard';
import {HotText} from '../src/component/common/commonelement';
import AsyncStorage from '@react-native-community/async-storage';
import Search from '../src/component/common/search/Search';
import {WrongText} from '../src/component/wrong/wrongelement';

export default class WrongSearch extends React.Component {
  constructor() {
    //모달 팝업창
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.onLoad();
    console.log('WrongSearch_componentDidMount');
  }

  onLoad = () => {
    this.props.navigation.addListener('focus', () => {
      this.checkLoginStatus();
      console.log('WrongSearch_onLoad');
    });
  };

  checkLoginStatus = () => {
    AsyncStorage.getItem('logIncom', (err, result) => {
      console.log('WrongSearch_LoginAfter');
      this.setState({isLoggedIn: JSON.parse(result)});
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.isLoggedIn ? (
          <LoginAfterHeader navigation={this.props.navigation} />
        ) : (
          <LoginHeader navigation={this.props.navigation} />
        )}

        <Search navigation={this.props.navigation} />

        <WrongText />

        <HotText />

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

  cardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

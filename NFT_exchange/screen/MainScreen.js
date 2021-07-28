import React from 'react';
import { StyleSheet, View, ScrollView, } from 'react-native';
import { LoginAfterHeader, LoginHeader } from '../component/common/login';
import AsyncStorage from '@react-native-community/async-storage';
import NftSimpleInfoCard from '../component/common/nftsimpleinfocard/NftSimpleInfoCard';
import { Hot_text } from '../component/common/commonElement';
import Slide from '../component/main/slide/Slide';
import Search from '../component/common/search/Search';

export default class MainScreen extends React.Component {
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
      console.log('Login_after');
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

        <Hot_text /> 

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

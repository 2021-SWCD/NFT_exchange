import React from 'react';
import {View, StyleSheet} from 'react-native';
import {EthBtn, KorbitLogo} from './loginelement';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';



export default class LoginAfterHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      userEmail: '',
      eth: '',
    };
  }

  componentDidMount() {
    this.onLoad();
    AsyncStorage.getItem('userEmail', (err, result) => {
      console.log('loginafterheader_useremail불러오기');
      this.setState({userEmail: JSON.parse(result)});
      console.log('userEmail출력', this.state.userEmail);
      firestore()
        .collection('user')
        .doc(this.state.userEmail)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            
            const document = documentSnapshot.data();
            this.setState({eth: document.eth});
            console.log('eth_firestore :', this.state.eth);
          }
        });
      console.log('loginAfterHeader eth설정_componentdidmount');
    });
  }

  onLoad = () => {
    this.props.navigation.addListener('focus', () => {
      this.checkEthStatus();
      console.log('loginAfterHeader eth설정_onload');
    });
  };

  checkEthStatus = () => {
    // ETH 초기값 할당
    firestore()
      .collection('user')
      .doc(this.state.userEmail)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          const document = documentSnapshot.data();
          this.setState({eth: document.eth});
          console.log('eth_firestore :', this.state.eth);
        }
      });
  };

  render() {
    

    return (
      <View style={styles.topView}>
        <KorbitLogo onPress={() => this.goMainScreen()} />
        <EthBtn
          title={this.state.eth + ' ETH'}
          onPress={() => this.goLogoutScreen()}
        />
      </View>
    );
  }
  goMainScreen() {
    //MainScreen으로 이동
    this.props.navigation.navigate('MAIN');
  }
  goLogoutScreen() {
    //MainScreen으로 이동
    this.props.navigation.navigate('LOGOUT');
  }
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

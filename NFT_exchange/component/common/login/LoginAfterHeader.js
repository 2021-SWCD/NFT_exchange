import React from 'react';
import {View, StyleSheet} from 'react-native';
import {EthBtn, KorbitLogo} from './loginelement';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import {cos} from 'react-native-reanimated';

var user = '';

export default class LoginAfterHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ethCost: 80,
      userEmail: '',
      eth: '',
      ethFire: '',
    };
  }

  componentDidMount() {

    AsyncStorage.getItem('userEmail', (err, result) => {
      console.log(result);
      this.setState({userEmail: result});
      console.log('userEmail출력',this.state.userEmail);
      user = this.state.userEmail



      firestore()
      .collection('user')
      .doc(user)
      .get()
      .then(documentSnapshot => {
        
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          const document = documentSnapshot.data();
          this.setState({ethFire: document.eth});
          console.log('eth_fire :' ,this.state.ethFire )

        }
      });

      
    });

    console.log('userEmail출력2',this.state.userEmail);

    

    /* firestore()
      .collection('user')
      .get()
      .then(querySnapshot => {
        
        querySnapshot.forEach(documentSnapshot => {
          console.log(
            '스냅샷 data',
            documentSnapshot.data(),
          );

          const document = documentSnapshot.data();
          console.log('불러오기 성공',document.eth)
          this.state.ethFire = document.eth; 
          console.log("eth state : ",this.state.ethFire)

          AsyncStorage.setItem('firestore_eth', JSON.stringify(document.eth), () => {
            console.log('eth_스토리지에 저장');
          });
        });
      }); 


      AsyncStorage.getItem('firestore_eth', (err, result) => {
        console.log('firestore_eth값',result);
        
      }); */

    this.onLoad();
    AsyncStorage.getItem('ETH', (err, result) => {
      console.log(result);
      this.setState({ethCost: result});
    });
    console.log('loginAfterHeader eth설정_componentdidmount');


    console.log('eth_fire2 :' ,this.state.ethFire )
    AsyncStorage.getItem('userEmail', (err, result) => {
      console.log('loginafterheader_useremail불러오기');
      this.setState({userEmail: JSON.parse(result)});
    });
  }

  onLoad = () => {
    this.props.navigation.addListener('focus', () => {
      this.checkEthStatus();
      console.log('loginAfterHeader eth설정_onload');
      console.log('eth_fire3 :' ,this.state.ethFire )
    });
  };

  checkEthStatus = () => {
    // ETH 초기값 할당
    AsyncStorage.getItem('ETH', (err, result) => {
      console.log(result);
      this.setState({ethCost: result});
    });
    console.log('eth_fire4 :' ,this.state.ethFire )
  };

  render() {
    console.log('왜안돼//',this.state.ethFire)

    return (
      <View style={styles.topView}>
        <KorbitLogo onPress={() => this.goMainScreen()} />
        <EthBtn
          title={this.state.ethFire + ' ETH'}
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

import React from 'react';
import { Image,TextInput,StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class Logout extends React.Component {

  render() {
    return (
      
    <View style={styles.container}>  

          <TouchableOpacity>
            <Text 
              onPress={() => {this.goMainScreen();this.Login()}} 
              style={styles.loginBtn}>
                로그아웃
            </Text>
          </TouchableOpacity>

      </View>

    );
  }
  Login(){
    AsyncStorage.setItem('logIncom', JSON.stringify(false), () => {
      console.log('로그인 완료')
  });

  let a = 80;

  AsyncStorage.setItem('ETH', a.toString(), () => {
    console.log('로그인 완료')
  
});

  AsyncStorage.getItem('logIncom',(err,logComplete) => {
      console.log(logComplete) //true값이 잘 나오는지 확인
  })
  }

  goMainScreen(){
    // MainScreen으로 화면 이동
    this.props.navigation.navigate('MAIN');
  }
  
  Login_after(){
    // MainScreen으로 화면 이동
    this.props.navigation.navigate('LOGIN_AFTER');
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor : 'white'
  },
  korbiBtn:{
   marginLeft:50,
   marginTop:30,
   marginBottom:10,
   fontSize: 25,
   fontWeight:'bold', 
  },
  login:{
   marginLeft:50,
   marginRight:20,
   marginTop:25,
   marginBottom:10,
   fontSize: 28,
   fontWeight:'bold', 
  },
  safe_txt:{
   marginTop : 10,
   marginLeft:50,
   marginRight:20,
   fontSize: 14,
  
  },
  link_txt:{
   marginTop : 8,
   marginLeft:50,
   marginRight:20,  
   marginBottom:20,  
   fontSize: 14,
   flexDirection: 'row'
  },
 
  
  input:{
    height : 51,
    marginTop : 16,
    marginLeft: 50,
    marginRight: 30,
    width : 310, 
    borderWidth : 0.8,
    borderColor : '#AAAAAA',
    paddingLeft : 15,
    borderRadius : 3,
    
  },
  shield:{
    color : '#0064ff',
    marginRight : 10,
   
  },
  linkblue_txt:{
   color : '#0064ff',
 
 },
 linkgrey_txt:{
   color : 'grey',
 
 },

 loginBtn:{
   height : 51,
   marginTop : 40,
   marginLeft: 50,
   marginRight: 30,
   width : 310, 
   backgroundColor : '#0064ff',
   fontSize: 15,
   fontWeight:'normal',    
   color : 'white', 
   paddingTop : 16,
   paddingLeft : 132,
   borderRadius : 3,
  },
 
  
});

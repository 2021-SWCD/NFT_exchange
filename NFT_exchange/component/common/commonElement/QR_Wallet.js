import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Profile from '../../Profile';

//이미지 주소 복사를 해서 링크를 붙여넣는다.
export default class QR_Wallet extends React.Component{
  static defaultProps = {
    title: 'untitled',
    color: 'black',
    marginLeft: 40,
    marginTop: 10,
    onPress: () => null,
  }
  constructor(props){
    super(props);
  }  
  render(){
      return(
        <View style={styles.container}>
          <View style={styles.Bottom_Container}>
            <View style={styles.Top_Container}>
              <View style={styles.elem}>
                <Profile 
                  title = {'minj-j'}
                  marginTop = {20}>
                </Profile>
              </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <Text style={styles.wrong_text}>이더리움을 입금하려면</Text>
              <Text style={styles.wrong_text}>아래 QR코드를 스캔하세요</Text>
              <Image source={{uri: 'https://blog.kakaocdn.net/dn/bqqWTy/btqDQtYuJua/X1KNO1U3u3kzWQBunWOVCK/img.jpg'}}
                style={{width: 200, height: 200}} />
            </View>
          </View>
        </View>
      )
    }
  goArtist_Screen() {
    // ARTIST_screen으로 화면 이동
    this.props.navigation.navigate('ARTIST');
  }
}
    
const styles = StyleSheet.create({
    container:{
      flex:1, //뷰가 얼만큼의 가중치를 가지는 지 결정, 높을 수록 많은 영역을 차지함
      justifyContent: 'center', //수직에서 중앙으로 정렬
      alignItems:'center', //수평에서 중앙으로 정렬
    },

    elem: { //프로필, 이름등을 가지고 있는 가로 정렬을 위한 요소
      width: '95%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    Top_Container:{
      backgroundColor: '#d3d3d3',
      borderTopLeftRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
      borderTopRightRadius: 20, 
      width:300,
      height: 70,
    },
    
    Bottom_Container:{
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
      width:300,
      height: 350,
    },

    wrong_text: {
      marginBottom: 5,
      fontSize: 18,
      fontWeight: 'bold'
    },
})
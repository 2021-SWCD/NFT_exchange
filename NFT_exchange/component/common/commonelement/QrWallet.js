import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './Profile';


export default class QrWallet extends React.Component{
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
                  marginLeft={15}
                  fontSize = {20}
                  navigation={this.props.navigation}>
                </Profile>
                <TouchableOpacity onPress={() => this.goArtist_Screen()}>
                 <Icon
                  name="chevron-forward-outline" size={30}></Icon>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.QR_Container}>
              <Text style={styles.wrong_text}>{I18n.t('notLoginStateContent1')}</Text>
              <Text style={styles.wrong_text}>{I18n.t('notLoginStateContent1')}</Text>
              <Image source={{uri: 'https://blog.kakaocdn.net/dn/bqqWTy/btqDQtYuJua/X1KNO1U3u3kzWQBunWOVCK/img.jpg'}}
                style={styles.Code_Container} />
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
      position : 'absolute',
      left : 100,
      top : 5,
      flex:1, //뷰가 얼만큼의 가중치를 가지는 지 결정, 높을 수록 많은 영역을 차지함
      alignItems:'center', //수평에서 중앙으로 정렬
      marginTop:110
    },

    elem: { //프로필, 이름등을 가지고 있는 가로 정렬을 위한 요소
      width: '95%',
      marginTop: 20,
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

    QR_Container : {
      alignItems: 'center', 
      marginTop: 15
    },
    Code_Container : {
      width: 200, 
      height: 200
    },

    wrong_text: {
      marginBottom: 5,
      fontSize: 18,
      fontWeight: 'bold'
    },
})

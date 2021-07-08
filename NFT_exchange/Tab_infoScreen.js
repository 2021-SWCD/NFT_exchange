//탭바 정보 탭의 정보 스크린
import React from 'react';
import { Text, View, } from 'react-native';
import NFT_detailScreen_Profile from './component/NFT_detailScreen_Profile';

export default class Tab_infoScreen extends React.Component {
  render(){
    return (
      <View style={{ 
        flex: 1, 
        marginTop: 30,
        height: 300,}}>
        <Text style={{fontSize : 25, fontWeight: 'bold',}}>작품 설명</Text>
        <Text style={{fontSize : 15, marginTop: 15, marginBottom: 15,}}>The only non-fungible</Text>
        <Text style={{fontSize : 25, fontWeight: 'bold',}}>소유자</Text>
        <View style={{marginTop: 20, borderTopWidth: 0.5, borderColor: '#DCDCDC',}}/>
        <NFT_detailScreen_Profile 
        title = {'hyunji'}/>
        <View style={{marginTop: 20, borderTopWidth: 0.5, borderColor: '#DCDCDC',}}/>
      </View>
    );
  }
}
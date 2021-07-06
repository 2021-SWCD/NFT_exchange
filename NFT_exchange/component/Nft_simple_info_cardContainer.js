import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Nft_simple_info_cardContainer extends Component{
    render(){
      return(
        <View style={styles.container}>
          <View style={styles.cardContainer} />
        </View>
      )
    }
}
    
const styles = StyleSheet.create({
      container:{
        flex:1, //뷰가 얼만큼의 가중치를 가지는 지 결정, 높을 수록 많은 영역을 차지함
        justifyContent: 'center', //수직에서 중앙으로 정렬
        alignItems:'center', //수평에서 중앙으로 정렬
        marginTop: 20,
        marginBottom: 20,
      },
      cardContainer:{
        backgroundColor: '#d3d3d3',
        borderRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
        width:300,
        height: 400,
      },
})
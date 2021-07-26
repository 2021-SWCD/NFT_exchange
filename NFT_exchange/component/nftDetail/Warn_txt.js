
import React, { Component } from 'react';
import { StyleSheet,View,Text, } from 'react-native';

export default class Warn_txt extends Component {

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.main_txt}> 제안/구매 유의사항</Text>

                <View
                    style={styles.textContainer}
                />

                <Text style={styles.sub_txt}> •구매를 하기 위한 가격 제안 시, 네트워크 수수료가 발생합니다.</Text>
                <Text style={styles.sub_txt}> •회원은 구매를 완료한 작품은 환불할 수 없으며 그에 따른 비용 또는 손해에 대하여 코빗은 책임지지 않습니다.</Text>
                <Text style={styles.sub_txt}> •구매한 작품은 프로필의 구매에서 확인할 수 있습니다.</Text>
                <Text style={styles.sub_txt}> •기타 궁금하신 사항은 코빗 고객센터로 문의바랍니다.</Text>

</View>)}}

const styles = StyleSheet.create({

  container : { 
    backgroundColor: '#ffffff', 
    marginTop: 100, 
    marginRight: 30, 
    marginLeft: 30, 
    padding: 40, 
    height: 430 
  },

  textContainer : {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
    
  
    main_txt: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  
    sub_txt: {
      marginTop: 10,
      fontSize: 15,
    },
  
  
  })

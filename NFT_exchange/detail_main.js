import React from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, TouchableOpacityBase} from 'react-native';
import 'react-native-gesture-handler';
import Timer_main_detail from './component/Timer_main_detail';

export default class Detail_main extends React.Component {
  render(){
    return (
        <View style={styles.container}>
          <View style={styles.elem}>
            <View style={styles.user_profile}/>
            <Text style={styles.user_name}>hyunji</Text>
          </View>

          <Text style={styles.nft_name}>NATURE</Text>

          <View style={styles.elem}>
            <View style={styles.cost_colum}>
              <Text style={styles.cost_time_text}>현재 경매가</Text>
              <Text style={styles.cost_time_bold_text}>0.1 ETH</Text>
            </View>

            <View style={styles.cost_colum}>
              <Text style={styles.cost_time_text}>남은 시간</Text>
              <Timer_main_detail />
            </View>
          </View>

          <View style={styles.elem}>
            <Text style={styles.cost_time_text}>10.000원</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({ //원하는 구성 요소들은 여기서 설정해줘야 한다.
  container: {
    flex:1,
  },
  
  elem: { //프로필, 이름등을 가지고 있는 가로 정렬을 위한 요소
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  user_profile: { //검정색 원의 프로필
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'black',
    marginLeft: 20,
  },
  user_name: {
    fontSize: 20,
    paddingLeft: 20,
  },

  nft_name: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },

  cost_colum: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 10,
  },

  cost_time_text: {
    fontSize: 15,
    marginLeft: 20,
  },

  cost_time_bold_text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
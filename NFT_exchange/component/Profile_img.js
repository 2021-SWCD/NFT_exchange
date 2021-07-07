//Artist_Screen과 이어짐
import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import 'react-native-gesture-handler';

export default class Profile_img extends React.Component {
      
    render(){
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                
                  <View style={styles.user_profile}/>
                 
                
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({ //원하는 구성 요소들은 여기서 설정해줘야 한다.
    elem: { //프로필, 이름등을 가지고 있는 가로 정렬을 위한 요소
      width: '40%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  
    user_profile: { //검정색 원의 프로필
      width: 110,
      height: 110,
      borderRadius: 55,
      backgroundColor: 'skyblue',
      
      marginLeft: 110,
      
    },
});
//Artist폴더 만든후 아티스트 요소에 넣기
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';

export default class ProfileImg extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.user_profile} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  //원하는 구성 요소들은 여기서 설정해줘야 한다.

  user_profile: {
    //검정색 원의 프로필
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: 'black',
    marginLeft: 110,
  },
});

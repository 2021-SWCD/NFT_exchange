//Artist_Screen과 이어짐
import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import 'react-native-gesture-handler';

export default class NFT_detailScreen_Profile extends React.Component {
    static defaultProps = {
      title: 'untitled',
      titleColor: 'black',
      fontSize: 20,
      marginRight: null,
      onPress: () => null,
    }
    constructor(props){
      super(props);
    }    
    render(){
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.elem}>
                  <View style={styles.user_profile}/>
                  <Text style={[
                    {color: this.props.titleColor},
                    {fontSize: this.props.fontSize},
                    {marginTop: 20},
                    {marginRight: this.props.marginRight},
                  ]}>{this.props.title}</Text>
                </View>
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
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'black',
      marginTop: 20,
    },
});
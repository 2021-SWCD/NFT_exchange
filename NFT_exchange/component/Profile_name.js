//Artist_Screen과 이어짐
import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import 'react-native-gesture-handler';

export default class Profile_name extends React.Component {
    static defaultProps = {
      title: 'untitled',
      titleColor: 'black',
      fontSize: 30,
      fontWeight:'bold',
      marginLeft:165,
      marginTop:30,
      marginBottom:30,
      onPress: () => null,
    }
    constructor(props){
      super(props);
    }    
    render(){
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View>                  
                  <Text style={[
                    {color: this.props.titleColor},
                    {fontSize: this.props.fontSize},
                    {marginTop: this.props.marginTop},
                    {marginBottom: this.props.marginBottom}, 
                    {marginLeft: this.props.marginLeft},
                    {fontWeight: this.props.fontWeight},
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
  
   
});
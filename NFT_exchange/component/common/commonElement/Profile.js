//Artist_Screen과 이어짐
import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import 'react-native-gesture-handler';

export default class Profile extends React.Component {
    static defaultProps = {
      title: 'untitled',
      titleColor: 'black',
      fontSize: 20,
      marginTop: null,
      marginLeft: null,
      name_marginLeft :8,
      name_marginTop: null,
      name_width : 150,
      name_height: 30,
      profile_width: 30,
      profile_height: 30,
      profile_marginTop: null,
      profile_borderRadius: 25,
      profile_backgroundColor: 'black',
      onPress: () => null,
    }
    constructor(props){
      super(props);
    }    
    render(){
        return (
        <TouchableOpacity onPress={() => this.goArtist_Screen()} >
          <View style={[
            styles.row,
            {marginTop: this.props.marginTop},
            {marginLeft: this.props.marginLeft},
          ]}>
            <View style={[
              {width: this.props.profile_width},
              {height: this.props.profile_height},
              {marginTop: this.props.profile_marginTop},
              {borderRadius: this.props.profile_borderRadius},
              {backgroundColor: this.props.profile_backgroundColor},
            ]}/>
            <Text style={[
              {fontSize: this.props.fontSize},
              {color: this.props.titleColor},
              {marginLeft: this.props.name_marginLeft},
              {marginTop: this.props.name_marginTop},
              {width: this.props.name_width},
              {height: this.props.name_height},
            ]}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
    )
  }
  goArtist_Screen() {
    // ARTIST_screen으로 화면 이동
    this.props.navigation.navigate('ARTIST');
  }
}

const styles = StyleSheet.create({ //원하는 구성 요소들은 여기서 설정해줘야 한다.
    row: { //프로필, 이름등을 가지고 있는 가로 정렬을 위한 요소
      //marginTop: 10,
      //marginBottom: 10,
      flexDirection: 'row',
    },
});
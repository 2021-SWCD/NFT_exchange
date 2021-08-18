//Artist_Screen과 이어짐
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';

export default class Profile extends React.Component {
  static defaultProps = {
    title: 'untitled',
    titleColor: 'black',
    fontSize: 20,
    marginTop: null,
    marginLeft: null,
    nameMarginLeft: 8,
    nameMarginTop: null,
    nameWidth: 150,
    nameHeight: 30,
    profileWidth: 30,
    profileHeight: 30,
    profileMarginTop: null,
    profileBorderRadius: 25,
    profileBackgroundColor: 'black',
    onPress: () => null,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View
          style={[
            styles.rowArray,
            {marginTop: this.props.marginTop},
            {marginLeft: this.props.marginLeft},
          ]}>
          <View
            style={[
              {width: this.props.profileWidth},
              {height: this.props.profileHeight},
              {marginTop: this.props.profileMarginTop},
              {borderRadius: this.props.profileBorderRadius},
              {backgroundColor: this.props.profileBackgroundColor},
            ]}
          />
          <Text
            style={[
              {fontSize: this.props.fontSize},
              {color: this.props.titleColor},
              {marginLeft: this.props.nameMarginLeft},
              {marginTop: this.props.nameMarginTop},
              {width: this.props.nameWidth},
              {height: this.props.nameHeight},
            ]}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  goArtistScreen() {
    // ARTIST_screen으로 화면 이동
    this.props.navigation.navigate('ARTIST');
  }
}

const styles = StyleSheet.create({
  //원하는 구성 요소들은 여기서 설정해줘야 한다.
  rowArray: {
    //프로필, 이름등을 가지고 있는 가로 정렬을 위한 요소
    flexDirection: 'row',
  },
});

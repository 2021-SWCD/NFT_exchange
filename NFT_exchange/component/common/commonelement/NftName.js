import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default class NftName extends Component {
  static defaultProps = {
    title: 'untitled',
    titleColor: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: null,
    onPress: () => null,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.goNftDetailScreen()}>
        <Text
          style={[
            {color: this.props.titleColor},
            {fontSize: this.props.fontSize},
            {fontWeight: this.props.fontWeight},
            {marginTop: this.props.marginTop},
            {marginLeft: this.props.marginLeft},
          ]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
  goNftDetailScreen() {
    //SampleScreen으로 이동
    this.props.navigation.navigate('SUGESST');
  }
}

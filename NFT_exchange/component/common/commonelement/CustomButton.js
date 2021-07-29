//버튼 커스텀을 위한 컴포넌트
import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import I18n from '../../../src/config/i18n';

export default class CustomButton extends Component {
  static defaultProps = {
    //아무런 설정을 안했을 시 버튼의 기본 설정
    title: I18n.t('suggestBtn'),
    titleColor: '#fff',
    titlefontSize: 20,
    titlefontWeight: 'bold',
    titlemarginTop: 10,
    titlemarginLeft: null,
    buttonColor: '#000',
    button_marginLeft: null,
    marginBottom: null,
    onPress: () => null,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {marginLeft: this.props.button_marginLeft},
        ]}
        onPress={this.props.onPress}>
        <Text
          style={[
            {color: this.props.titleColor},
            {fontSize: this.props.titlefontSize},
            {fontWeight: this.props.titlefontWeight},
            {marginTop: this.props.titlemarginTop},
            {marginLeft: this.props.titlemarginLeft},
          ]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    marginLeft: 20,
    borderRadius: 40,
    width: 140,
    height: 50,
    backgroundColor: '#000000',
  },
});

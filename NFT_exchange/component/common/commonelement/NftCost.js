import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class NftCost extends Component {
  static defaultProps = {
    NftCost: '0',
    NftCost_color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: null,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[{marginTop: this.props.marginTop}]}>
        <Text
          style={[
            {color: this.props.NftCost_color},
            {fontSize: this.props.fontSize},
            {fontWeight: this.props.fontWeight},
          ]}>
          {this.props.NftCost} ETH
        </Text>
      </View>
    );
  }
}

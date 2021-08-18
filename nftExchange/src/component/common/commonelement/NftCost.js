import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class NftCost extends Component {
  static defaultProps = {
    nftCost: '0',
    nftCostColor: 'black',
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
            {color: this.props.nftCostColor},
            {fontSize: this.props.fontSize},
            {fontWeight: this.props.fontWeight},
          ]}>
          {this.props.nftCost} ETH
        </Text>
      </View>
    );
  }
}

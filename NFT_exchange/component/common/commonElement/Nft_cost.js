import React, { Component } from 'react';
import { Text, View, } from 'react-native';

export default class Nft_cost extends Component{
    static defaultProps = {
      nft_cost: '0',
      nft_cost_color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: null,
    }
    constructor(props){
        super(props);
    }
    render() {
      return(
        <View style={[{marginTop: this.props.marginTop}]}>
            <Text style={[
              {color: this.props.nft_cost_color},
              {fontSize: this.props.fontSize},
              {fontWeight: this.props.fontWeight},
              ]}>{this.props.nft_cost} ETH</Text>
        </View>
      )
    }
}

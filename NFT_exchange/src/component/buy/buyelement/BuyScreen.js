import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import I18n from '../../../../src/config/i18n';

export default class BuyScreen extends Component {
  static defaultProps = {
    ethCost: '0.2',
    sugCost: '0',
    onPress: () => null,
  };

  render() {
    return (
      <View style={styles.buyScreenContainer}>
        <Text style={styles.sugContainerAndTxt}>
          {this.props.sugCost + I18n.t('won')}
        </Text>
        <Text style={styles.ethContainerAndTxt}>
          {this.props.ethCost + 'ETH'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buyScreenContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },
  sugContainerAndTxt: {
    height: 51,
    marginTop: 20,
    width: 310,
    backgroundColor: '#CCC',
    fontSize: 15,
    fontWeight: 'normal',
    color: 'black',
    paddingTop: 16,
    paddingLeft: 20,
    borderRadius: 10,
  },
  ethContainerAndTxt: {
    marginLeft: 157,
    borderColor: '#CCC',
    borderWidth: 2,
    height: 52,
    width: 155,
    backgroundColor: 'white',
    fontSize: 15,
    fontWeight: 'normal',
    color: 'black',
    paddingTop: 16,
    paddingLeft: 95,
    borderRadius: 10,
    position: 'absolute',
    top: 19,
  },
});

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import I18n from '../../../src/config/i18n';

export default class Buy_text extends Component {
  static defaultProps = {
    title: 'untitled',
    marginRight: 20,
    fontSize: 15,
    onPress: () => null,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sugPriceTxt}>{I18n.t('sugPrice')}</Text>
        <Text
          style={[
            {fontSize: this.props.fontSize},
            {marginRight: this.props.marginRight},
          ]}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sugPriceTxt: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

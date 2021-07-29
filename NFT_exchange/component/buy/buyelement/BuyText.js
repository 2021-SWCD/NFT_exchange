import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

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
        <Text style={styles.sug_txt}>제안가격</Text>
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

  sug_txt: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

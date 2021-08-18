import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Qrcode extends React.Component {
  static defaultProps = {
    color: 'black',
    marginLeft: 10,
    marginTop: null,
    marginBottom: null,
    onPress: () => null,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.qrbtnContainer}>
        <Icon
          style={[
            {color: this.props.color},
            {marginLeft: this.props.marginLeft},
            {marginTop: this.props.marginTop},
            {marginBottom: this.props.marginBottom},
          ]}
          name="qr-code-outline"
          size={26}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  qrbtnContainer: {
    position: 'absolute',
    top: 10,
    left: 320,
  },
});

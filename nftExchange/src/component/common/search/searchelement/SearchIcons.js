import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchIcons extends React.Component {
  static defaultProps = {
    color: 'black',
    marginLeft: 22,
    marginTop: 10,
    onPress: () => null,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress}>
          <Icon
            style={[
              {color: this.props.color},
              {marginLeft: this.props.marginLeft},
              {marginTop: this.props.marginTop},
            ]}
            name="ios-search-outline"
            size={27}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

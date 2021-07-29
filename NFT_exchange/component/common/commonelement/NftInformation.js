import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {Timer} from '.';
import I18n from '../../../src/config/i18n';

export default class NftInformation extends React.Component {
  static defaultProps = {
    curTitle: '0',
    costTitle: '0',
    titleColor: 'black',
    width: '50%',
    marginLeft: null,
    onPress: () => null,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.container, {marginLeft: this.props.marginLeft}]}>
        <View style={[styles.rowArray, {width: this.props.width}]}>
          <View style={styles.columArray}>
            <Text style={styles.text}>{I18n.t('curAuction')}</Text>
            <Text style={styles.boldText}>{this.props.curTitle} ETH</Text>
          </View>

          <View style={styles.columArray}>
            <Text style={styles.text}>{I18n.t('remainTime')}</Text>
            <Timer size={15} marginRight={10} />
          </View>
        </View>
        <View style={styles.rowArray}>
          <Text style={styles.text}>
            {this.props.costTitle} {I18n.t('won')}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //원하는 구성 요소들은 여기서 설정해줘야 한다.
  container: {
    flex: 1,
  },

  rowArray: {
    //프로필, 이름등을 가지고 있는 가로 정렬을 위한 요소
    //width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  columArray: {
    width: '95%',
    flexDirection: 'column',
    marginTop: 10,
  },

  text: {
    fontSize: 15,
    marginLeft: 20,
  },

  boldText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 20,
  },
});

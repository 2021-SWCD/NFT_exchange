//탭바 정보 탭의 정보 스크린
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Profile from '../component/common/commonelement/Profile';
import I18n from '../src/config/i18n';

export default class Tab_infoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.boldText}>{I18n.t('explainProductTxt')}</Text>
        <Text style={styles.normalText}>The only non-fungible</Text>
        <Text style={styles.boldText}>{I18n.t('ownerTxt')}</Text>
        <View style={styles.profileUpLine} />
        <Profile
          profile_width={40}
          profile_height={40}
          title={'hyunji'}
          name_marginLeft={20}
          name_marginTop={8}
        />
        <View style={styles.profileUpLine} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    height: 300,
  },

  boldText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  profileUpLine: {
    marginTop: 20,
    marginBottom: 20,
    borderTopWidth: 0.5,
    borderColor: '#DCDCDC',
  },
});

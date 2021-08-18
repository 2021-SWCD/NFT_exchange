//탭바 정보 탭의 정보 스크린
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Profile} from '../src/component/common/commonelement';
import I18n from '../src/config/i18n';

import {connect} from 'react-redux';
import { setPage } from '../../../redux/modules/page';

class TabInfoScreen extends React.Component {
  render() {
    const {title} = this.props.page;
    return (
      <View style={styles.container}>
        <Text style={styles.boldText}>{I18n.t('explainProductTxt')}</Text>
        <Text style={styles.normalText}>The only non-fungible</Text>
        <Text style={styles.boldText}>{I18n.t('ownerTxt')}</Text>
        <View style={styles.line} />
        <Profile
          profileWidth={40}
          profileHeight={40}
          title={title}
          nameMarginLeft={20}
          nameMarginTop={8}
          onPress={() => {
            this.props.navigation.navigate('ARTIST', {
              title: this.props.titleNum,
            }),
              this.props.changeTitle(this.props.titleNum);
          }}
        />
        <View style={styles.line} />
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
  line: {
    marginTop: 20,
    marginBottom: 20,
    borderTopWidth: 0.5,
    borderColor: '#DCDCDC',
  },
});

function mapStateToProps(state) {
  return {
    page : state.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabInfoScreen);

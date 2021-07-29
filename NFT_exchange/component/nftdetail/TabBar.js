import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SuggestScreen from '../../screen/SuggestScreen';
import TabInfoScreen from '../../screen/TabInfoScreen';
import I18n from '../../src/config/i18n';

const TabBar = createMaterialTopTabNavigator(
  {
    SuggestScreen: {
      screen: SuggestScreen,
      navigationOptions: {
        tabBarLabel: I18n.t('suggest'),
        initialRouteName: 'SuggestScreen',
        activeColor: '#C71585',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#FFC0CB'},
      },
    },
    TabInfoScreen: {
      screen: TabInfoScreen,
      navigationOptions: {
        tabBarLabel: I18n.t('inforamation'),
        activeColor: '#4B0082',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#B0C4DE'},
      },
    },
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      pressColor: 'transparent',
      style: {
        backgroundColor: '#000',
        marginTop: 30,
        width: 180,
        borderRadius: 50,
        marginLeft: 10,
        shadowColor: 'transparent',
      },
      indicatorStyle: {
        backgroundColor: 'null',
      },
      activeTintColor: '#FFF',
      inactiveTintColor: '#d1cece',
    },
  },
);
export default createAppContainer(TabBar);

import React from 'react'
import {View, Text,} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SuggestScreen from '../SuggestScreen';
import Tab_infoScreen from '../Tab_infoScreen';

const TabBar = createMaterialTopTabNavigator({
    SuggestScreen: {
    screen: SuggestScreen,
    navigationOptions: {
      tabBarLabel: 'SuggestScreen',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
        </View>
      ),
      initialRouteName: 'SuggestScreen',
      activeColor: '#C71585',
      inactiveColor: '#226557',
      barStyle: {backgroundColor: '#FFC0CB'},
    },
  },
  Tab_infoScreen: {
    screen: Tab_infoScreen,
    navigationOptions: {
      tabBarLabel: 'Tab_infoScreen',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon
            style={[{color: tintColor}]}
            size={25}
            name={'ios-settings'}
          />
        </View>
      ),
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
    pressColor: 'black',
    style: {
      backgroundColor: 'white',
    },
    indicatorStyle: {
      backgroundColor: 'black',
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true,
  },
},
);
export default createAppContainer(TabBar);
import React from 'react'
import {View, Text,} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SuggestScreen from '../../screen/SuggestScreen';
import Tab_infoScreen from '../../screen/TabInfoScreen';

const TabBar = createMaterialTopTabNavigator({
    SuggestScreen: {
    screen: SuggestScreen,
    navigationOptions: {
      tabBarLabel: '제안',
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
      tabBarLabel: '정보',
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
    pressColor: 'transparent',
    style: {
      backgroundColor: '#000',
        marginTop: 30,
        width: 180,
        borderRadius: 50,
        marginLeft: 15,
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

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CardImage, NftName, Profile, NftCost} from '../commonelement';
import Timer from '../commonelement/Timer';
import dataList from '../../../datalist.json';

export default class NftSimpleInfoCard extends React.Component {
  render() {
    return (
      <View>
        {dataList.map((element, index) => (
          <View key={index}>
            <View style={styles.container}>
              <CardImage
                source={{uri: element.imageUrl}}
                navigation={this.props.navigation}
              />
              <View style={styles.cardContainer}>
                <View style={styles.informContainer}>
                  <NftName
                    title={element.content}
                    fontSize={20}
                    navigation={this.props.navigation}
                  />
                  <Profile
                    title={element.title}
                    marginTop={10}
                    navigation={this.props.navigation}
                  />
                  <NftCost marginTop={5} nftCost={'0.01'} />
                  <Timer backgroundColor={'#d3d3d3'} />
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: '#d3d3d3',
    borderBottomLeftRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
    borderBottomRightRadius: 20,
    width: 300,
    height: 150,
  },
  informContainer: {
    marginLeft: 20,
  },
});

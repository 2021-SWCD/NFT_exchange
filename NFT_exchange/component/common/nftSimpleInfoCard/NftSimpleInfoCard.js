import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardImage from '../commonElement/CardImage';
import NFT_name from '../commonElement/Nft_name';
import Profile from '../commonElement/Profile';
import Nft_cost from '../commonElement/Nft_cost';
import Timer from '../commonElement/Timer';
import dataList from '../../../datalist.json'



export default class NftSimpleInfoCard extends React.Component {
  render(){
    return(
      <View >

        
        {dataList.map((element, index) => (
          <View key={index}>
            <View style={styles.container}>
              <CardImage
                source={{ uri: element.imageUrl }}
                navigation={this.props.navigation}/>
                <View style={styles.cardContainer}>
                  <View style={styles.informContainer}>
                    <NFT_name
                      title={element.content}
                      fontSize={20}
                      navigation={this.props.navigation}/>
                    <Profile
                      title={element.title}
                      marginTop={10}
                      navigation={this.props.navigation}/>
                    <Nft_cost
                      marginTop={5}
                      nft_cost={'0.01'} />
                    <Timer 
                      backgroundColor={'#d3d3d3'}
                    />
                  </View>
                </View>
              </View>
            </View>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    marginTop: 20
  },
  cardContainer: {
    backgroundColor: '#d3d3d3',
    borderBottomLeftRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
    borderBottomRightRadius: 20,
    width: 300,
    height: 150,
  },
  informContainer : {
    marginLeft: 20
  },
})
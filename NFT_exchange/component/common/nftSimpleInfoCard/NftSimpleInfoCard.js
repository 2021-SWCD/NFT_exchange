import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardImage from '../commonElement/CardImage';
import NFT_name from '../commonElement/Nft_name';
import Profile from '../commonElement/Profile';
import Nft_cost from '../commonElement/Nft_cost';
import Timer_nft_info from '../../Timer_nft_info';

const dataList = [
    {
      imageUrl: "https://img4.yna.co.kr/photo/etc/epa/2019/12/06/PEP20191206054201848_P4.jpg",
      title: "title1",
      content: "content1"
    },
    {
      imageUrl: "https://ichef.bbci.co.uk/news/800/cpsprodpb/C173/production/_117832594_066549055.jpg",
      title: "title2",
      content: "content2"
    },
    {
      imageUrl: "http://res.heraldm.com/content/image/2013/05/27/20130527000159_0.jpg",
      title: "title3",
      content: "content3"
    },
    {
      imageUrl: "http://www.economyf.com/pds_update/umg_20200528234240.jpg",
      title: "title4",
      content: "content4"
    },
    {
      imageUrl: "http://db.kookje.co.kr/news2000/photo/2018/1206/L20181206.22021001594i1.jpg",
      title: "title5",
      content: "content5"
    },
]

export default class NftSimpleInfoCard extends React.Component {
  render(){
    return(
      <View>
        {dataList.map((element, index) => (
          <View key={index}>
            <View style={{ marginTop: 20}}>
              <CardImage
                source={{ uri: element.imageUrl }}
                navigation={this.props.navigation}/>
                <View style={styles.cardContainer}>
                  <View style={{marginLeft: 20}}>
                    <NFT_name
                      title={element.content}
                      fontSize={20}
                      navigation={this.props.navigation}/>
                    <Profile
                      title={element.title}
                      navigation={this.props.navigation}/>
                    <Nft_cost
                      nft_cost={'0.01'} />
                    <Timer_nft_info/>
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
  cardContainer: {
    backgroundColor: '#d3d3d3',
    borderBottomLeftRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
    borderBottomRightRadius: 20,
    width: 300,
    height: 150,
  },
})
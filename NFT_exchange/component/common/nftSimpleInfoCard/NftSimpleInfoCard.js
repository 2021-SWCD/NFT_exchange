import React from 'react';
import { View, StyleSheet } from 'react-native';

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
                        <View style={{ marginTop: 10, marginLeft: 55 }}>
                        <Nft_simple_info_cardImage
                            source={{ uri: element.imageUrl }}
                            onPress={() => this.goNFT_detailScreen()} />
                        <View style={styles.cardContainer}>
                            <NFT_name
                            title={element.content}
                            fontSize={20}
                        onPress={() => this.goNFT_detailScreen()} />
                      <Nft_simple_info_Profile
                        title={element.title}
                        onPress={() => this.goArtist_Screen()} />
                      <Nft_simple_info_costtime
                        nft_cost={'0.01ETH'} />
                    </View>
                  </View>
                </View>
              ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})
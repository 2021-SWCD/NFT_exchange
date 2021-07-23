import React from 'react';
import { TouchableOpacity, Dimensions, ScrollView, Text, StyleSheet, View, Image, } from 'react-native';

import Slide_profile from '../../Slide_profile';
import Slide_txt1 from '../../Slide_txt1';
import Slide_txt2 from '../../Slide_txt2';
import CustomButton from '../../CustomButton';
import NFT_name from '../../common/nftSimpleInfoCard/nftSimpleInfoCardElement/NFT_name';

import Icon from 'react-native-vector-icons/Ionicons';


const { width } = Dimensions.get("window");
const height = width * 0.5;
var start = 0;

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


export default class slide extends React.Component {
    render() {
        return (
            <View style={styles.slideview}>

                <ScrollView
                    pagingEnabled
                    horizontal
                    style={{ width, height }}
                    
                    ref={ref => (this.scrollView = ref)}>



                    {dataList.map((element, index) => (
                        <View key={index}>
                            <Image
                                key={index}
                                source={{ uri: element.imageUrl }}
                                style={{ width, height, resizeMode: 'contain' }} />

                            <Slide_profile
                                title={element.title}
                                onPress={() => this.goArtist_Screen()}
                            />


                            <NFT_name
                                title={element.content}
                                marginLeft={50}
                                fontSize={45}
                                onPress={() => this.goNFT_detailScreen()} />


                            <View style={styles.slidetext}>

                                <Slide_txt1 />

                                <Slide_txt2 />


                                <Text style={{ marginTop: 5 }}>10.000원</Text>

                            </View>


                            <CustomButton
                                button_marginLeft={48}
                                onPress={() => this.goNFT_detailScreen()} />

                        </View>

                    ))


                    }



                </ScrollView>

                <View style={styles.narrowbtn}>

                    <TouchableOpacity
                        onPress={() => this.leftPage()}
                    >
                        <Icon style={{ margin: 5 }} name="chevron-back" size={35} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.rightPage()}
                    >
                        <Icon style={{ margin: 5 }} name="chevron-forward" size={35} />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    leftPage = () => {

        start -= width

        if (start <= width * -1) {
            start = width * 4
        }

        this.scrollView.scrollTo({
            x: start
        })


    }
    rightPage() {

        start += width

        if (start >= width * 5) {
            start = 0
        }

        this.scrollView.scrollTo({
            x: start
        })


    }
    goNFT_detailScreen() {
        //SampleScreen으로 이동
        this.props.navigation.navigate('SUGESST');
      }
}

const styles = StyleSheet.create({
    slideview: { 
        marginTop: 30,
        width: 30,
        height: 550 
    },

    slidetext : { 
        marginTop: 5, 
        marginLeft: 50 
    },
    narrowbtn : {
        width: width, 
        position: 'absolute', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignSelf: 'flex-start', 
        top : 220,    
    },
}
)


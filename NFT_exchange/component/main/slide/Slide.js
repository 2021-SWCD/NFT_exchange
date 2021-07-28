import React from 'react';
import { TouchableOpacity, Dimensions, ScrollView,  StyleSheet, View, Image, } from 'react-native';
import { NftName, CustomButton, Profile,NftInformation } from '../../common/commonelement';
import Icon from 'react-native-vector-icons/Ionicons';
import datalist from '../../../datalist.json'


const { width } = Dimensions.get("window");
const height = width * 0.5;
var start = 0;

export default class slide extends React.Component {
    render() {
        return (
            <View style={styles.slideview}>

                <ScrollView
                    pagingEnabled
                    horizontal
                    style={{ width, height }}
                    
                    ref={ref => (this.scrollView = ref)}>



                    {datalist.map((element, index) => (
                        <View key={index}>
                            <Image
                                key={index}
                                source={{ uri: element.imageUrl }}
                                style={{ width, height, resizeMode: 'contain' }} />

                            <Profile
                                title={element.title}
                                marginLeft={50}
                                marginTop={20}
                                navigation={this.props.navigation}
                            />


                            <NftName
                                title={element.content}
                                marginLeft={50}
                                fontSize={45}
                                navigation={this.props.navigation} />

                            <NftInformation 
                                width={170}
                                marginLeft={30}
                                cur_title={'0.01'}
                                cost_title={'10,000'}/>
                           


                            <CustomButton
                                titlemarginLeft={30}
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
                        <Icon style={styles.icon} name="chevron-back" size={35} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.rightPage()}
                    >
                        <Icon style={styles.icon} name="chevron-forward" size={35} />
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
    goArtist_Screen() {
        // ARTIST_screen으로 화면 이동
        this.props.navigation.navigate('ARTIST');
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
    icon : { 
        margin: 5 
    },
}
)


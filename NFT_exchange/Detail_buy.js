import React, { TouchableOpacity, Component } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, } from 'react-native';
import Korbit_logo from './component/Korbit_logo';
import Login_btn from './component/Login_btn';
import Qrcode from './component/Qrcode';
import Go_main from './component/go_main';
import Nft_simple_info_cardImage from './component/Nft_simple_info_cardImage';
import NFT_name from './component/NFT_name';
import Profile from './component/Profile';
import Detail_main from './component/detail_main';
import CustomButton from './component/CustomButton';
import Custom_cancel from './component/Custom_cancel';
import TabBar from './component/TabBar';
import Buy_text from './component/Buy_text';

import Buy_screen from './component/Buy_screen';

/*이미지 주소 복사를 해서 링크를 붙여넣는다.*/
export default class Detail_buy extends Component {
    render() {
        return (
            <ScrollView style={styles.container} stickyHeaderIndices={[1]}
            >

                <View style={styles.topView}>
                    <Korbit_logo
                        onPress={() => this.goMainScreen()} />
                    <Login_btn
                        onPress={() => this.goLoginScreen()} />
                </View>

                <View style={styles.midView}>
                    <View style={{ marginLeft: 3, marginBottom: 6, flexDirection: 'row', alignItems: 'flex-end' }}>

                        <Go_main onPress={() => this.goMainScreen()} />

                        <Qrcode />

                    </View>
                </View>

                <View style={styles.colum}>

                    <Detail_main />

                    <Buy_text
                     //title={this.state.result} />
                     //title={this.state.result+'ETH'} />
                     title={'10000'+'ETH'} />

                    <Buy_screen />


                    <View><Text style={{ marginTop: 70, marginLeft: 20 }}>위 내용으로 가격을 제안합니다.</Text></View>
                    

                    <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center' }}>

                        <Custom_cancel onPress={() => this.goMainScreen()} />
                        <CustomButton />


                    </View>
                </View>
            </ScrollView>
        )
    }

    goMainScreen() {
        //MainScreen으로 이동
        this.props.navigation.navigate('MAIN');
    }
    goLoginScreen() {
        // LoginScreen으로 화면 이동
        this.props.navigation.navigate('LOGIN');
    }
    goArtist_Screen() {
        // ARTIST_screen으로 화면 이동
        this.props.navigation.navigate('ARTIST');
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1, //뷰가 얼만큼의 가중치를 가지는 지 결정, 높을 수록 많은 영역을 차지함
        //justifyContent: 'center', //수직에서 중앙으로 정렬
        //alignItems:'center', //수평에서 중앙으로 정렬
        backgroundColor: 'white',
    },

    topView: {
        flexDirection: 'row',
        height: 55,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    midView: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
    },

    colum: {
        width: '80%',
        height: '25%',
        flexDirection: 'column',
        marginTop: 30,
        marginLeft: 40,
    },

    sug_txt: {
        height: 51,
        marginTop: 20,
        width: 310,
        backgroundColor: '#CCC',
        fontSize: 15,
        fontWeight: 'normal',
        color: 'black',
        paddingTop: 16,
        paddingLeft: 20,
        borderRadius: 10,
    },
    eth_txt: {
        marginLeft: 157,
        borderColor: '#CCC',
        borderWidth: 2,
        height: 52,
        width: 155,
        backgroundColor: 'white',
        fontSize: 15,
        fontWeight: 'normal',
        color: 'black',
        paddingTop: 16,
        paddingLeft: 100,
        borderRadius: 10,
        position: 'absolute',
        top: 19,
    },

})
import React, { Component } from 'react';
import { View,Text, } from 'react-native';

export default class NFT_name extends Component {


    render() {
        return (
            <View style={{ flexDirection: 'row', marginTop:15 }}>

                <Text style={{ fontSize: 18 }}>현재 경매가</Text>
                <Text style={{ marginLeft: 80, fontSize: 18 }}>남은 시간</Text>


            </View>
        )
    }
}




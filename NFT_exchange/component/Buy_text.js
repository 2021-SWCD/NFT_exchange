import React, { TouchableOpacity, Component } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, } from 'react-native';

export default class Buy_text extends Component {
    render() {
        return (

            <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: 'bold' }}>제안가격</Text>
                <Text style={{ marginRight: 20, fontSize: 15 }}>100ETH 보유</Text>
            </View>
        )
    }
}
import React, { Component } from 'react';
import { View,Text, } from 'react-native';
import Timer_main_detail from '../../../Timer_main_detail';


export default class Slide_txt2 extends Component {


    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                      <Text style={{
                        marginTop: 5,
                        fontSize: 25,
                        fontWeight: 'bold',
                      }}>0.1 ETH</Text>

                      <Timer_main_detail />
                    </View>
                    
        )
    }
}
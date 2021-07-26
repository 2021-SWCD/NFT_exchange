import React, { TouchableOpacity, Component } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, } from 'react-native';

export default class Buy_text extends Component {


    static defaultProps = {
        title: 'untitled',
       
            
            marginRight: 20,
            fontSize: 15,
            
        onPress: () => null,
    }
    constructor(props){
        super(props);
    }


    render() {
        return (

            <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: 'bold' }}>제안가격</Text>
                <Text style={[
                    {fontSize: this.props.fontSize},
                    {marginRight: this.props.marginRight},
 
                ]}>
                    {this.props.title}</Text>
            </View>
        )
    }
}
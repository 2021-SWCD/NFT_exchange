import React, { Component } from 'react';
import { TouchableOpacity, Text, } from 'react-native';

export default class Nft_name extends Component{
    static defaultProps = {
        title: 'untitled',
        titleColor: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        onPress: () => null,
    }
    constructor(props){
        super(props);
    }
    render(){
        return (
            <TouchableOpacity onPress={() => this.goNFT_detailScreen()}>
                <Text style={[
                    {color: this.props.titleColor},
                    {fontSize: this.props.fontSize},
                    {fontWeight: this.props.fontWeight},
                    {marginTop: this.props.marginTop},
                ]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
    goNFT_detailScreen() {
        //SampleScreen으로 이동
        this.props.navigation.navigate('SUGESST');
    }
}
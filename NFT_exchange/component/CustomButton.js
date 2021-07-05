//버튼 커스텀을 위한 컴포넌트

import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';

export default class CustomButton extends Component{
    static defaultProps = { //아무런 설정을 안했을 시 버튼의 기본 설정
        title: 'untitled',
        buttonColor: '#000',
        titleColor: '#fff',
        onPress: () => null,
    }
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity style={[
                styles.button,
            ]}
            onPress={this.props.onPress}>
                <Text style={[
                    styles.button_title,
                ]}>{this.props.button_title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 20,
        borderRadius: 40,
        width: 140,
        height: 50,
        backgroundColor:'#000000',
    },
    button_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
        marginLeft: 30
    }
})
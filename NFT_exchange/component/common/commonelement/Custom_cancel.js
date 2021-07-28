
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';

export default class Custom_cancel extends Component{
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
                ]}>취소하기</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        marginLeft: 20,
        borderRadius: 40,
        width: 140,
        height: 50,
        backgroundColor:'white',
    },
    button_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        marginLeft: 30
    }
})

import React, { Component } from 'react';
import { TextInput, StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Qrcode extends React.Component {
    render() {
        return (
            

            <View > 
            <Icon style={styles.qrcode} name="qr-code-outline" size={26} />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    qrcode: {
        color: 'black',
        marginLeft: 10,
        marginTop : 10,
    
      },
      
      
}
)
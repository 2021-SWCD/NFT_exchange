import React, { TouchableOpacity, Component } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, } from 'react-native';

export default class Buy_screen extends Component {

    static defaultProps = {
        title: '0.2',
        sug_txt: '0',
        onPress: () => null,
    }

    render() {
        return (

            <View style={{
                alignItems: 'center', flexDirection: 'row', marginLeft: 10
            }}>

                <Text style={styles.sug_txt}>{this.props.sug_txt + '원'}</Text>
                <Text style={styles.eth_txt}>{this.props.title + 'ETH'}</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
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
            paddingLeft: 95,
            borderRadius: 10,
            position: 'absolute',
            top: 19,
        },

    }
)
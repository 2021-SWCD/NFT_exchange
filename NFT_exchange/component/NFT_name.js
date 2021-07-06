import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import 'react-native-gesture-handler';

export default class nft_name extends React.Component {
    render(){
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.container}>
                        <Text style={styles.nft_name}>NATURE</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({ //원하는 구성 요소들은 여기서 설정해줘야 한다.
    container: {
      flex:1,
    },
    
    nft_name: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
    },
});
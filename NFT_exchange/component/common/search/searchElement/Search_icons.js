import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Search_icons extends React.Component {
    static defaultProps = {
        color: 'black',
        marginLeft: 22,
        marginTop: 10,
        onPress: () => null,
    }
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View >
                <TouchableOpacity 
                    onPress={this.props.onPress}>
                    <Icon 
                    style={[
                        {color: this.props.color},
                        {marginLeft: this.props.marginLeft},
                        {marginTop: this.props.marginTop},
                    ]} 
                    name="ios-search-outline" 
                    size={27} />
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    search: {
        color: 'black',
        marginLeft: 22,
        marginTop : 10,
      },
}
)
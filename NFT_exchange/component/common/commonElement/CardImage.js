import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class CardImage extends Component{
    static defaultProps = {
        borderBottomLeftRadius: null,
        borderBottomRightRadius: null,
        borderTopLeftRadius: 20, //왼쪽 위 테두리만 둥글게
        borderTopRightRadius: 20,
        width: 300,
        height: 250,
        source: {uri:'https://ichi.pro/assets/images/max/724/0*Tsd6bDqynxJN1daI'},
        onPress: () => null,
    }
    constructor(props){
        super(props);
    }
    render(){
      return(
        <TouchableOpacity
            onPress={() => this.goNFT_detailScreen()}>
            <Image style={styles.defaultProps}
                borderBottomLeftRadius = {this.props.borderBottomLeftRadius}
                borderBottomRightRadius = {this.props.borderBottomRightRadius}
                borderTopLeftRadius = {this.props.borderTopLeftRadius}
                borderTopRightRadius = {this.props.borderTopRightRadius}
                width = {this.props.width}
                height = {this.props.height}
                source ={this.props.source}
            />
        </TouchableOpacity>
      )
    }
    goNFT_detailScreen() {
        this.props.navigation.navigate('SUGESST');
    }
}
    
const styles = StyleSheet.create({})
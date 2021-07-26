import React, { Component } from 'react';
import { View,Text, } from 'react-native';
import { Timer } from '../../../common/commonElement';


export default class Slide_txt2 extends Component {
  static defaultProps = {
    cur_title: '0',
  }
  constructor(props){
    super(props);
  }
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                      <Text style={{
                        marginTop: 5,
                        fontSize: 25,
                        fontWeight: 'bold',
                      }}>{this.props.cur_title} ETH</Text>

                      <Timer 
                        size={15}
                        marginLeft={70}/>
                    </View>
                    
        )
    }
}
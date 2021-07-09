import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import 'react-native-gesture-handler';

export default class Profile extends React.Component {
    static defaultProps = {
        marginLeft: 10, 
        fontSize: 20, 
        fontWeight: 'bold',
      title: 'untitled',
      onPress: () => null,
    }
    constructor(props){
      super(props);
    }    
    render(){
        return (

            
            <TouchableOpacity onPress={this.props.onPress}>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>    
                  <View style={
                    styles.user_profile
                    }/>
                  <Text style={[
                    {fontSize: this.props.fontSize},
                    {fontWeight: this.props.fontWeight},
                    {marginLeft: this.props.marginLeft},
                  ]}>{this.props.title}</Text>
               
            </View>               
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({ //원하는 구성 요소들은 여기서 설정해줘야 한다.
  
  
    user_profile: { //검정색 원의 프로필
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'black',
        marginLeft: 50,
    },
});


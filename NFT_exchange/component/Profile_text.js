import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import 'react-native-gesture-handler';

export default class Profile_text extends React.Component {
    static defaultProps = {
        title: 'untitled',
        titleColor: 'black',
        fontSize: 15,
        alignItems: "center",
        
        onPress: () => null,
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{alignItems:'center'}}>
                    <Text style={[
                        { color: this.props.titleColor },
                        { fontSize: this.props.fontSize },
                        { marginTop: this.props.marginTop },
                        { alignItems: this.props.alignItems },

                        { marginLeft: this.props.marginLeft },
                    ]}>{this.props.title}</Text>

                   
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({ //원하는 구성 요소들은 여기서 설정해줘야 한다.
    elem: { //프로필, 이름등을 가지고 있는 가로 정렬을 위한 요소
        width: '40%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },


});
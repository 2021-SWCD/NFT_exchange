import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import 'react-native-gesture-handler';

export default class Profile_text extends React.Component {
    static defaultProps = {
        title: 'untitled',
        titleColor: 'black',
        fontSize: 15,
        alignItems: "center",
        marginBottom: 10,
        
        onPress: () => null,
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.container}>
                    <Text style={[
                        { color: this.props.titleColor },
                        { fontSize: this.props.fontSize },
                        { marginTop: this.props.marginTop },
                        { alignItems: this.props.alignItems },

                        { marginBottom: this.props.marginBottom },
                        { marginLeft: this.props.marginLeft },
                    ]}>{this.props.title}</Text>

                   
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({ //원하는 구성 요소들은 여기서 설정해줘야 한다.
    container : {
        alignItems:'center'
    }

});

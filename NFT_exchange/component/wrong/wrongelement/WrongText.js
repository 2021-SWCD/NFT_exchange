//Artist폴더 만든후 아티스트 요소에 넣기
import React from 'react'
import { StyleSheet, View, Text,  } from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default class wrong_text extends React.Component {

    render() {
        return (
            
            <View style={styles.container}>
                <Icon style={styles.sad} name="sad-outline" size={45} />
                <Text style={styles.wrong_text}>검색 결과를 찾을 수 없어요.</Text>
                <Text style={styles.wrong_text}>다른 검색어로 검색해주세요.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({ //원하는 구성 요소들은 여기서 설정해줘야 한다.
    container: {
        marginTop: 90,
        alignItems: 'center'
    },

    sad: {
        color: 'black',
        marginBottom: 20,

    },


    wrong_text: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 22,
        fontWeight: 'bold'

    },
});




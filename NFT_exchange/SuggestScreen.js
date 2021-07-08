//탭바 제안 탭의 제안 스크린
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SuggestScreen extends React.Component {
  render(){
    return (
      <View style={{ 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 300,}}>
        <Icon style={styles.sad} name="sad-outline" size={45} />
        <Text style={styles.wrong_text}>아직 제안한 사람이 없어요.</Text>
        <Text style={styles.wrong_text}>첫번째로 가격을 제안해보세요.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sad: {
    color: 'black',
    marginBottom: 20,
    marginRight: 10,
  },
  wrong_text: {
    marginBottom: 5,
    fontSize: 22,
    fontWeight: 'bold'
  },
});
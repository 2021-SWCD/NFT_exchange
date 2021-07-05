import React from 'react';
import { Image,TextInput,StyleSheet, Text, View, ScrollView ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




export default class App extends React.Component {

  render() {
    return (
      
    <View style={styles.container}>  

       <TouchableOpacity><Text style={styles.korbiBtn}>korbit</Text></TouchableOpacity>
       <Text style={styles.login}>로그인</Text>
       <Text style={styles.safe_txt}>안전한 거래소 이용을 위해 주소창을 확인해주세요.</Text>
       <Text style={styles.link_txt}>
         <Icon style={styles.shield} name = "shield-checkmark-outline" size = {16} />
         <Text style={styles.linkblue_txt}> 안전함  https</Text>
         <Text style={styles.linkgrey_txt}>://korbit.co.kr</Text>
       </Text>
           
       <TextInput 
              style={styles.input}      //searchbar 설정은 안해둠
              placeholder="코빗 이메일 계정"           
       />
       <TextInput 
              style={styles.input}      //searchbar 설정은 안해둠
              placeholder="비밀번호"           
       />

       <TouchableOpacity><Text style={styles.loginBtn}>로그인</Text></TouchableOpacity>
      
          
                   
      
        
      </View>
      
      
      
      
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  korbiBtn:{
   marginLeft:30,
   marginRight:20,
   marginTop:25,
   marginBottom:10,
   fontSize: 25,
   fontWeight:'bold', 
  },
  login:{
   marginLeft:30,
   marginRight:20,
   marginTop:25,
   marginBottom:10,
   fontSize: 25,
   fontWeight:'bold', 
  },
  safe_txt:{
   marginTop : 10,
   marginLeft:30,
   marginRight:20,
   fontSize: 14,
  
  },
  link_txt:{
   marginTop : 8,
   marginLeft:30,
   marginRight:20,  
   marginBottom:20,  
   fontSize: 14,
   flexDirection: 'row'
  },
 
  
  input:{
    height : 51,
    marginTop : 16,
    marginLeft: 30,
    marginRight: 30,
    width : 300, 
    borderWidth : 0.2,
    borderColor : '#AAAAAA',
    paddingLeft : 15,
    borderRadius : 3,
    
  },
  shield:{
    color : '#0064ff',
    marginRight : 10,
   
  },
  linkblue_txt:{
   color : '#0064ff',
 
 },
 linkgrey_txt:{
   color : 'grey',
 
 },

 loginBtn:{
   height : 51,
   marginTop : 30,
   marginLeft: 30,
   marginRight: 30,
   width : 300, 
   backgroundColor : '#0064ff',
   fontSize: 15,
   fontWeight:'normal',    
   color : 'white', 
   paddingTop : 16,
   paddingLeft : 132,
   borderRadius : 3,
  },
 
  
});

import React, { TouchableOpacity, Component } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, } from 'react-native';
import { LoginHeader, LoginAfterHeader } from './component/common/logIn';
import Go_main from './component/common/goMain/go_main';
import Detail_main from './component/common/commonElement/Detail_main';
import CustomButton from './component/common/commonElement/CustomButton';
import Custom_cancel from './component/common/commonElement/Custom_cancel';
import TabBar from './component/TabBar';
import Buy_text from './component/detailBuy/Buy_text';
import Buy_screen from './component/detailBuy/Buy_screen';
import AsyncStorage from '@react-native-community/async-storage';

/*이미지 주소 복사를 해서 링크를 붙여넣는다.*/

export default class Detail_buy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show_result: null,
            isLoggedIn: false,
        };
    }

    componentDidMount() {
        this.onLoad();
        console.log('componentDidMount');
      }
    
      onLoad = () => {
        this.props.navigation.addListener('focus', () => {
          this.checkLoginStatus();
          console.log('onLoad');
        });
      };
    
      checkLoginStatus = () => {

         // ETH 초기값 할당
         AsyncStorage.getItem('ETH', (err, result) => {
            console.log(result); // User1 출력
            this.setState({show_result : result})
        });

        AsyncStorage.getItem('logIncom', (err, result) => {
          console.log('Login_after'); // User1 출력
          this.setState({ isLoggedIn : JSON.parse(result) })
        });
      };


    render() {

        return (
            <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
                {
                this.state.isLoggedIn
                ? <LoginAfterHeader navigation={this.props.navigation} />
                : <LoginHeader navigation={this.props.navigation} />
                }

                <Go_main navigation={this.props.navigation} />

                <View style={styles.colum}>

                    <Detail_main 
                        cur_title={'0.01'}
                        cost_title={'10,000'}/>

                    <Buy_text
                     //title={this.state.result} />
                     title={this.state.show_result + 'ETH'} />

                    <Buy_screen />


                    <View><Text style={{ marginTop: 70, marginLeft: 20 }}>위 내용으로 가격을 제안합니다.</Text></View>
                    

                    <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center' }}>

                        <Custom_cancel onPress={() => this.goMainScreen()} />
                        <CustomButton 
                            titlemarginLeft={30}
                            onPress={() => {this.goMainScreen();this.Count()}}/>
                    </View>
                </View>
            </ScrollView>
        )
    }

    Count(){

        let a = this.state.show_result-10

        AsyncStorage.setItem('ETH', JSON.stringify(a), () => {
            console.log('값 변경 완료 ')
        });

        AsyncStorage.getItem('ETH',(err,reset) => {
            console.log(reset)
        })

    }

    

    goMainScreen() {
        //MainScreen으로 이동
        this.props.navigation.navigate('MAIN');
    }
    goLoginScreen() {
        // LoginScreen으로 화면 이동
        this.props.navigation.navigate('LOGIN');
    }
    goArtist_Screen() {
        // ARTIST_screen으로 화면 이동
        this.props.navigation.navigate('ARTIST');
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1, //뷰가 얼만큼의 가중치를 가지는 지 결정, 높을 수록 많은 영역을 차지함
        //justifyContent: 'center', //수직에서 중앙으로 정렬
        //alignItems:'center', //수평에서 중앙으로 정렬
        backgroundColor: 'white',
    },

    topView: {
        flexDirection: 'row',
        height: 55,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    midView: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
    },

    colum: {
        width: '80%',
        height: '25%',
        flexDirection: 'column',
        marginTop: 30,
        marginLeft: 40,
    },

    sug_txt: {
        height: 51,
        marginTop: 20,
        width: 310,
        backgroundColor: '#CCC',
        fontSize: 15,
        fontWeight: 'normal',
        color: 'black',
        paddingTop: 16,
        paddingLeft: 20,
        borderRadius: 10,
    },
    eth_txt: {
        marginLeft: 157,
        borderColor: '#CCC',
        borderWidth: 2,
        height: 52,
        width: 155,
        backgroundColor: 'white',
        fontSize: 15,
        fontWeight: 'normal',
        color: 'black',
        paddingTop: 16,
        paddingLeft: 100,
        borderRadius: 10,
        position: 'absolute',
        top: 19,
    },

})
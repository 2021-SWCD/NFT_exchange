import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, } from 'react-native';
import { LoginAfterHeader, LoginHeader } from '../component/common/login';
import { GoMain } from '../component/common/gomain';
import { CustomButton, CustomCancelButton, NftInformation} from '../component/common/commonelement';
import { Buy_text, Buy_screen } from '../component/buy/buyelement';
import AsyncStorage from '@react-native-community/async-storage';


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
            console.log(result); 
            this.setState({show_result : result})
        });

        AsyncStorage.getItem('logIncom', (err, result) => {
          console.log('Login_after');
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

                <GoMain navigation={this.props.navigation} />

                <View style={styles.colum}>

                    <NftInformation 
                        cur_title={'0.01'}
                        cost_title={'10,000'}/>

                    <Buy_text
                     title={this.state.show_result + 'ETH'} />

                    <Buy_screen />


                    <View>
                        <Text style={styles.sug_txt}>위 내용으로 가격을 제안합니다.</Text>
                    </View>
                    

                    <View style={styles.btnContainer}>

                        <CustomCancelButton onPress={() => this.goMainScreen()} />
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
        flex: 1, 
        backgroundColor: 'white',
    },

    colum: {
        width: '80%',
        height: '25%',
        flexDirection: 'column',
        marginTop: 30,
        marginLeft: 40,
    },

    sug_txt: {
         
        marginTop: 70, 
        marginLeft: 20 
    },
    btnContainer : { 
        flexDirection: 'row', 
        marginTop: 30, 
        alignItems: 'center' 
    }

})

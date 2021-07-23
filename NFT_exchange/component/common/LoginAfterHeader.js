import React from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Korbit_logo from './logInElement/Korbit_logo';
import ETH_btn from './logInElement/ETH_btn';

export default class LoginAfterHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: 80,
        }   
    }

    componentDidMount() {
        this.onLoad();
        AsyncStorage.getItem('ETH', (err, result) => {

            console.log(result); // User1 출력
            this.setState({ result })

        });
        console.log('loginAfterHeader eth설정_componentdidmount');
    }

    onLoad = () => {
        this.props.navigation.addListener('focus', () => {
            this.checkEthStatus();
            console.log('loginAfterHeader eth설정_onload');
        })
    }

    checkEthStatus = () => {
        // ETH 초기값 할당
        AsyncStorage.getItem('ETH', (err, result) => {

            console.log(result); // User1 출력
            this.setState({ result : result })

        });
    }

    /* async componentDidMount() {
        let a = 80;

        AsyncStorage.getItem('ETH', (err, result) => {

            if(result == ''){

                AsyncStorage.setItem('ETH', a.toString(), () => {
                    console.log('ETH 초기화')
                });

            }

        });

        
        // ETH 초기값 할당
        AsyncStorage.getItem('ETH', (err, result) => {

            console.log(result); // User1 출력
            this.setState({ result })

        });
    }
 */
    render(){
        return(
            <View style={styles.topView}>
                <Korbit_logo
                    onPress={() => this.goMainScreen()} />
                <ETH_btn
                    title={this.state.result + ' ETH'}
                    onPress={() => this.goLogoutScreen()}/>
            </View>
        )
    }
    goMainScreen() {
        //MainScreen으로 이동
        this.props.navigation.navigate('MAIN');
    }
    goLogoutScreen() {
        //MainScreen으로 이동
        this.props.navigation.navigate('LOGOUT');
    }
}

const styles = StyleSheet.create({
    topView: {
        flexDirection: 'row',
        //height: 55,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
})
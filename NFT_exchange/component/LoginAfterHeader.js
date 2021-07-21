import React from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Korbit_logo from './Korbit_logo';
import ETH_btn from './ETH_btn';

export default class LoginAfterHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: 0,
        }   
    }

    async componentDidMount() {
        let a = 80;

        AsyncStorage.getItem('ETH', (err, result) => {

            if(result == ''){

                AsyncStorage.setItem('ETH', a.toString(), () => {
                    console.log('ETH 초기화')
                });

            }

        });

        

       /*  AsyncStorage.setItem('ETH', a.toString(), () => {
            console.log('ETH 초기화')
        });
        */
        // ETH 초기값 할당
        AsyncStorage.getItem('ETH', (err, result) => {

            console.log(result); // User1 출력
            this.setState({ result })

        });

        /* AsyncStorage.getItem('ETH_after', (err, result2) => {
            
            console.log(result2); // User1 출력
            this.setState({result2})
            
        }); */

    }

    render(){
        return(
            <View style={styles.topView}>
                <Korbit_logo
                    onPress={() => this.goMainScreen()} />
                <ETH_btn
                    title={this.state.result + ' ETH'}/>
            </View>
        )
    }
    goMainScreen() {
        //MainScreen으로 이동
        this.props.navigation.navigate('MAIN');
    }
    goLoginAfterScreen() {
        //MainScreen으로 이동
        this.props.navigation.navigate('LOGIN_AFTER');
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
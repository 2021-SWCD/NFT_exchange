import React from 'react';
import { View, StyleSheet } from 'react-native';
import { EthBtn, KorbitLogo } from './loginelement';
import AsyncStorage from '@react-native-community/async-storage';

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

            console.log(result); 
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

            console.log(result); 
            this.setState({ result : result })

        });
    }

  
    render(){
        return(
            <View style={styles.topView}>
                <KorbitLogo
                    onPress={() => this.goMainScreen()} />
                <EthBtn
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
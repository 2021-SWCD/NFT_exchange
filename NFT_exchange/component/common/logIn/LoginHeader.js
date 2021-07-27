import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Login_btn, Korbit_logo } from './logInElement';

export default class LoginHeader extends React.Component {
    
    render(){
        return(
            <View style={styles.topView}>
                <Korbit_logo
                    onPress={() => this.goMainScreen()} />
                <Login_btn
                    onPress={() => this.goLoginScreen()} />
            </View>
        )
    }
    goMainScreen() {
        //MainScreen으로 이동
        this.props.navigation.navigate('MAIN');
    }
    goLoginScreen() {
        // LoginScreen으로 화면 이동
        this.props.navigation.navigate('LOGIN');
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
});

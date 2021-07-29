import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginBtn, KorbitLogo } from './loginelement';

export default class LoginHeader extends React.Component {
    
    render(){
        return(
            <View style={styles.topView}>
                <KorbitLogo
                    onPress={() => this.goMainScreen()} />
                <LoginBtn
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
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
});

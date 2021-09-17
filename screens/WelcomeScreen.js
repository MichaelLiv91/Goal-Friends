
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import Password from '../components/Password';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { USERS } from '../data/dummy_data';
import { Auth } from '../store/actions/auth';
import Colors from '../constants/Colors';
import DefaultText from '../components/DefaultText';

const WelcomeScreen = (props) => {


    const [isAuth, setAuth] = useState(false);
    const [userID, setUserID] = useState(null);
    const [enteredUserName, setUserName] = useState('Misha');
    const [enteredPassword, setPassword] = useState('12345');

    const authDispatcher = useDispatch();


    const handleAuth = (user, pass) => {
        if (user && pass) {
            const userIndex = USERS.findIndex((elem) => elem.userData.password === parseInt(pass) && elem.userData.userName === user);
            if (userIndex >= 0) {
                setUserID(USERS[userIndex].id);
                setAuth(true);
            }
        }
    }

    useEffect(() => {
        if (isAuth) {
            authDispatcher(Auth(userID));
        }
    }, [isAuth, userID, authDispatcher]);



    return (

        <ScrollView keyboardShouldPersistTaps='handled'>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.screen}>
                    <View style={styles.login}>
                        <View style={styles.username} >
                            <MyTextInput value={enteredUserName} placeholder={'Username'} onChangeText={text => setUserName(text)} />
                        </View>
                        <Password value={enteredPassword} onChangeText={pass => setPassword(pass)} />
                        <MyButton style={styles.loginBtn} onPress={() => handleAuth(enteredUserName, enteredPassword)}>PLAY</MyButton>
                        <DefaultText style={styles.orText}>OR</DefaultText>
                        <MyButton style={styles.signInBtn} onPress={() => handleAuth(enteredUserName, enteredPassword)}>SIGN UP</MyButton>
                        <View style={styles.logingMethod}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="facebook" size={40} color="blue" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="gmail" size={40} color={Colors.redGmailStyle} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};


export const screenOptions = () => {
    headerTitle: () => <Logo />
}

const styles = StyleSheet.create({
    screen:
    {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        marginTop: Dimensions.get('screen').height > 700 ? 100 : 20
    },
    login:
    {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    username:
    {
        width: '50%',
        marginVertical: 20
    },
    logingMethod:
    {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orText:
    {
        fontSize: 20
    },
    loginBtn:
    {
        fontSize: 25
    },
    signInBtn:
    {
        fontSize: 15,
        backgroundColor: Colors.nutralColor
    }

});
export default WelcomeScreen;


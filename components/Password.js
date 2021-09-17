import React, { useState } from 'react';

import { View, StyleSheet, I18nManager, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Password = (props) => {

    const [showPass, setShowPass] = useState(false);

    return (
        <View style={{...props.style}, styles.container}>
            <TextInput style={styles.text} secureTextEntry={!showPass} placeholder={'Password'} onChangeText={props.onChangeText} value={props.value}/>
            {showPass ? <AntDesign onPress={() => setShowPass(!showPass)} style={styles.eye} name="eye" size={18} color="black" /> :
                <Entypo onPress={() => setShowPass(!showPass)} style={styles.eye} name="eye-with-line" size={18} color="black" />}
        </View>
    );

};


const styles = StyleSheet.create({
    container:
    {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        borderBottomWidth: 1,
        width: '50%'
    },
    text:
    {
        flex: 1,
        width: '90%',
        textAlign:'left'
    },
    eye:
    {
        paddingTop: 7
    }
});
export default Password;


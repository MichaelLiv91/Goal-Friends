import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

const MyButton = (props) => {
    
    const backgroundColor = props && props.style && props.style.backgroundColor ? { backgroundColor: props.style.backgroundColor } : { backgroundColor: Colors.primaryColor };
    const fontSize =  props && props.style && props.style.fontSize ? { fontSize: props.style.fontSize } : { fontSize: 25 };
    return (
        <TouchableOpacity  onPress={props.onPress}>
            <View style={{...styles.btnStyle, ...backgroundColor}}>
                <Text style={{...styles.textStyle, ...fontSize}}>{props.children}</Text>
            </View>
        </TouchableOpacity>);

};


const styles = StyleSheet.create({
    btnStyle:
    {
        width: Dimensions.get('window').width > 350? 200: 160,
        borderRadius:5,
        alignItems:'center',
        marginVertical:20
    },
    textStyle:
    {
        fontFamily:'open-sans',
        padding:10,
        color:"white",
        fontSize:25
    }
});
export default MyButton;


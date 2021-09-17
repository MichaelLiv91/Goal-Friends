import React from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';


const MyTextInput = (props) => {

    return (
       
            <TextInput {...props} style={styles.textStyle} placeholder={props.placeholder} ></TextInput>
    );
};


const styles = StyleSheet.create({
    textStyle:
    {
        height: 30,
        marginVertical:10,
        borderBottomWidth:1
    }
});
export default MyTextInput;


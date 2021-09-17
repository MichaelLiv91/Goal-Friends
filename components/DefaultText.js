import React from 'react';

import { Text, StyleSheet } from 'react-native';


const DefaultText = (props) => {

    return (

        <Text style={styles.textStyle, {...props.style}} {...props}>{props.children}</Text>
    );

};


const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'open-sans',
        fontSize: 16
    }
});
export default DefaultText;


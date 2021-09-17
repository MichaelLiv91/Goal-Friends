import React from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';
import DefaultText from './DefaultText';

const TextBtn = (props) => {

    
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
            <DefaultText style={props.style}>{props.children}</DefaultText>
        </TouchableOpacity>);

};


const styles = StyleSheet.create({
    container:
    {
        marginHorizontal:10
    }
});
export default TextBtn;


import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, I18nManager, Dimensions } from 'react-native';
import Colors from '../constants/Colors'
import { Entypo } from '@expo/vector-icons';

const AddBtn = (props) => {

    const iconSize = Dimensions.get('window').width > 450? 110: 80

    return (
        <TouchableOpacity style={I18nManager.isRTL ? {...styles.leftSide} : {...styles.rightSide}} onPress={props.onPress}>
            <Entypo name="circle-with-plus" size={iconSize} color={Colors.primaryColorRGBTransparent} />
        </TouchableOpacity>);

};


const styles = StyleSheet.create({
    leftSide:
    {
        borderRadius: 60,
        position: 'absolute',
        bottom: 15,
        left: 10
    },
    rightSide:
    {
        borderRadius: 60,
        position: 'absolute',
        bottom: 15,
        right: 10,
    }

});
export default AddBtn;


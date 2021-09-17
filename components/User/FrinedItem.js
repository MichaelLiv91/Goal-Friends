import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Sizes from '../../constants/Sizes';
import DefaultText from '../DefaultText';


const FrinedItem = (props) => {

    return (
        <TouchableOpacity>
            <ImageBackground style={styles.img} source={{ uri: props.friend.userDetails.picture }}>
                <View style={styles.titleContainer}>
                    <DefaultText style={styles.textStyle}>{props.friend.userDetails.name}</DefaultText>
                </View>
            </ImageBackground>
        </TouchableOpacity>);

};


const styles = StyleSheet.create({
    img:
    {
        width: Dimensions.get('window').width > 350? Sizes.friendPicBig: Sizes.friendPicSmall,
        height: Dimensions.get('window').height > 600 ? Sizes.friendPicBig: Sizes.friendPicSmall,
        borderRadius: 5,
        marginHorizontal: 5,
        justifyContent: 'flex-end',
    },
    titleContainer:
    {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    textStyle:
    {
        fontFamily: 'open-sans-bold',
        fontSize: Dimensions.get('window').width >= 350 ? 14 : 10,
        color: 'white',
        textAlign: 'center'
    },
});
export default FrinedItem;


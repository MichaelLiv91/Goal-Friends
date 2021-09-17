import React from 'react';

import { View, Text, StyleSheet, I18nManager } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Logo = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <FontAwesome name="soccer-ball-o" size={24} color="white"  style={{ paddingVertical: 3}} />
                <MaterialCommunityIcons name="ampersand" size={30} color="white" />
                <FontAwesome5 name="users" size={24} color="white"  style={{ paddingVertical: 3 }}/>
            </View>
        </View>);
};


const styles = StyleSheet.create({
    container:
    {
        borderRadius:5,
        borderWidth: 1,
        borderColor:'white',
        borderRadius:5,
        padding:5
    },
    logo:
    {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignContent: 'center',
        justifyContent: 'center',
    }
});
export default Logo;


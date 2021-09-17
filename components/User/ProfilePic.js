import React from 'react';

import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';


const ProfilePic = (props) => {

    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity>
                <Image style={styles.image} source={props.source} resizeMode='cover'></Image>
            </TouchableOpacity>
        </View>);

};


const styles = StyleSheet.create({
    
    image:
    {
        margin:20,
        width:200,
        height:200,
        borderRadius:20,
        borderWidth:1,
        borderColor:'black'
    }
});
export default ProfilePic;


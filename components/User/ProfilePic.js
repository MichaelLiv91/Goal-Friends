import React from 'react';

import { StyleSheet, TouchableOpacity, Image } from 'react-native';


const ProfilePic = (props) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={props.source} resizeMode='cover'></Image>
        </TouchableOpacity>);

};


const styles = StyleSheet.create({
    container:
    {
        alignItems:'center',
    },
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


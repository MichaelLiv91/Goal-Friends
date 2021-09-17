import React from 'react';

import { View, Text, StyleSheet, I18nManager } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import DefaultText from '../DefaultText';
import Texts from '../../constants/Texts';

const UserDetails = (props) => {

    const userDetails = props.userDetails;

return(
    <View style={styles.userDetails}>
        <View style={styles.elemContainer}> 
            <Entypo name="home" size={20} color="black" />
            <View style={styles.textContainer}>
                <DefaultText>{userDetails.from}</DefaultText>
            </View>
        </View>
        <View style={styles.elemContainer}> 
            <DefaultText style={{fontFamily:'open-sans-bold'}}>{I18nManager.isRTL ? Texts.Age.heb : Texts.Age.eng}</DefaultText>
            <View style={styles.textContainer}>
            <DefaultText>{userDetails.age+" "}</DefaultText>  
            
            </View>
        </View>
    </View>

)};


const styles = StyleSheet.create({
    userDetails:
    {
        padding:10,
        marginHorizontal:30,
        marginVertical:10,
        backgroundColor:'#DADCE1',
        borderRadius:5
    },
    elemContainer:
    {
        flexDirection: I18nManager.isRTL? 'row-reverse': 'row',
        marginVertical:5,
        
    },
    fromText:
    {
        textAlign:'center',
    },
    textContainer:
    {
        marginHorizontal:20
    }
});

export default UserDetails;


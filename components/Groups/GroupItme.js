import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, I18nManager } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import Texts from '../../constants/Texts';
import { LeaveGroup, Remove } from '../../store/actions/groups';
import DefaultText from '../DefaultText';
import ObjectModal from '../ObjectModal';
import TextBtn from '../TextBtn';


const GroupItme = (props) => {

    const [isLongPressed, setLongPressed] = useState(false);
    const user = useSelector(state => state.auth);
    const GroupDispatcher = useDispatch();

    const onDelete = () => {

        GroupDispatcher(LeaveGroup(props.id, user.userId));
        setLongPressed(false);
    }
    return (
        <View style={styles.container}>

            {isLongPressed &&
                <ObjectModal visible={isLongPressed} onClose={() => setLongPressed(false)} modalView={styles.modalView}>
                    <DefaultText style={styles.ModaltextStyle}>
                        {
                            I18nManager.isRTL ? Texts.Leave.heb: Texts.Leave.eng
                        }
                        <DefaultText style={{ fontFamily: 'open-sans-bold' }}> {props.name}</DefaultText>  
                        {
                            I18nManager.isRTL ? '': ' group'
                        }?</DefaultText>
                    <View style={styles.btnsStyle}>
                        <TextBtn style={styles.noBtn} onPress={() => setLongPressed(false)}>{I18nManager.isRTL ? Texts.No.heb : Texts.No.eng}</TextBtn>
                        <TextBtn style={styles.yesBtn} onPress={() => { onDelete() }}>{I18nManager.isRTL ? Texts.Yes.heb : Texts.Yes.eng}</TextBtn>
                    </View>
                </ObjectModal>}
            <TouchableOpacity onLongPress={() => setLongPressed(true)} onPress={() => props.onPress(props.id)}>
                <ImageBackground style={styles.img} source={{ uri: props.pic }} resizeMode='cover'>
                    <View style={styles.titleContainer}>
                        <DefaultText style={styles.textStyle}>{props.name}</DefaultText>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>);

};


const styles = StyleSheet.create({
    container:
    {
        margin: 5,
    },
    img:
    {
        width: '100%',
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    titleContainer:
    {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,

    },
    textStyle:
    {
        fontFamily: 'open-sans-bold',
        fontSize: Dimensions.get('window').width >= 350 ? 14 : 10,
        color: 'white',
        textAlign: 'center'
    },
    modalView:
    {

    },
    btnsStyle:
    {
        paddingVertical: 20,
        justifyContent: 'space-evenly',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row'
    },
    ModaltextStyle:
    {
        fontSize: Dimensions.get('window').width > 400 ? 22 : 16
    },
    yesBtn:
    {
        color: Colors.primaryColor,
        fontSize: Dimensions.get('window').width > 400 ? 22 : 16
    },
    noBtn:
    {
        color: Colors.redGmailStyle,
        fontSize: Dimensions.get('window').width > 400 ? 22 : 16
    }
});
export default GroupItme;


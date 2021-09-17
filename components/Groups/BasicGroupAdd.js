import React, { useState } from 'react';

import { View, StyleSheet, I18nManager } from 'react-native';
import MyTextInput from '../MyTextInput';
import Colors from '../../constants/Colors';
import TextBtn from '../TextBtn';
import SelectDropdown from 'react-native-select-dropdown'
import { AddPlayer, Create, PRIVACY_SETTINGS, SetManager } from '../../store/actions/groups'
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-native-uuid';
import Texts from '../../constants/Texts';

const BasicGroupAdd = (props) => {


    const [selectedPrivacy, setSelectedPrivacy] = useState(PRIVACY_SETTINGS[0]);
    const [groupName, setGroupName] = useState('Misha');
    const user = useSelector(state=>state.auth);

    const GroupDispatcher = useDispatch();

    const onConfirm = () => {
        const groupId = uuid.v4();
        GroupDispatcher(Create(groupId, { name: groupName, state: selectedPrivacy }))
        GroupDispatcher(AddPlayer(groupId, user.userId));
        GroupDispatcher(SetManager(groupId,user.userId));
        props.onClose();
    }
    return (
        <View style={styles.gropuNameStyle}>
            <MyTextInput value={groupName} placeholder='Group name' onChangeText={text => setGroupName(text)}></MyTextInput>

            <SelectDropdown
                data={PRIVACY_SETTINGS}
                onSelect={(selectedItem, index) => {
                    setSelectedPrivacy(selectedItem);
                }}
                buttonStyle={styles.dropDownStyle}
                buttonTextStyle={styles.dropDownTextStyle}
                defaultValue={selectedPrivacy}></SelectDropdown>

            <View style={styles.buttonsContainer}>
                <TextBtn style={styles.cancel} onPress={props.onClose}>
                    {
                        I18nManager.isRTL? Texts.Cancael.heb:Texts.Cancael.eng
                    }
                    </TextBtn>
                <TextBtn style={styles.confrim} onPress={() => { onConfirm() }}>
                    {
                        I18nManager.isRTL? Texts.Confirm.heb:Texts.Confirm.eng
                    }
                    </TextBtn>
            </View>
        </View>);

};


const styles = StyleSheet.create({

    gropuNameStyle:
    {
        alignContent: 'flex-start',
        width: '100%'
    },
    buttonsContainer:
    {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'center',
        marginVertical: 5
    },
    confrim:
    {
        color: Colors.primaryColor,
    },
    cancel:
    {
        color: Colors.redGmailStyle
    },
    dropDownStyle:
    {
        width: '100%',
        marginVertical: 10
    },
    dropDownTextStyle:
    {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    }
});
export default BasicGroupAdd;


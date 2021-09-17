import React from 'react';

import { View, Text, StyleSheet, ScrollView, ImageBackground, I18nManager, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import DefaultText from '../../components/DefaultText';
import Texts from '../../constants/Texts';
import { format } from 'date-fns'

const GroupScreen = (props) => {

    const createdAt = I18nManager.isRTL ? Texts.CreatedAt.heb+': ':Texts.CreatedAt.eng+': ';
    const currentId = props.route.params.GroupId;
    const GroupsData = useSelector(state => state.groupsData);
    const currentGroup = GroupsData.Groups.find(elem => currentId === elem.id);
    const date = format(currentGroup.dateCreated, "dd/MM/yyyy");
    console.log(currentGroup);

    return (
        <ScrollView style={styles.screen}>
            <ImageBackground style={styles.img} source={{ uri: currentGroup.picture }} resizeMode='cover'>
                
                <View style={styles.titleContainer}>
                    <DefaultText style={styles.NameTextStyle}>{currentGroup.name}</DefaultText>
                    <DefaultText style={styles.dateTextStyle}>{createdAt + date}</DefaultText>
                </View>
            </ImageBackground>
        </ScrollView>);

};


const styles = StyleSheet.create({
    screen:
    {
        flex:1
    },
    img:
    {
        width:'100%',
        height:Dimensions.get('window').width > 400?300:200,
        justifyContent:'flex-end'
    },
    titleContainer:
    {
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignItems:'flex-start'
    },
    dateTextStyle:
    {
        color:'white',
        fontSize: Dimensions.get('window').width > 400 ? 14 : 12
    },
    NameTextStyle:
    {
        color:'white',
        fontSize: Dimensions.get('window').width > 400 ? 24 : 20
    }
});
export default GroupScreen;


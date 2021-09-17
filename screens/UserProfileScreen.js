import React from 'react';

import { View, StyleSheet, ScrollView, I18nManager, Button, FlatList, TouchableNativeFeedback,TouchableOpacity,Platform, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import FrinedItem from '../components/User/FrinedItem';

import ProfilePic from '../components/User/ProfilePic';
import UserDetails from '../components/User/UserDetails';
import Colors from '../constants/Colors';
import { USERS } from '../data/dummy_data';
import { Entypo } from '@expo/vector-icons';
import MyFeedbackBtn from '../components/MyFeedbackBtn';
import Sizes from '../constants/Sizes';


const UserProfileScreen = (props) => {

    const userID = useSelector(state => state.auth.userId);
    const user = USERS.find((elem) => elem.id === userID).userDetails;

    const isListLongEnough = user.friends.length * Sizes.friendPicBig < Dimensions.get('window').width;
    
    const renderFriends = (itemData) => {
        const friend = USERS.find(elem => elem.id === itemData.item.id)
        return (
            <FrinedItem friend={friend} />
        );
    }

    return (
        <ScrollView style={styles.screen}>
            <ProfilePic source={{ uri: user.picture }} />
            <View style={styles.userNameContainer}>
                <DefaultText style={styles.userName}>{user.name} {user.lastName}</DefaultText>
            </View>
            <UserDetails userDetails={user} />
            <View style={styles.friendsContainer}>
                <DefaultText style={{ fontFamily: 'open-sans-bold' }}>Friends:</DefaultText>
                <View style={styles.listContainer}>
                    <FlatList
                        nestedScrollEnabled
                        horizontal
                        inverted={I18nManager.isRTL}
                        data={user.friends}
                        renderItem={renderFriends}
                    />
                    {!isListLongEnough?<View style={styles.moreFriendsBtn}>
                        <MyFeedbackBtn >
                            <Entypo name="triangle-right" size={24} color="black" />
                        </MyFeedbackBtn>
                    </View>:null}
                </View>
            </View>
            <View style={styles.btnGroup}>
                <Button style={styles.btnStyle} title='Groups'></Button>
            </View>
        </ScrollView>);

};


const styles = StyleSheet.create({
    scree:
    {
        flex: 1,
    },
    image:
    {
        width: 100,
        height: 100
    },
    btnStyle:
    {
        backgroundColor: Colors.nutralColor,
        fontSize: 16,
    },
    btnGroup:
    {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-evenly',
        margin: 15
    },
    userName:
    {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        borderBottomWidth: 0.5,
        width: '80%',
        textAlign: 'center',

    },
    userNameContainer:
    {
        alignItems: 'center',
    },
    friendsContainer:
    {
        marginHorizontal: 10
    },
    listContainer:
    {
        flex: 1,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        width: '100%',
        height: '100%'
    },
    moreFriendsBtn:
    {
        height: '100%',
        justifyContent: 'center'
    }

});
export default UserProfileScreen;



import React, { useEffect } from 'react';

import {  StyleSheet, FlatList, View,I18nManager, ScrollView } from 'react-native';
import AddBtn from '../components/AddBtn';
import FeedItem from '../components/Feed/FeedItem';
import { FEEDS } from '../data/dummy_data';
import { Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import DefaultText from '../components/DefaultText';
import { FontAwesome } from '@expo/vector-icons';
const UserFeedScreen = (props) => {


    const userID = useSelector(state=>state.auth.userId);
   
    useEffect(() => {
        props.navigation.setParams({ id: userID });
    }, [userID])
   
    
    
    const renderFeed = (itemData) =>
    {
        return <FeedItem id={itemData.id} key={itemData.id}/>
    }

    const test = ()=>
    {
        console.log('hiiiii')
    }

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
                
                    {FEEDS.map((elem) => renderFeed(elem))}
                
                <View style={styles.footer}>
                    <View style={styles.copyRight}>
                        <DefaultText style={{marginHorizontal:2}}>All rights reserved</DefaultText>
                        <FontAwesome name="copyright" size={16} color="black" />
                    </View>
                </View>
            </ScrollView>
            <AddBtn />
        </View>);

};

export const screenOptions = (navData) => {

    
    const userId = navData.route.params ? navData.route.params.id: null;
    const drawer = !I18nManager.isRTL ? {
     
        headerLeft:()=>/*<Image source={{ uri: owenerDetails.picture }} style={styles.image} resizeMode="stretch" />*/null,
        drawerPosition: 'left'
    } : {
       
        headerRight:()=>null
    }
    return drawer;
    
}

export const tabIcon = (props) => <MaterialIcons name="dynamic-feed" size={props.size} color={props.color}/>

const styles = StyleSheet.create({
    screen:
    {
        justifyContent:'flex-start',
        alignContent:'center',

    },
    footer:
    {
        height:100,
        justifyContent:'flex-end',
        alignItems:'center',
        alignContent:'center'
    },
    copyRight:
    {
        flexDirection:I18nManager.isRTL?'row-reverse':'row',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    }
});
export default UserFeedScreen;

